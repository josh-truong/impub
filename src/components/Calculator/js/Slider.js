import React, { useState, useEffect } from 'react'

const Slider = ({id, value, min=0, max=1, step=1}) => {
    const [toggle, setToggle] = useState(true);
    const [val, setVal] = useState(min);
    min = Number(min) ? Number(min) : 0
    max = Number(max) ? Number(max) : 1

    function toggleInputBox(e) {
        setToggle(!toggle)
    }

    useEffect(() => { // useEffect for better update
        var num = Number(val) ? Number(val) : min

        // Enforce min, max limit for user input box
        var limit = (num > max) ? max : num
        limit = (limit < min) ? min : limit
        setVal(limit)

        var obj = {}
        obj[id] = val
        value(obj) // Return value to parent, must have "value" as param for callback
    }, [val])

    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        {id} = {
                            toggle ? 
                            <span style={{cursor:'pointer', color:'#39FF14'}} onChange={e => setVal(e.target.value)} onClick={toggleInputBox} onDoubleClick={toggleInputBox}>
                                {val}
                            </span> :
                            <input onChange={e => setVal(e.target.value)} onDoubleClick={toggleInputBox}/>
                        }
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="range" min={min} max={max} value={val} onChange={e => setVal(e.target.value)} step={step} />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}


export default Slider
