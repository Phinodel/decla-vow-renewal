import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header: FC = () => {
  const { pathname } = useRouter();
  return (
    <div>
      <ul>
        <Link href={pathname} locale="fr" passHref>
          <a>FR</a>
        </Link>
        <li>/</li>
        <Link href={pathname} locale="nl-BE" passHref>
          <a>Nl</a>
        </Link>
        <li>/</li>
        <Link href={pathname} locale="en-GB" passHref>
          <a>En</a>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
