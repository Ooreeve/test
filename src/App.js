import Main from "./component/Main";
import Nav from "./component/Nav";
import mainData from "./main-data";
import CarMeme from "./component/CarMeme";
import Counter from "./component/Counter";
import flipData from "./flip-data";
import Flip from "./component/Flip";
import React, { useState } from "react";
import Form from "./component/Form";
import Quiz from "./component/Quiz";

export default function App() {
    const [flipArray, setflipArray] = React.useState(flipData);

    function toggle(para) {
        setflipArray((preFlipArray) => {
            return preFlipArray.map((item) => {
                return item.id === para ? { ...item, face: !item.face } : item;
            });

            // const newArray = []
            // for (let i = 0; i < preFlipArray.length; i++) {
            //     const currentObject = preFlipArray[i]
            //     if (currentObject.id === para) {
            //         const updateObject = {...currentObject, face: !currentObject.face}
            //         newArray.push(updateObject)
            //     } else {
            //         newArray.push(currentObject)
            //     }
            // }
            // return newArray
        });
    }

    console.log("ads");

    const flip = flipArray.map((item) => {
        return (
            <Flip
                key={item.id}
                handleClick={() => toggle(item.id)}
                face={item.face}
            />
        );
    });

    const main = mainData.map((item) => {
        return <Main key={item.id} item={item} />;
    });

    return (
        <div>
            <Nav />
            <Quiz />
            <Form />
            <CarMeme />
            <div className="flip-container">{flip}</div>
            <div className="main-container">{main}</div>
            <Counter />
        </div>
    );
}
