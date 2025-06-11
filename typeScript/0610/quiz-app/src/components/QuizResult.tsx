import type { QuizSummary } from "../types/quiz"

interface QuizResultProps {
  result: QuizSummary;
}

export default function QuizResult({result}: QuizResultProps) {
  return (
    <section>
      <h2>Quiz Result</h2>
      score: {result.score}
    </section>
  )
}
