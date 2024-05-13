import React, { useEffect, useRef, useState } from 'react'
import { Player } from '../models/Player'
import { callbackify } from 'util';
import { Colors } from '../models/Color';

interface TimerProps{
    currentPlayer: Player | null;
    restart: () => void
}


const Timer: React.FC<TimerProps> = ({currentPlayer,restart}) => {

    let[blackTime, setBlackTime] = useState(300)
    let[whiteTime, setWhiteTime] = useState(300)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)



    useEffect(() => 
        startTimer()
        ,[currentPlayer])


    function startTimer(){
        if(timer.current){
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
        timer.current = setInterval(callback, 1000)
    }

    function decrementBlackTimer(){
        setBlackTime(prev => prev-1)
    }
    function decrementWhiteTimer(){
        setWhiteTime(prev => prev-1)
    }


    const handleRestart = () => {
        setWhiteTime(300)
        setBlackTime(300)
        restart()
    }

  return (
    <div className='timer'>
        <div>
            <button onClick={handleRestart}>Restart game</button>
        </div>
        <h2>
            Black - {blackTime} <br />
            White - {whiteTime}
        </h2>
    </div>
  )
}

export default Timer