import React from 'react'
import { Text } from "react-native";
import style from "./estilo"

const Titulo = (props) => {
    return (
        <>
            <Text style={style.textG}>
                {props.principal}
            </Text>
            <Text>
                {props.secundario}
            </Text>
        </>
    )
}

export default Titulo