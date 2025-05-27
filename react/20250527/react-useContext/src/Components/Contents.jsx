import { useContext } from "react";
import {LanguageInfo} from "./Context";

export default function Contents(props) {

  const languages = useContext(LanguageInfo);

  return (
    <>
      <h1>{languages[props.lang].title}</h1>
      <p>{languages[props.lang].greeting}</p>
      <p>{languages[props.lang].description}</p>
    </>
  )
}
