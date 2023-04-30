import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Scoreboard} from "./Components/Scoreboard/Scoreboard";
import {Button} from "./Components/Button/Button";
import {Setboard} from "./Components/Setboard/Setboard";

function App() {

    // значения диапазона счетчика
    const [maxCount, setMaxCount] = useState<number>(5)
    const [minCount, setMinCount] = useState<number>(0)
    // текущее значение счетчика
    const [count, setCount] = useState<number | string>(0)
    // новое (следующее) значение счетчика
    const [newMinCount, setNewMinCount] = useState<number>(minCount)
    const [newMaxCount, setNewMaxCount] = useState<number>(maxCount)
    // статус кнопок inc reset
    const [setButtonStatus, setSetButtonStatus] = useState<boolean>(false)
    // статус кнопки set
    const [disableButtons, setDisableButtons] = useState<boolean>(false)

    // логика блокировки кнопок inc reset
    const resetDisabled = (count === minCount) || disableButtons
    const incDisabled = (count === maxCount) || disableButtons

    // функция увеличения счетчика на 1
    const increment = () => {
        if (typeof count === 'number') {
            setCount(count + 1)
        }
    }

    // функция сброса счетчика
    const reset = () => {
        setCount(minCount)
    }

    // логика изменения нового минимального (следующего) значения счетчика
    const minCountChanger = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +(e.currentTarget.value)
        setNewMinCount(value);
        if (newMaxCount === value || value < 0 || value > newMaxCount) {
            setSetButtonStatus(true);
            setCount('error')
        } else {
            setSetButtonStatus(false);
            setCount('press "set"')
        }
        setDisableButtons(true);
    };

    // логика изменения нового минимального (следующего) значения счетчика
    const maxCountChanger = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +(e.currentTarget.value)
        setNewMaxCount(value)
        if (newMinCount === value || value < 0 || value < newMinCount) {
            setSetButtonStatus(true)
            setCount('error')
        } else {
            setSetButtonStatus(false)
            setCount('press "set"')
        }
        setDisableButtons(true)
    }

    // логика кнопки set
    const newSetCountApply = () => {
        setMinCount(newMinCount)
        setMaxCount(newMaxCount)
        setCount(newMinCount)
        setSetButtonStatus(true)
        setDisableButtons(false)
    }

    return (
        <div className="App">
            <div className='counter-wrapper'>
                <div className='counter-item'>
                    <div className='set-wrapper'>
                        <Setboard title={'max count'}
                                  value={newMaxCount}
                                  onChange={maxCountChanger}
                        />
                        <Setboard title={'min count'}
                                  value={newMinCount}
                                  onChange={minCountChanger}
                        />
                    </div>
                    <div className='buttons-wrapper'>
                        <Button title={'set'}
                                disabled={setButtonStatus}
                                onClick={newSetCountApply}
                        />
                    </div>
                </div>
                <div className='counter-item'>
                    <div className='scoreboard-wrapper'>
                        <Scoreboard count={count}
                                    maxCount={maxCount}
                        />
                    </div>
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
    );
}

export default App;
