import React, { useState, useEffect } from 'react';
import Card from './components/quesion`s_card/Card';
import { fetchQuizQuestions } from './API';
import { QuestionState, Difficulty } from './API';
import style from './App.module.css'
import SelectCard from './components/select_category_card/SelectCard';
import { categorySelect, Category } from './API';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const [selectParams, setSelectParams] = useState<boolean>(false);
  const [amountOfQuestions, setAmountOfQuestions] = useState<number>(1);
  const [difficulty, setDifficulty] = useState<string>(Difficulty.EASY);
  const [category, setCategory] = useState<Category[]>([]);

  const startTrivia = async () => {

    const categoryArray = await categorySelect();
    setCategory(categoryArray)

    setLoading(true)
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      amountOfQuestions,
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
    if (nextQuestion === amountOfQuestions) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <section className={style.generalWrapper}>
      <h1 className={style.generalTitle}>Quiz</h1>
      {gameOver || userAnswers.length === amountOfQuestions ?
        <button
          className={style.startButton}
          onClick={startTrivia}
        >
          Start quiz
        </button>
        :
        null
      }
      {!gameOver ? <p className={style.score}>Score: {score}</p> : null}
      {loading ? <p>Loading Questions ...</p> : null}
      {!loading && !gameOver && selectParams ?
        <Card
          questionNumber={number + 1}
          totalQuestions={amountOfQuestions}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
        :
        null
      }
      <SelectCard
        setAmountOfQuestions={setAmountOfQuestions}
        amountOfQuestions={amountOfQuestions}
        setDifficulty={setDifficulty}
        difficulty={difficulty}
        category={category}
      />
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== amountOfQuestions - 1 ?
        <button
          onClick={nextQuestion}
          className={style.nextQuestionButton}
        >
          Next Question
        </button>
        :
        null
      }
    </section>
  );
}

export default App;
