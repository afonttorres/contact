import React, { useState } from 'react';

const ColorChanger = () => {

    const colorLimitMax = 255;

    const defaultStyle = {
        height: '255px',
        width: '255px',
        postion: 'absolute',
        margin: 'auto',
        backgroundColor: 'black'
    }

    const [style, setStyle] = useState(defaultStyle);
    const [timer, setTimer] = useState();

    const startInterval = () =>{
        setTimer(setInterval(setRandomValue, 1000));
    }

    const setRandomValue = () => {
        let nums = new Array(3).fill(null).map( num => (Math.floor(Math.random() * colorLimitMax)));
        let color = `rgb(${nums[0]}, ${nums[1]}, ${nums[2]})`;
        setStyle({ ...style, backgroundColor: color })
    }

    const stopColorChange = () => {
        clearInterval(timer);
        setStyle(defaultStyle)
    }

    const pauseColorChange = () => {
        clearInterval(timer);
        setStyle(style);
    }

    return (
        <div className='col' style={{ height: 'fit-content', width: 'fit-content', padding: 'calc((100% - 255px) / 2)' }}>
            <article
                id='element'
                style={style}
                onMouseOver={startInterval}
                onMouseOut={stopColorChange}
                onDoubleClick={pauseColorChange}
            >
            </article>
        </div>
    );
}

export default ColorChanger;
