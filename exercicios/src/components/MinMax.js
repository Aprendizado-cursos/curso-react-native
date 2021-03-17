import React from "react";
import { Text } from "react-native";
import Estilo from "./estilo";

const MinMax = (props) => {
    return (
        <Text style={Estilo.textG}>
            O valor {props.min} é maior que o valor {props.max}
        </Text>
    );
}

export default MinMax