import React from "react";

export default function Flip(props) {
    // const [face, setFace] = React.useState(props.item.face)

    // function flip() {
    //     setFace(preFace => !preFace)
    // }

    const styles = {
        backgroundColor: props.face ? "rgb(70, 64, 134)" : "rgb(60, 130, 114)",
        borderColor: props.face ? "rgb(220, 217, 255)" : "rgb(173, 215, 205)",
        transform: props.face ? "rotateY(0deg)" : "rotateY(180deg)",
        boxShadow: props.face
            ? "5px 5px 10px rgb(50, 49, 78)"
            : "-5px 5px 10px rgb(50, 49, 78)",
    };
    // box-shadow: 5px 5px 10px rgb(50, 49, 78);
    return (
        <div className="flip" style={styles} onClick={props.handleClick}></div>
    );
}
