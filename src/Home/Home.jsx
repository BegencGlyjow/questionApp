import React, { useState } from 'react';
import { Questions } from './Questions'
const Home = () => {


  const [currentQuestion, setcurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleCorrect = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    const nextquestion = currentQuestion + 1

    if (nextquestion < Questions.length) {
      setcurrentQuestion(nextquestion)
    }
    else {
      setShowScore(true)
    }
  }
  const refresh = () => {
    setcurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }
  return (
    <aside className='flex flex-col font-sans items-center justify-center p-10'>
      <h1 className='text-4xl mt-10 font-black text-cyan-800'>Bilgirje</h1>
      <main className='flex flex-col items-center text-white space-y-5 w-auto mt-10  bg-cyan-700 rounded-xl p-9 shadow-2xl shadow-cyan-900'>

        {
          showScore ?
            <aside>
              <h1>Dogry sany {score} / {Questions.length}</h1>
              <button onClick={refresh} className='bg-sky-400 rounded-xl w-full p-3 text-center mt-3'>Täzeden synaş...</button>
            </aside>
            :

            <div>
              <div className='flex font-black text-xl text-center'>
                <h1>Soraglar</h1>
                <span>{currentQuestion + 1}/{Questions.length}</span>
              </div>
              <h1 className='text-2xl mb-5 font-extrabold'>{Questions[currentQuestion].questionText}</h1>
              <div className='flex flex-col space-y-3'>
                {Questions[currentQuestion].answerquestion.map(item => (
                  <button onClick={() => handleCorrect(item.isCorrect)} className='w-full text-2xl hover:bg-cyan-300 border border-cyan-300 rounded-xl p-3'>
                    {item.answerText}
                  </button>
                ))}
              </div>

        </div>
        }

      </main>
    </aside>
  )
};

export default Home;
