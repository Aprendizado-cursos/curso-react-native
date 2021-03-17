import React from 'react';
import { View, StyleSheet } from "react-native";
import Primeiro from "./components/Primeiro";
import { Comp1, Comp2, Comp3 } from "./components/Mult";
import MinMax from "./components/MinMax"
import Aleatorio from "./components/Aleatorio"

const App = () => {
    return (
        <View style={style.App}>
            {/* <Comp1 />
            <Comp2 />
            <Comp3 />
            <Primeiro /> */}
            {/* <MinMax max={20} min={3} /> */}
            <Aleatorio max={20} min={3} />
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