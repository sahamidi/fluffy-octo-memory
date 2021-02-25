import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  let [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className='container'>
        <div>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4E03AQEj315wHIvOdw/profile-displayphoto-shrink_200_200/0/1614282695548?e=1619654400&v=beta&t=_6KGzqzspT-Eeqd4fW0L7qQWX68jDadfnFk4HqxxwrU'
            className='img'
            alt='picture of sal'
          ></img>
        </div>
        <h3 className='heading'>Secrets About Sal!!</h3>

        <section className='info'>
          {questions.map((question) => {
            return <SingleQuestion key={questions.id} {...question} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App
