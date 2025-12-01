import Classes from './CountDown.module.css'
import {useState, useEffect,memo} from "react";

function CountDown({timeLeft, timerBoxStyle = {},containerStyle={}}) {
    const [time, setTime] = useState(timeLeft);

    useEffect(() => {
        let timer;
        if (time > 0) {
            timer = setTimeout(() => {
                setTime(prevState => prevState - 1)
            }, 1000)
        }
        return () => clearTimeout(timer)
    }, [time])

    let days = Math.floor(time / (60 * 60 * 24));
    let hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((time % (60 * 60)) / 60);
    let seconds = Math.floor(time % 60);
    if (days < 10) {
        days = '0' + days
    }
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }


    return (
        <div dir='ltr' className={Classes.Container} style={containerStyle}>
            <div className={Classes.box}>
                <p className={Classes.timerAmount}
                   style={timerBoxStyle}>
                    {days}
                </p>
                <p className={Classes.timerTitle}>روز</p>
            </div>
            <div className={Classes.box}>
                <p className={Classes.timerAmount}
                   style={timerBoxStyle}>
                    {hours}
                </p>
                <p className={Classes.timerTitle}>ساعت</p>
            </div>
            <div className={Classes.box}>
                <p
                    className={Classes.timerAmount}
                    style={timerBoxStyle}>
                    {minutes}
                </p>
                <p className={Classes.timerTitle}>دقیقه</p>
            </div>
            <div className={Classes.box}>
                <p style={timerBoxStyle} className={Classes.timerAmount}>
                    {seconds}
                </p>
                <p className={Classes.timerTitle}>ثانیه</p>
            </div>
        </div>
    )
}

export default memo(CountDown);