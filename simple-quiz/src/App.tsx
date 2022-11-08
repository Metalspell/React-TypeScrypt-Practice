import React, { useState } from 'react';
import Card from './components/quesion`s_card/Card';
import { fetchQuizQuestions } from './API';
import { QuestionState } from './API';
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
  const [loadingListOfParams, setLoadingListOfParams] = useState(false);
  const [visibilityOfSelectWindow, setVisibilityOfSelectWindow] = useState(true);
  const [defaultQuizParams, setDefaultQuizParams] = useState(true);

  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const [amountOfQuestions, setAmountOfQuestions] = useState<number>(1);
  const [difficulty, setDifficulty] = useState<string>('easy');
  const [category, setCategory] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [quizType, setQuizType] = useState<string>("")


  const selectTriviaParams = async () => {
    setGameOver(true);
    setLoadingListOfParams(true);
    const categoryArray = await categorySelect();
    setCategory(categoryArray)
    setLoadingListOfParams(false);
    setVisibilityOfSelectWindow(false);
  }

  const startTrivia = async () => {
    setVisibilityOfSelectWindow(true);
    setLoading(true)
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      amountOfQuestions,
      difficulty,
      selectedCategory,
      quizType,
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
      <button
        className={style.startButton}
        onClick={selectTriviaParams}
      >
        Parameters of quiz
      </button>
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
      {loading ? <p className={style.downloadIndo}>Loading questions, please wait</p> : null}
      {defaultQuizParams && loading ?
        <p className={style.downloadIndo}>Quiz started with default parameters</p>
        :
        null
      }
      {loadingListOfParams ?
        <p className={style.downloadIndo}>
          Loading parameters of quiz ...
        </p>
        :
        null
      }
      {!loading && !gameOver && visibilityOfSelectWindow ?
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
      {!loadingListOfParams && !visibilityOfSelectWindow ?
        <SelectCard
          setAmountOfQuestions={setAmountOfQuestions}
          amountOfQuestions={amountOfQuestions}
          setDifficulty={setDifficulty}
          difficulty={difficulty}
          category={category}
          setSelectedCategory={setSelectedCategory}
          setDefaultQuizParams={setDefaultQuizParams}
          setQuizType={setQuizType}
        />
        :
        null
      }
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
