import React, { useState } from "react";
import "../styles/WishBlock.scss";

const WishBlock: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  return (
    <div className="wish-block">
      <p>
        Поздравляем тебя с еще одним <br /> годом уклонения от дурки как
        медучреждения!
      </p>
      <p>
        Желаем тебе всего хорошего! <br /> А плохого не желаем! Меньше синяков
        под глазами, чтоб Вольт больше не дристал ароматами манго, и Андрей{" "}
        <br /> не обижал. <span>Тебе его можно 💅🏻</span>
      </p>
      <p>Ну и самое главное: чтобы говно в унитазе всегда смывалось!</p>
      <img
        src="./assets/imgs/happy.svg"
        alt="Wish Image"
        className={`wish-img ${isSpinning ? "spinning" : ""}`}
        onClick={() => setIsSpinning(!isSpinning)}
      />
    </div>
  );
};

export default WishBlock;
