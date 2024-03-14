import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const SingleQuestion = ({ id, question, answer, activeId, toggleQuestion }) => {
  const isActive = id === activeId

  return (
    <article className='question'>
      <header>
        <h5>{question}</h5>
        <button
          className='question-btn'
          onClick={() => {
            toggleQuestion(id)
          }}
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{answer}</p>}
    </article>
  )
}
export default SingleQuestion
