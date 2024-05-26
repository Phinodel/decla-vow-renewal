interface TextKeysType {
  title: string;
  text: TextContentType[];
}

interface TextContentType {
  name: string;
  key?: string;
  text: string[];
}

export const textKeys: TextKeysType[] = [
  {
    title: 'welcome',
    text: [
      {
        name: 'Delphine',
        text: ['delphine1'],
      },
      {
        name: 'Pierre',
        text: ['pierre1'],
      },
    ],
  },
  {
    title: 'titlePart1',
    text: [
      {
        name: 'Pierre',
        text: ['pierre1-1', 'pierre1-2', 'pierre1-3', 'pierre1-4'],
      },
      {
        name: 'Delphine',
        text: [
          'delphine1-1',
          'delphine1-2',
          'delphine1-3',
          'delphine1-4',
          'delphine1-5',
          'delphine1-6',
          'delphine1-7',
          'delphine1-8',
        ],
      },
      {
        name: 'Pierre',
        text: ['pierre1-5', 'pierre1-6', 'pierre1-7'],
      },
      {
        name: 'Delphine',
        text: ['delphine1-9', 'delphine1-10'],
      },
    ],
  },
  {
    title: 'titlePart2',
    text: [
      {
        name: 'Thibault',
        key: 'titlePart2-1',
        text: ['thibault-1'],
      },
      {
        name: 'Alexander',
        key: 'titlePart2-2',
        text: ['alexander-1', 'alexander-2', 'alexander-3', 'alexander-4'],
      },
    ],
  },
  {
    title: 'titlePart3',
    text: [
      {
        name: 'Pierre',
        text: [
          'pierre3-1',
          'pierre3-2',
          'pierre3-3',
          'pierre3-4',
          'pierre3-5',
          'pierre3-6',
          'pierre3-7',
          'pierre3-8',
          'pierre3-9',
          'pierre3-10',
          'pierre3-11',
          'pierre3-12',
          'pierre3-13',
          'pierre3-14',
          'pierre3-15',
        ],
      },
      {
        name: 'Delphine',
        text: [
          'delphine3-1',
          'delphine3-2',
          'delphine3-3',
          'delphine3-4',
          'delphine3-5',
          'delphine3-6',
          'delphine3-7',
          'delphine3-8',
          'delphine3-9',
          'delphine3-10',
          'delphine3-11',
          'delphine3-12',
          'delphine3-13',
          'delphine3-14',
        ],
      },
    ],
  },
  {
    title: 'titlePart4',
    text: [
      {
        name: 'Delphine',
        text: ['delphine4-1', 'delphine4-2'],
      },
      {
        name: 'Pierre',
        text: ['pierre4-1'],
      },
    ],
  },
  {
    title: 'titlePart5',
    text: [
      {
        name: 'Delphine',
        text: ['delphine5-1'],
      },
      {
        name: 'Pierre',
        text: ['pierre5-1'],
      },
    ],
  },
];
