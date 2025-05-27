import React from 'react'
import {LanguageProvider} from './Components/LanguageProvider';
import LangSelector from './Components/LangSelector';
import Content from './Components/Content';

export default function LangApp() {
  return (
    <LanguageProvider>
      <LangSelector />
      <Content />
    </LanguageProvider>
  );
}
