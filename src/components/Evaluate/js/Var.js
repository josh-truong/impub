import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Custom Components
import Slider from './Slider';
import { Tex } from '../../Tex';

// Redux Store
import { useDispatch } from 'react-redux';
import { UPDATE_VARIABLE } from '../../../constants';

import styles from './style.module.css';
var classNames = require('classnames');


/**
 * The Var component can change the value of a variable given a scope and variable name.
 * Uses react redux to store global changes. Refer to src/reducers.
 * 
 * @component
 * 
 * @param {Object} props - Component props
 * 
 * @property {Object} props.id - Id identifies both scope and variable name
 * @property {Bool} props.mode - (optional) Visible/invisible slider, default=false
 * @property {Int} props.min - (optional) min range
 * @property {Int} props.max - (optional) max range
 * @property {Int} props.step - (optional) step range
 * 
 * @requires Scope
 * 
 * @returns {React_Elements} Returns React Element
 * 
 * @example
 * <Var id={{'scope_name':'variable_name'}} mode={false} min={0} max={1} step={1}/>
*/
const Var = (props) => {
    const scope_name = Object.keys(props.id)[0];
    const var_name = props.id[scope_name];
    const mode = props.mode;
    const min = props.min;
    const max = props.max;
    const step = props.step;

    const dispatch = useDispatch();
    const [globalVal, setGlobalVal] = useState(props.val ? props.val : 0); // Set to redux store to avoid unnecessary amount of rendering slow downs
    const [localVal, setLocalVal] = useState(props.val ? props.val : 0); // Change the values of Var

    const [onClick, setOnClick] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const tooltip = classNames(styles.tooltip);
    const tooltiptext = classNames(styles.tooltiptext);
    const dragging = classNames(styles.dragging);

    useEffect(() => {
        dispatch({ type: UPDATE_VARIABLE, scope: scope_name, var: var_name, val: globalVal })
    }, [globalVal])



    function handleOnClick(e) {
        if (e.nativeEvent.which === 1 && e.type === 'mousedown') {
            setOnClick(true);
            setOffset({
                x: e.screenX,
                y: e.screenY
            })
        }
        else if (e.nativeEvent.which === 1 && e.type === 'mouseup') {
            // Update global variable value using local
            setOnClick(false)
            setGlobalVal(localVal)
        }
        else if (e.nativeEvent.which === 1 && e.type === 'mousemove' && onClick) {
            setPosition({
                x: e.screenX - offset.x,
                y: e.screenY - offset.y
            })
            let num = (position.x + position.y) * step
            setLocalVal(
                (props.min !== 0 || props.max !== 1 || props.step !== 1) ?
                    (((num > max) ? max : num) < min) ? min : ((num > max) ? max : num) : // min-max boundary of value if set
                    num
            )
        }
        else if (e.nativeEvent.which === 3 && e.type === 'contextmenu') {
            e.preventDefault()
            setGlobalVal(props.val)
            setLocalVal(props.val)
        }
    }

    return (
        <>
            {onClick ?
                <div className={dragging}
                    onMouseUp={(e) => handleOnClick(e)}
                    onMouseMove={(e) => handleOnClick(e)}
                /> : ''}
            <div style={{ color: '#39FF14', display: 'inline-block' }} onContextMenu={(e) => handleOnClick(e)}>
                {mode ?
                    <div className={tooltip} >
                        <Tex expr={`$${var_name}$`} />({localVal})
                        <span className={tooltiptext}>
                            <Slider key={`${scope_name}+${var_name}`} id={var_name} value={(e) => setLocalVal(e)} min={props.min} max={props.max} step={props.step} />
                        </span>
                    </div> :
                    <div onMouseDown={(e) => handleOnClick(e)} style={{ cursor: 'e-resize', borderBottom: '1px dotted black' }}>
                        <span>
                            <Tex expr={`$${var_name}$`} />({localVal})
                        </span>
                    </div>
                }
            </div>
        </>
    )
}

Var.propTypes = {
    id: PropTypes.object.isRequired,
    mode: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
}

Var.defaultProps = {
    mode: false,
    min: 0,
    max: 1,
    step: 1,
}


export default Var
