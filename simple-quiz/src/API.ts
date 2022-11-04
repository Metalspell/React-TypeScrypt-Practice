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

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }));
}

export const categorySelect = async () => {
  let result: String[] = [];
  const endpoint = 'https://opentdb.com/api_category.php';
  const data = await (await fetch(endpoint)).json();
  const categoryArray = [...Object.values(data)] as any[]

  // for (let i = 0; i < categoryArray[0].length; i++) {
  //   result.push(categoryArray[0])
  // }

  return categoryArray[0];
}
