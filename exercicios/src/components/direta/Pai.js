import React from 'react';
import Filho from "./Filho"

const Pai = (props) => {
    return (
        <>
            <Filho a={13} b={100}></Filho>
        </>
    );
}

export default Pai;