import { useEffect, useState } from "react";
import "./styles.css";

const FRUIT_EMOJIS = ["🍌", "🍎", "🍊", "🥑", "🍑", "🫐"];

function Emoji(props) {
  // HERE
  const [fruit, setFruit] = useState(0);
  // for(let i = 0; i = FRUIT_EMOJIS.length; i++){
  //   setTimeout(setFruit(FRUIT_EMOJIS[i]),2000);
  // }

  // const handleSize = () => {
  //   document.getElementsByClassName("emoji").style.height = "30px";
  //   document.getElementsByClassName("emoji").style.width = "30px";
  // };

  useEffect(() => {
    setTimeout(() => {
      // setFruit((prev) => prev + 1);
      // if (fruit === 5) {
      //   setFruit(0);
      // }
    }, 2000);
  }, [fruit]);

  return (
    // <span className="emoji" style={{left: props.left, top: props.top}}>
    <span className="emoji" style={props.style}>
      {/* HERE */}
      {/*  */}
      {FRUIT_EMOJIS[fruit]}
    </span>
  );
}

export default function App() {
  // HERE
  // HERE
  // HERE

  // HINT: window.addEventListener('click', function(){})

  const [emojiPositions, setEmojiPositions] = useState([]);

  const addFruit = (event) => {
    // HINT
    // event.clientX
    // event.clientY

    let picX = event.clientX;
    let picY = event.clientY;
    console.log(picX, picY);

    setEmojiPositions([...emojiPositions, { picX, picY }]);
  };
  return (
    // HINT: <div className="App" onClick={}>
    <div className="App" onClick={(event) => addFruit(event)}>
      {/* HERE */}
      {/*  */}
      <Emoji />

      {/* HINT */}
      {emojiPositions.map((pos) => {
        return (
          <Emoji
            style={{ position: "absolute", top: pos.picY, left: pos.picX }}
          />
        );
      })}
    </div>
  );
}

/**
 * Tasks Description
 * 1. click on window and create new emoji
 * 2. every 2 seconds change the emoji
 * 3. on hover, 10x the size
 */
