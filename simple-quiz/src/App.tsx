import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import { fetchQuizQuestions } from './API';
import { QuestionState, Difficulty } from './API';

const TOTAL_QUESTIONS = 10;

export type AnwerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnwerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore(prev => prev + 1);
      }
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswers((prev) => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ?
          <button
            className='start'
            onClick={startTrivia}
          >
            Start quiz
          </button>
          :
          null
        }
        {!gameOver ? <p className='score'>Score:</p> : null}
        {loading ? <p>Loading Questions ...</p> : null}
        {!loading && !gameOver && (
          <Card
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ?
          <button
            className='next-question'
            onClick={nextQuestion}
          >
            Next Question
          </button>
          :
          null
        }
      </header>
    </div>
  );
}

export default App;
