import { GoogleSpreadsheet } from 'google-spreadsheet';
import { Guest } from './types';

const connectToSpreadsheet = async (): Promise<GoogleSpreadsheet | undefined> => {
  try {
    const doc = new GoogleSpreadsheet(process.env.NEXT_PUBLIC_SPREADSHEET_ID || '');

    if (!doc) {
      throw new Error('could not find document');
    }

    await doc.useServiceAccountAuth({
      client_email: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_CLIENT_EMAIL || '',
      private_key: (process.env.NEXT_PUBLIC_GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    });

    await doc.loadInfo();

    return doc;
  } catch (err) {
    return undefined;
  }
};

const rowNames = {
  name: 'Name',
  isComing: 'RSVP',
  food: 'Dietary requirements',
};

export const updateList = async (
  guests: Guest[],
  extraInfo: { accepts: boolean; food: string },
): Promise<{ updateListError: Error | null; guestAlreadyExists: boolean }> => {
  try {
    const doc = await connectToSpreadsheet();

    if (!doc) {
      throw new Error('could not find document');
    }

    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    const allGuestNames = rows.map((e) => e[rowNames.name]);

    const [registered, unregistered] = guests.reduce(
      (result, guest) => {
        const isRegistered = allGuestNames.includes(guest.name);
        result[isRegistered ? 0 : 1].push(guest);

        return result;
      },
      [[] as Guest[], [] as Guest[]],
    );

    registered.map(async (guest) => {
      const index = allGuestNames.indexOf(guest.name);

      rows[index][rowNames.isComing] = extraInfo.accepts;
      rows[index][rowNames.food] = extraInfo.food;

      await rows[index].save();
    });

    const newData = unregistered.map((guest) => ({
      [rowNames.name]: guest.name,
      [rowNames.isComing]: extraInfo.accepts,
      [rowNames.food]: extraInfo.food,
    }));

    await sheet.addRows(newData);

    return { updateListError: null, guestAlreadyExists: registered.length > 0 };
  } catch (err) {
    console.error(err);
    return { updateListError: new Error('something went wrong'), guestAlreadyExists: false };
  }
};
