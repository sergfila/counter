import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from "./Components/Scoreboard/Scoreboard";
import {Button} from "./Components/Button/Button";
import {Setboard} from "./Components/Setboard/Setboard";

function App() {

    const maxCount = 5
    let minCount = 0

    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(0)
    }

    const set = () => {
        minCount = 1
    }

    const resetDisabled = (count === minCount)
    const incDisabled = (count === maxCount)

    return (
        <div className="App">
            <div className='counter-wrapper'>
                <div>
                    <div>
                        <div className='set-wrapper'>
                            <Setboard title={'max count'} />
                            <Setboard title={'min count'}/>
                        </div>
                    </div>
                    <div>
                        <div className='buttons-wrapper'>
                            <Button title={'set'}
                                    disabled={resetDisabled}
                                    onClick={reset}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <Scoreboard count={count}
                                    maxCount={maxCount}
                        />
                    </div>
                    <div>
                        <div className='buttons-wrapper'>
                            <Button title={'inc'}
                                    disabled={incDisabled}
                                    onClick={increment}
                            />
                            <Button title={'reset'}
                                    disabled={resetDisabled}
                                    onClick={reset}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
