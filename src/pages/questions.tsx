import React from 'react'
import { frequently_asked_questions } from '@/lib/data';

export default function questions() {
  return (
    <>
      <main>
        <h1 className="headline-medium">Questions With Believe Support Services</h1>
        <p className="body-large">After sending a survey we pulled some of the most frequently asked questions asked by our customers. We received and compiled them all into one place for your convenience. Have more questions? Please reach out!</p>
        <section className='my-8 space-y-4'>
          {frequently_asked_questions.map((data: any) => {
            return (
              <>
                <div className="">
                  <h2 className="title-medium">{data.question}</h2>
                  <p className="body-large">{data.awnser}</p>
                </div>
              </>
            )
          })}
        </section>
      </main>
    </>
  )
}
