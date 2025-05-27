import React, { createContext, useState } from 'react';
import Header from './Components/Header';
import Contents from './Components/Contents';

export default function Language() {

  const [lang, setLang] = useState('ko');

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <Contents lang={lang} />
    </>
  )
}
