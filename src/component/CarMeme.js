import { useState } from "react";
import mainData from "../main-data";

export default function CarMeme() {
    const [memeImg, setMemeImg] = useState(mainData[0].img);

    function changeImg() {
        setMemeImg((prememeImg) => {
            const randomNumber = Math.floor(Math.random() * mainData.length);

            return mainData[randomNumber].img;
        });
    }

    const [memeTextData, setMemeTextData] = useState({
        topInput: "",
        bottomInput: "",
    });

    function handleChange(event) {
        setMemeTextData((preMemeTextData) => {
            return {
                ...preMemeTextData,
                [event.target.name]: event.target.value,
            };
        });
    }

    return (
        <div className="carmeme">
            <input
                name="topInput"
                className="carmeme-text"
                type="text"
                placeholder="Top Text"
                onChange={handleChange}
                value={memeTextData.topInput}
            />
            <input
                name="bottomInput"
                className="carmeme-text"
                type="text"
                placeholder="Bottom Text"
                onChange={handleChange}
                value={memeTextData.bottomInput}
            />
            <input
                className="carmeme-button"
                type="button"
                value="Get a new meme image!"
                onClick={changeImg}
            />
            <img className="carmeme-img" src={memeImg}></img>
            <div className="carmeme-toptext">
                {memeTextData.topInput ? memeTextData.topInput : "Top Text"}
            </div>
            <div className="carmeme-bottomtext">
                {memeTextData.bottomInput
                    ? memeTextData.bottomInput
                    : "Bottom Text"}
            </div>
        </div>
    );
}
