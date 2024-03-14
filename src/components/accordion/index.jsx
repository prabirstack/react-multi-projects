import { useState } from 'react'
import data from './data'
import './styles.css'
import Question from './Question'

export default function Accordion() {
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null)
  console.log(setQuestions)
  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id
    setActiveId(newActiveId)
  }
  return (
    <main>
      <Question
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  )
}
