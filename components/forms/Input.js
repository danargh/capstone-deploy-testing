import React from 'react';

export default function Input(props) {
    return (
        <>
            <input className={props.className} type={props.type} placeholder={props.placeholder} ></input>
        </>
    );
}
