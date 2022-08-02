import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import Styled from './styles';

{
  /* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />; */
}

const HomeModule: FC = () => (
  <>
    <div>
      <h1>
        <span>Save</span>
        <span>the date</span>
      </h1>
      <h2>13/04/24</h2>
    </div>
    <div>
      <h3>Who</h3>
      <p>Delphine Claerhout &amp; Pierre De Conto</p>
      <p>and hopefully you too</p>
      <p>paper invitation to follow</p>
    </div>
    <div>
      <h3>What</h3>
      <p>
        We would like to invite you to our vow renewal on 13/04/2024 (our fifth wedding anniversary). There is a small
        ceremony planned, followed by dinner and an afterparty to celebrate.
      </p>
      <p>more details coming soon...</p>
    </div>
    <div>
      <h3>Where</h3>
      <p>t'Verstand van leven</p>
      <p>Sint-Kornelisplein 20, 9667 Horebeke, Belgium</p>
    </div>
  </>
);

export default HomeModule;
