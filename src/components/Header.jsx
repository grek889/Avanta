import React from "react";
import blur from "../assets/Blur.png";

export const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${blur})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="header">
        <div>
          <h1 className="header__title">Аванта</h1>
        </div>
        <div>
          <h6 className="header__text">
            «Аванта» оказывает полный комплекс услуг по сервисному обслуживанию
            и ремонту оборудования промышленного назначения. Мы имеем опыт
            монтажа, запуска, обслуживания и ремонта большого спектра
            промышленного оборудования различных производителей, таких как
            Hegenscheidt, Goth, AHA-krane и многих других.
          </h6>
        </div>
      </div>
    </header>
  );
};
