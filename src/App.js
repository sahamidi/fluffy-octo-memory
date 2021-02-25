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
            src='https://media-exp1.licdn.com/dms/image/C4E03AQEX6327OrDS_Q/profile-displayphoto-shrink_200_200/0/1601655547631?e=1619654400&v=beta&t=XcjH4227x8rVZAJvGSibl7MvSDHfP-vonFFQM0Du8aw'
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
