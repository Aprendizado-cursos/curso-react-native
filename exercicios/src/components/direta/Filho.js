import React from 'react';
import { Text } from "react-native";
import style from "../estilo"

const Filho = (props) => {
    return (
        <>
            <Text style={style.textG}>{props.a}</Text>
            <Text style={style.textG}>{props.b}</Text>
        </>
    );
}

export default Filho;