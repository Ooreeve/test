import React from "react";
import { nanoid } from "nanoid";
import Questions from "./Questions";
import quizData from "../quiz-data";

export default function Quiz() {
    const [isStarted, setIsStarted] = React.useState(false);
    function start() {
        setIsStarted((pre) => !pre);
    }

    const [fiveQuestions, setFiveQuestions] = React.useState(() =>
        getNewFiveQuestions()
    );

    // const [fiveQuestions, setFiveQuestions] = React.useState([])

    // React.useEffect(function() {
    //     fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
    //         .then(res => res.json())
    //         .then(data => setFiveQuestions(data.results))
    //     }, [])

    // console.log(fiveQuestions)

    function getMultipleRandom() {
        const shuffled = quizData.sort(() => 0.5 - Math.random());

        return shuffled.slice(0, 5);
    }

    function getNewFiveQuestions() {
        const quizDataJS = JSON.parse(quizData);
        const shuffled = [...quizDataJS].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 5);
    }

    const [isChecked, setIsChecked] = React.useState(false);

    function check() {
        setIsChecked((pre) => !pre);
    }

    const [score, setScore] = React.useState(0);

    function showScore(num) {
        return setScore((pre) => pre + num);
    }

    const questionsElement = fiveQuestions.map((item) => {
        const entities = { "&#039;": "'", "&quot;": '"' };
        return (
            <Questions
                key={item.question}
                question={item.question.replace(
                    /&#?\w+;/gi,
                    (match) => entities[match]
                )}
                questionData={item}
                isChecked={isChecked}
                score={showScore}
                checked={isChecked}
            />
        );
    });

    function playAgain() {
        check();
        start();
        setScore(0);
        setFiveQuestions(getNewFiveQuestions);
    }

    return (
        <div className="quizBox">
            {!isStarted ? (
                <div className="quizBox-start">
                    <div className="circle-1"></div>
                    <div className="circle-2"></div>
                    <h1 className="title">Quizzical</h1>
                    <p className="description">Some description if needed</p>
                    <button className="startBtn" onClick={start}>
                        Start quiz
                    </button>
                </div>
            ) : (
                <div className="quizBox-playing">
                    <div className="circle-1"></div>
                    <div className="circle-2"></div>
                    {questionsElement}
                    {!isChecked ? (
                        <button onClick={check} className="checkBtn">
                            Check answers
                        </button>
                    ) : (
                        <div className="again">
                            <p className="againText">
                                You scored {score}/5 correct answers
                            </p>
                            <button onClick={playAgain} className="againBtn">
                                Play again
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
