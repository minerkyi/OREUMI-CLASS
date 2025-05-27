import { useContext } from "react";
import {LanguageInfo} from "./Context";

export default function Header(props) {
  const languages = useContext(LanguageInfo);
  return (
    <div>
      <p>{languages[props.lang].languageSelector}</p>
      <button onClick={() => props.setLang('en')} disabled={props.lang === 'en'}>English</button>
      <button onClick={() => props.setLang('ko')} disabled={props.lang === 'ko'}>한국어</button>
      <button onClick={() => props.setLang('ja')} disabled={props.lang === 'ja'}>日本語</button>
    </div>
  )
}
