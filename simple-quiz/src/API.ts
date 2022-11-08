import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type Category = {
  id: number;
  name: string;
}

export type QuestionState = Question & { answers: string[] }


export const fetchQuizQuestions = async (amount: number, difficulty: string, category: number, quizType: string) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${quizType}`;
  const data = await (await fetch(endpoint)).json();
  console.log(data)
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }));
}

export const categorySelect = async () => {
  const endpoint = 'https://opentdb.com/api_category.php';
  const data = await (await fetch(endpoint)).json();
  const categoryArray = [...Object.values(data)] as any[]
  return categoryArray[0];
}
