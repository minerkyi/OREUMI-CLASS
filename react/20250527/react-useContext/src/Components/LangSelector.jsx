import UseLanguage from "./UseLanguage";

const LangSelector = () => {

  const {languageData, currentLanguage, changeLanguage} = UseLanguage();

  return (
    <div>
      <h2>{languageData.languageSelector}</h2>

      <button onClick={() => changeLanguage('ko')} disabled={currentLanguage === 'ko'}>한국어</button>
      <button onClick={() => changeLanguage('en')} disabled={currentLanguage === 'en'}>영어</button>
      <button onClick={() => changeLanguage('ja')} disabled={currentLanguage === 'ja'}>일본어</button>
    </div>
  );
};

export default LangSelector;