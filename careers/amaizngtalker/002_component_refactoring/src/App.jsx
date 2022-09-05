import React, { useState } from "react";
import { Button, Card, Checkbox } from "./components";
import style from "./App.module.css";

const LANGUAGE_STEP = 1;
const AGE_STEP = 2;
const FINAL_STEP = 3;

function App() {
  const [step, setStep] = useState(1);
  const [learningLanguage, setLearningLanguage] = useState({
    chinese: false,
    english: false,
    korean: false,
    spanish: false,
    japanese: false,
  });
  const [learningAge, setLearningAge] = useState({
    young: false,
    middle: false,
    old: false,
  });

  const handlePrev = () => setStep(step - 1);
  const handleNext = () => setStep(step + 1);
  const handleLanguageChange = (e) => {
    const target = e.target;
    const checked = target.checked;
    const name = target.name;
    setLearningLanguage({
      ...learningLanguage,
      [name]: checked,
    });
  };
  const handleAgeChange = (e) => {
    const target = e.target;
    const checked = target.checked;
    const name = target.name;
    setLearningAge({
      ...learningAge,
      [name]: checked,
    });
  };

  return (
    <div className={style.container}>
      {step === LANGUAGE_STEP && (
        <Card>
          <h3>What language do you want to learn ?</h3>
          <div>
            <Checkbox
              label="English"
              id="english"
              onChange={handleLanguageChange}
              checked={learningLanguage.english}
            />
            <Checkbox
              label="Chinese"
              id="chinese"
              onChange={handleLanguageChange}
              checked={learningLanguage.chinese}
            />
            <Checkbox
              label="Korean"
              id="korean"
              onChange={handleLanguageChange}
              checked={learningLanguage.korean}
            />
            <Checkbox
              label="Spanish"
              id="spanish"
              onChange={handleLanguageChange}
              checked={learningLanguage.spanish}
            />
            <Checkbox
              label="Japanese"
              id="japanese"
              onChange={handleLanguageChange}
              checked={learningLanguage.japanese}
            />
          </div>
          <div className={style.btnWrapper}>
            <Button onClick={handlePrev}>Prev</Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        </Card>
      )}

      {step === AGE_STEP && (
        <Card>
          <h3>How old are you ?</h3>
          <div>
            <Checkbox
              label="Below 10"
              id="young"
              onChange={handleAgeChange}
              checked={learningAge.young}
            />
            <Checkbox
              label="11 - 30"
              id="middle"
              onChange={handleAgeChange}
              checked={learningAge.middle}
            />
            <Checkbox
              label="Above 31"
              id="old"
              onChange={handleAgeChange}
              checked={learningAge.old}
            />
          </div>
          <div className={style.btnWrapper}>
            <Button onClick={handlePrev}>Prev</Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        </Card>
      )}

      {step === FINAL_STEP && (
        <Card>
          <h4>Ages</h4>
          <div>
            {Object.keys(learningAge)
              .filter((key) => learningAge[key])
              .join(", ")}
          </div>
          <hr />
          <h4>Languages</h4>
          <div>
            {Object.keys(learningLanguage)
              .filter((key) => learningLanguage[key])
              .join(", ")}
          </div>
          <div className={style.btnWrapper}>
            <Button onClick={handlePrev}>Prev</Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        </Card>
      )}
    </div>
  );
}

export default App;
