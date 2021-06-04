import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [result, setResult] = useState("")

    const Click = (e) => {
        setResult(result.concat(e.target.name));
    }

    const Clear = () => {
        setResult("")
    }

    const Backspace = () => {
        setResult(result.slice(0, -1)); //(result.slice(0,result.length -1))
    }

    const Calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (err) {
            setResult("")
        }
    }
    return (
        <>
            <div className="container">
                <form>
                    <input type="text" value={result} />
                </form>

                <div className="keypad">
                    <button className="highlight" onClick={Clear} id="clear">Clear</button>
                    <button className="highlight" onClick={Backspace} id="backspace">C</button>
                    <button className="highlight" name="/" onClick={Click}>&divide;</button>
                    <button name="7" onClick={Click}>7</button>
                    <button name="8" onClick={Click}>8</button>
                    <button name="9" onClick={Click}>9</button>
                    <button className="highlight" name="*" onClick={Click}>&times;</button>
                    <button name="4" onClick={Click}>4</button>
                    <button name="5" onClick={Click}>5</button>
                    <button name="6" onClick={Click}>6</button>
                    <button className="highlight" name="-" onClick={Click}>&ndash;</button>
                    <button name="1" onClick={Click}>1</button>
                    <button name="2" onClick={Click}>2</button>
                    <button name="3" onClick={Click}>3</button>
                    <button className="highlight" name="+" onClick={Click}>+</button>
                    <button name="0" onClick={Click}>0</button>
                    <button name="." onClick={Click}>.</button>
                    <button className="highlight" onClick={Calculate} id="result">=</button>
                </div>
            </div>
        </>
    )
}

export default App
