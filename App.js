import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

export default function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const incrementScore = (team) => {
    if (team === "A") {
      if (scoreA + 1 === 10) {
        Alert.alert("Pemenang!", "Tim A menang!");
      }
      setScoreA(scoreA + 1);
    } else if (team === "B") {
      if (scoreB + 1 === 10) {
        Alert.alert("Pemenang!", "Tim B menang!");
      }
      setScoreB(scoreB + 1);
    }
  };

  const decrementScore = (team) => {
    if (team === "A" && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === "B" && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      {/* Informasi Tim */}
      <Text style={styles.header}>Skor Pertandingan Futsal</Text>
      <View style={styles.teamContainer}>
        <View style={styles.team}>
          <Text style={styles.teamName}>Tim A</Text>
          <Text style={styles.score}>{scoreA}</Text>
          <View style={styles.buttons}>
            <Button title="+" onPress={() => incrementScore("A")} />
            <Button title="-" onPress={() => decrementScore("A")} />
          </View>
        </View>
        <View style={styles.team}>
          <Text style={styles.teamName}>Tim B</Text>
          <Text style={styles.score}>{scoreB}</Text>
          <View style={styles.buttons}>
            <Button title="+" onPress={() => incrementScore("B")} />
            <Button title="-" onPress={() => decrementScore("B")} />
          </View>
        </View>
      </View>

      {/* Tombol Reset */}
      <Button title="Reset Pertandingan" onPress={resetScores} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  teamContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  team: {
    alignItems: "center",
    marginHorizontal: 20,
  },
  teamName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  score: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
  },
});