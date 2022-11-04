import React from 'react';
import { AnswerObject } from '../../App';
import style from './Card.module.css';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}

const Card: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <section className={style.cardWrapper}>
      <p className={style.questionNumber}>
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map(answer => (
          <div>
            <button
              key={answer}
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
              className={style.answerButton}
              style={userAnswer?.answer === answer ?
                {
                  background: `linear-gradient(90deg, #56FFA4, #59BC86)`,
                }
                :
                { background: `linear-gradient(90deg, #FF5656, #C16868)` }}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Card;