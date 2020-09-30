import React from 'react';

function NameItem(props) {

    return (
        
        <>
            <h2>{props.country}</h2>
            <p>{props.names}</p>
        </>
    )
}

export default NameItem;