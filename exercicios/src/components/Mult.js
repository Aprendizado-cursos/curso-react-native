import React from 'react';
import { Text } from "react-native";
import style from "./estilo"

const Comp1 = props => {
    return <Text style={style.textG}>Comp #Oficial</Text>
}

const Comp2 = props => {
    return <Text style={style.textG}>Comp #1</Text>
}

const Comp3 = props => {
    return <Text style={style.textG}>Comp #2</Text>
}

export { Comp1, Comp2, Comp3 };