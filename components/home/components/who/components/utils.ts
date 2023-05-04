import { GoogleSpreadsheet } from 'google-spreadsheet';

export const getList = async () => {
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

    const sheet = doc.sheetsByIndex[0];
    console.log(sheet.title);
  } catch (err) {
    console.log(err);
  }
};

export const updateList = async (data: any) => {
  console.log({ data });
};
