import style from './SelectCard.module.css';
import { Category } from '../../API';

type Props = {
  setAmountOfQuestions: (value: number) => void;
  amountOfQuestions: number;
  setDifficulty: (value: string) => void;
  difficulty: string;
  category: Category[];
  setSelectedCategory: (value: number) => void;
  setDefaultQuizParams: (value: boolean) => void;
  setQuizType: (value: string) => void;
}

const SelectCard: React.FC<Props> = ({
  amountOfQuestions,
  setAmountOfQuestions,
  setDifficulty,
  difficulty,
  category,
  setSelectedCategory,
  setDefaultQuizParams,
  setQuizType,
}) => {

  const amountHandler = (e: any) => {
    setAmountOfQuestions(+e.target.value)
    setDefaultQuizParams(false);
  }

  const difficultyHandler = (e: any) => {
    setDifficulty(e.target.value);
    setDefaultQuizParams(false);
  }

  const categoryHandler = (e: any) => {
    setSelectedCategory(+e.target.value);
    setDefaultQuizParams(false);
  }

  const typeHandler = (e: any) => {
    setQuizType(e.target.value);
    setDefaultQuizParams(false);
  }

  return (
    <section className={style.cardWrapper}>
      <label htmlFor="amountOfQuestions">Enter the amount of questions (1-50):</label>

      <input
        type="number"
        id={style['amountOfQuestions']}
        name="tentacles"
        min="1" max="50"
        onChange={amountHandler}
        value={amountOfQuestions}
      ></input>

      <label htmlFor="difficulty"> Select difficulty </label>
      <select
        name="selectDificulty"
        id={style['difficulty']}
        value={difficulty}
        onChange={difficultyHandler}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <label htmlFor="category"> Select difficulty </label>
      <select
        name="selectCategory"
        id={style['category']}
        onChange={categoryHandler}
      >
        {category.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
      </select>

      <label htmlFor="type"> Select type </label>
      <select
        name="selectDificulty"
        id={style['type']}
        onChange={typeHandler}
      >
        <option value="">Any type</option>
        <option value="multiple">Multiple choice</option>
        <option value="boolean">True / False</option>
      </select>
    </section>
  );
}

export default SelectCard;