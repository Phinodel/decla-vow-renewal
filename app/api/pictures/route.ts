import { NextResponse, NextRequest } from 'next/server';
import { list } from '@vercel/blob';

const getFileNames = async (id: string) => {
  try {
    const response = await list({ prefix: `${id}/`, mode: 'folded' });

    return {
      data: { images: response.blobs },
      status: 200,
    };
  } catch (error) {
    return { data: { error: 'Error getting filenames' }, status: 500 };
  }
};

// To handle a GET request to /api
export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');
  if (id) {
    const { data, status } = await getFileNames(id);
    return NextResponse.json(data, { status });
  } else {
    return NextResponse.json({ message: 'Error: missing id' }, { status: 500 });
  }
}
