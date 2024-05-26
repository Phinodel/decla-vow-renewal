import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vow renewal Delphine & Pierre',
    short_name: 'Vow renewal',
    description: 'Celebrate with us, 13/04/2024, vow renewal of Delphine & Pierre',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
