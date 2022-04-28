import React, { useState, useEffect } from 'react';

const Slider = ({ id, value, min = 0, max = 1, step = 1 }) => {
    const [toggle, setToggle] = useState(false);
    const [val, setVal] = useState(min);
    min = Number(min) ? Number(min) : 0
    max = Number(max) ? Number(max) : 1

    function popup(e) { setToggle(!toggle) }

    useEffect(() => { // useEffect for better update
        var num = Number(val) ? Number(val) : min

        // Enforce min, max limit for user input box
        var limit = (num > max) ? max : num
        limit = (limit < min) ? min : limit
        setVal(limit)

        // Use for Scope
        value(limit) // Return value to parent, must have "value" as param for callback
    }, [val])

    return (
        <div key={id}
            onMouseEnter={popup}
            onMouseLeave={popup}
            style={{ display:'inline',cursor:'pointer'}}
        >
            <input type="range"
                onChange={e => setVal(e.target.value)}
                min={min} max={max} value={val} step={step} />
        </div>
    )
}


export default Slider
