import React from 'react'
import { Button } from 'react-native'

const Botao = (props) => {
    function executar() {
        console.warn("Executando 1");
    }

    return (
        <>
            <Button title="Executar 1!" onPress={executar} />
            <Button title="Executar 2!" onPress={function () { console.warn('Executando 02'); }} />
            <Button title="Executar 3!" onPress={_ => console.warn('Executando 03')} />
        </>
    )
}

export default Botao