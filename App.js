import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

export default function App() {

  const [imgSide, setImgSide] = useState(styles.imgCentro);
  const [imgOpacidad, setImgOpacidad] = useState(styles.imagenInvisible);
  const [tiempo, setTiempo] = useState(10);

  // const [imgStyle, setImgStyle] = useState(styles.imgCentro);



  funcionTiempo = () => {

    // var temporizador = setInterval(() => {


    //   if (tiempo > 0) {
    //     console.log("Tiempo 1: " + tiempo);
    //     console.log("Tiempo 2: " + tiempo);
    //   }

    //   if (tiempo == 0) {
    //     console.log(tiempo);
    //     clearTimeout(temporizador)
    //   }

    // }, 1000);
    console.log(tiempo)
    setTiempo((current) => current + 1)



  }






  return (
    < View style={[styles.container, { flexDirection: "column" }]} >
      {/* Lienzo de logo */}
      <View style={[{ flex: 2, borderWidth: 2, borderColor: 'white', borderColor: "black" }, imgSide]} >
        <Image
          style={imgOpacidad}
          source={require("./src/img/LOGO1.png")}
        />

      </View>





      {/* Lienzo de botones */}
      <View style={{ flex: 1, backgroundColor: "darkorange" }}>

        {/* ARRIBA */}
        <View style={{ flex: 3, flexDirection: "row", alignItems: "center" }}>

          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 1 }}>
            <Button
              onPress={() => { setImgSide((current) => styles.imgArriba); }}
              title="^"
              color="black"
            />
          </View>
          <View style={{ flex: 1 }}></View>
        </View>


        {/* IZQUIERDA,CENTRO Y DERECHA */}
        <View style={{ flex: 3, flexDirection: "row", alignItems: "center" }}>


          <View style={{ flex: 4, paddingLeft: 10 }}>
            <Button
              onPress={
                () => {
                  setImgSide((current) => styles.imgIzquierda)
                  setImgOpacidad((current) => styles.imagenVisible)
                  // funcionTiempo()
                }
              }

              title="<"
              color="black"
            />
          </View>
          <View style={{ flex: 3, alignItems: "center" }}>

            <Pressable
              onPress={
                () => {
                  setImgSide((current) => styles.imgCentro)
                  setImgOpacidad((current) => styles.imagenVisible)
                }
              }
              style={{ height: 40, width: 40, backgroundColor: 'black' }}
            >

            </Pressable>
          </View>
          <View style={{ flex: 4, paddingRight: 10 }}>
            <Button
              onPress={
                () => {
                  setImgSide((current) => styles.imgDerecha)
                  setImgOpacidad((current) => styles.imagenVisible)
                }
              }
              title=">"
              color="black"
            />
          </View>
        </View>



        {/* ABAJO */}
        <View style={{ flex: 3, flexDirection: "row", alignItems: "center" }}>

          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 1 }}>
            <Button
              onPress={
                () => {
                  setImgSide((current) => styles.imgAbajo)
                  setImgOpacidad((current) => styles.imagenVisible)
                }
              }
              title="v"
              color="black"
            />
          </View>
          <View style={{ flex: 1 }}></View>
        </View>



      </View>
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40
  },

  imagenVisible: {
    resizeMode: 'center',
    width: 180,
    height: 100,
    opacity: 1
  },

  imagenInvisible: {
    resizeMode: 'center',
    width: 180,
    height: 100,
    opacity: 0
  },



  imgArriba: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  imgAbajo: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  imgIzquierda: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  imgDerecha: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  },

  imgCentro: {
    alignItems: 'center',
    justifyContent: 'center'
  }

});
