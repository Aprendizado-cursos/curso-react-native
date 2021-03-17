import React from 'react';
import { View, StyleSheet } from "react-native";
import Primeiro from "./components/Primeiro";
import { Comp1, Comp2, Comp3 } from "./components/Mult";
import MinMax from "./components/MinMax"
import Aleatorio from "./components/Aleatorio";
import Titulo from "./components/Titulo";
import Botao from "./components/Botao";
import Contador from "./components/Contador"
import Pai from "./components/direta/Pai";

const App = () => {
    return (
        <View style={style.App}>
            {/* <Comp1 />
            <Comp2 />
            <Comp3 />
            <Primeiro /> */}
            {/* <MinMax max={20} min={3} /> */}
            {/* <Aleatorio max={20} min={3} /> */}
            {/* <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto"></Titulo> */}
            {/* <Botao></Botao> */}
            {/* <Contador inicial={100}></Contador> */}
            <Pai></Pai>
        </View>
    );
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 30
    }
})

export default App;