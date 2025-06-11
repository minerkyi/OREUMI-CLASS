import { useState } from "react";
import { type QuizConfig, type QuizQuestion, type QuizSummary } from "./types/quiz";
import QuizSetup from "./components/QuizSetup";
import QuizGame from "./components/QuizGame";
import QuizResult from "./components/QuizResult";

enum QuizStep {
  SETUP,
  PLAYING,
  RESULT
}

function App() {

  const [step, setStep] = useState(QuizStep.SETUP);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [result, setResult] = useState<QuizSummary | null>(null);

  const startQuiz = async (config: QuizConfig) => {

    const url = new URL('https://opentdb.com/api.php');
    url.searchParams.append('amount', String(config.amount));
    url.searchParams.append('category', config.category.toString());
    url.searchParams.append('difficulty', config.difficulty);
    url.searchParams.append('type', 'multiple');

    try {
      const response = await fetch(url);
      if(!response.ok) {
        throw new Error('퀴즈 데이터를 불러오는데 문제가 발생했습니다!!');
      }
  
      const data = await response.json();
      setQuestions(data.results);
      setStep(QuizStep.PLAYING);

    } catch(error) {
      console.error(error);
    }
  };

  const QuizOver = (quizSummary: QuizSummary) => {
    setResult(quizSummary);
    setStep(QuizStep.RESULT);
  };

  return (
    <>
      <header>
        <h1>퀴즈 챌린지</h1>
      </header>
      <main>
        {step === QuizStep.SETUP && <QuizSetup onStart={startQuiz} />}
        {step === QuizStep.PLAYING && <QuizGame questions={questions} onComplete={QuizOver} />}
        {step === QuizStep.RESULT && <QuizResult result={result} />}
      </main>
    </>
  )
}

export default App
