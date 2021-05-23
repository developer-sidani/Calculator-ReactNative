import React, { useState } from "react";
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
import image from './assets/myimage.jpg'

const App = () => {
  const [firstNumber, setFirstNumber] = useState()
  const [secondNumber, setSecondNumber] = useState()
  const [result, setResult] = useState()
  const reset = () => {
    setFirstNumber()
    setSecondNumber()
    setResult()
  }
  return (
    <View style={styles.container} >
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.screen}>
          <Text style={styles.title}>Calculator</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="First Number"
              style={styles.input}
              keyboardType="decimal-pad"
              defaultValue={firstNumber}
              onChangeText={e => setFirstNumber(e)}
            />
            <TextInput
              placeholder="Second Number"
              style={styles.input}
              keyboardType="decimal-pad"
              defaultValue={secondNumber}
              onChangeText={e => setSecondNumber(e)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                color="red"
                title="+"
                onPress={() => {
                  if (firstNumber && secondNumber) {
                    setResult(`${firstNumber} + ${secondNumber} = ` + (parseInt(firstNumber) + parseInt(secondNumber)))
                  }
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="-"
                onPress={() => {
                  if (firstNumber && secondNumber) {
                    setResult(`${firstNumber} - ${secondNumber} = ` + (parseInt(firstNumber) - parseInt(secondNumber)))
                  }
                }}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                color="green"
                title="x"
                onPress={() => {
                  if (firstNumber && secondNumber) {
                    setResult(`${firstNumber} x ${secondNumber} = ` + (parseInt(firstNumber) * parseInt(secondNumber)))
                  }
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                color="turquoise"
                title="/"
                onPress={() => {
                  if (firstNumber && secondNumber) {
                    setResult(`${firstNumber} / ${secondNumber} = ` + (parseInt(firstNumber) / parseInt(secondNumber)))
                  }
                }}
              />
            </View>
          </View>
          <Text style={styles.result}>Result: </Text>
          <Text style={styles.result}>{result}</Text>
          <Button
            title="reset"
            onPress={reset}
          />
        </View>

      </ImageBackground>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover"
  },
  screen: {
    padding: 20,
    backgroundColor: '#000000a0',
    height: '100%'
  },
  title: {
    color: "white",
    fontSize: 42,
    textAlign: 'center',
    marginTop: 18
  },
  inputContainer: {
    marginVertical: 10,
    justifyContent: 'center'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 12
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: '17%',
    marginVertical: 10
  },
  button: {
    width: '40%',
  },
  result: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 10
  }
});

export default App