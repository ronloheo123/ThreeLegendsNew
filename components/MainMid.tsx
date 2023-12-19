import React from 'react'
import { Header1 } from './Header1';
import { Middle } from './Middle';
import { Footer } from './Footer';

type Props = {}

const MainMid = () => {
  return (
    <>
      <Header1></Header1>
      <Middle></Middle>
      <Footer></Footer>
    </>
  );
}

export {MainMid};