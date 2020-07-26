import React from 'react'
import './App.css'
import { SocialFollow } from './SocialFollow'
import { useState } from 'react'
import { useEffect } from 'react'

export const App = () => {
  const [advice, setAdvice] = useState('')

  const fetchAdvice = async () => {
    await fetch('https://api.adviceslip.com/advice')
      .then((resp) => resp.json())
      .then((data) => setAdvice(data.slip.advice))
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <div>
      <div className="app">
        <h1>WELCOME TO YOUR PERSONAL ADVISOR</h1>
        <h3>To keep you motivated and calm amidst chaos</h3>
        <div className="card">
          <h2>{advice}</h2>
          <button className="buton" onClick={fetchAdvice}>
            <span>
              <h4>Show today's advice</h4>
            </span>
          </button>
        </div>
      </div>
      <footer>
        <SocialFollow />
      </footer>
    </div>
  )
}
