import { isValidElement, useState } from 'react';
import { useEffect } from 'react';
import './App.css';


function App() {

  function isDisplayable(character) {
    return /^[a-zA-Z0-9\s,.!?()]+$/.test(character);
  }

  const [text, setText] = useState('');

  const keypressed = (e) => {

    let letter = document.getElementById("slidingletter");

    if(e.key === "Backspace") {
      letter.innerHTML = '|'
      setText(text.substring(0,text.length-1))
    }

    if(e.key === "Enter") {
      letter.innerHTML = '|'
      setText((prevtext) => prevtext + '\n');
    }

    if(isDisplayable(e.key) && e.key.length === 1) {

      if(e.key !== ' ') letter.innerHTML = e.key;

      letter.style.transitionDuration = '0.0s';
      letter.style.left = '50px';

      setTimeout(() => {
        letter.style.transitionDuration = '0.1s';
        letter.style.left = '0px';
      }, 10);
      
      setText((prevtext) => prevtext + e.key);
    }
    console.log(e.key);
  }

  useEffect(() => {

    document.addEventListener('keydown', keypressed);

    return () => {
      document.removeEventListener('keydown', keypressed);
    };

  }, [text])

  return (
    <div className='main'>

      <h1>Writeee.</h1>

        <span id='para'>{text}</span>
        <span className='sliding' id='slidingletter'>Start Typing!</span>

    </div>
  );
}

export default App;
