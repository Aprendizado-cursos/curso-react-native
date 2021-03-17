import React from "react";
import { Text } from "react-native"
import styles from "./estilo"

const Aleatorio = (props) => {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <Text style={styles.textG}>
            Número aleatório entre {props.min} e {props.max}: {getRandomInt(props.min, props.max)}
        </Text>
    );
}

export default Aleatorio;