import React from "react";
export default function Questions(props) {
    const entities = { "&#039;": "'", "&quot;": '"' };

    const [fourAnswers, setFourAnswers] = React.useState(() =>
        getRandomAnswers()
    );

    function getRandomAnswers() {
        let fouranswers = [
            { answer: "", isSelected: false, isCorrect: false },
            { answer: "", isSelected: false, isCorrect: false },
            { answer: "", isSelected: false, isCorrect: false },
            { answer: "", isSelected: false, isCorrect: true },
        ];
        fouranswers[0].answer = props.questionData.incorrect_answers[0];
        fouranswers[1].answer = props.questionData.incorrect_answers[1];
        fouranswers[2].answer = props.questionData.incorrect_answers[2];
        fouranswers[3].answer = props.questionData.correct_answer;
        fouranswers.sort(() => 0.5 - Math.random());
        fouranswers[0].id = 0;
        fouranswers[1].id = 1;
        fouranswers[2].id = 2;
        fouranswers[3].id = 3;
        return fouranswers;
    }

    function select(id) {
        setFourAnswers((pre) =>
            pre.map((item) => {
                return item.id === id
                    ? { ...item, isSelected: !item.isSelected }
                    : { ...item, isSelected: false };
            })
        );
    }

    const correct = {
        backgroundColor: "rgba(148, 215, 162, 1)",
        borderColor: "rgba(148, 215, 162, 1)",
        pointerEvents: "none",
    };

    const inCorrect = {
        backgroundColor: "rgba(248, 188, 188, 1)",
        borderColor: "rgba(248, 188, 188, 1)",
        opacity: "0.5",
        pointerEvents: "none",
    };

    const other = {
        opacity: "0.5",
        pointerEvents: "none",
    };

    const answersElement = fourAnswers.map((item, index) => {
        function checking() {
            let style;
            if (item.isCorrect === true) {
                style = correct;
            } else if (item.isSelected === true && item.isCorrect === false) {
                style = inCorrect;
            } else {
                style = other;
            }
            return style;
        }

        return (
            <div
                key={index}
                className={item.isSelected ? "answer-selected" : "answer"}
                id={index}
                onClick={() => select(index)}
                style={props.isChecked ? checking() : null}
            >
                {item.answer.replace(/&#?\w+;/gi, (match) => entities[match])}
            </div>
        );
    });

    React.useEffect(() => {
        let num = 0;
        for (let i = 0; i < 4; i++) {
            if (
                fourAnswers[i].isSelected === true &&
                fourAnswers[i].isCorrect
            ) {
                num = num + 1;
            } else {
                num = num;
            }
        }
        return props.score(num);
    }, [props.checked]);

    return (
        <div className="questionBox">
            <h2 className="question">{props.question}</h2>
            <div className="answers">{answersElement}</div>
            <hr className="hr"></hr>
        </div>
    );
}
// const entities = {'&#039;': "'", '&quot;': '"'}
// .replace(/&#?\w+;/gi, match => entities[match])
