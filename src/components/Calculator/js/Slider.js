import React, { useState } from 'react'

const Slider = ({name='', min=0, max=1, step=1, value}) => {
    const [val, setVal] = useState({value: min});
    function handleChange(e) {
        // Convert min/max/num to numbers
        min = Number(min) ? Number(min) : 0
        max = Number(max) ? Number(max) : 1
        var num = Number(e.target.value) ? Number(e.target.value) : min

        var limit = (num > max) ? max : num
        limit = (limit < min) ? min : limit
        setVal({value: limit})

        var obj = {}
        obj[name] = val.value
        value(obj) // Return value to parent, must have "value" as param for callback
    }

    const [toggle, setToggle] = useState(true);
    function toggleInputBox(e) {
        setToggle(!toggle)
    }

    return (
        <>
            {name} = {
                toggle ? 
                <span style={{cursor:'pointer', color:'#39FF14'}} onChange={handleChange} onClick={toggleInputBox} onDoubleClick={toggleInputBox}>
                    {val.value}
                </span> :
                <input onChange={handleChange} onDoubleClick={toggleInputBox}/>
            }
            <br />
            <input type="range" min={min} max={max} value={val.value} onChange={handleChange} step={step} />
        </>
    )
}


export default Slider
