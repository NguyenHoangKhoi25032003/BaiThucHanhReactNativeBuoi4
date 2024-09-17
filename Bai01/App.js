import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'


export default function App() {
  const [diceRolls, setDiceRolls] = useState([0])
  const [counter , setCounter] = useState(1);
  return (
    <View>
      <Button
        title="Roll dice!"
        onPress={() => {
          setCounter(counter+1)
          setDiceRolls([...diceRolls,counter])
        }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  )
}
