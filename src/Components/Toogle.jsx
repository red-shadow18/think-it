import React from "react";
import styled from '@emotion/styled'

const Toggle=({trueStateIcon, falseStateIcon, onClick, currentState, trueStateToolTip,falseStateToolTip})=>{

return(
    <ToggleButton onClick={onClick}>
        <span>
        {currentState?trueStateIcon:falseStateIcon}
        </span>
        <p>
            {currentState?trueStateToolTip:falseStateToolTip}
        </p>
        
    </ToggleButton>
)

}

export default Toggle

const ToggleButton=styled.button`
    background: transparent;
    border: none;
    position: relative;
    cursor: pointer;

    span {
        
    }

    p {
        display: none;
    }

    &&:hover > p {
        display: block !important;
        position: absolute;
        top:10px;
    }

`