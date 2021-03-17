import React from 'react'
import { Text, Button } from 'react-native'
import style from './estilo'

const Contador = (props) => {
    const [numero, setNumero] = React.useState(props.inicial);

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return (
        <>
            <Text style={style.textG}>{numero}</Text>
            <Button title="+" onPress={inc}></Button>
            <Button title="-" onPress={dec}></Button>
        </>
    )
}

export default Contador