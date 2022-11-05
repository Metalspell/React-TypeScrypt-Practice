import style from './SelectCard.module.css';
import { Category } from '../../API';

type Props = {
  setAmountOfQuestions: (value: number) => void;
  amountOfQuestions: number;
  setDifficulty: (value: string) => void;
  difficulty: string;
  category: Category[];
  setSelectedCategory: (value: number) => void;
}

const SelectCard: React.FC<Props> = ({
  amountOfQuestions,
  setAmountOfQuestions,
  setDifficulty,
  difficulty,
  category,
  setSelectedCategory,
}) => {

  const amountHandler = (e: any) => {
    setAmountOfQuestions(+e.target.value)
  }

  const difficultyHandler = (e: any) => {
    setDifficulty(e.target.value);
  }

  const categoryHandler = (e: any) => {
    setSelectedCategory(+e.target.value);
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
    </section>
  );
}

export default SelectCard;