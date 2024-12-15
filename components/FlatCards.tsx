import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>Redi</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.text}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>Blue</Text>
        </View>
        <View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: '#FFFFFF'
    },
    text:{
        color: '#FFFFFF'
    },
    container:{
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 8
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    cardOne:{
        backgroundColor: '#EF5354'
    },
    cardTwo:{
        backgroundColor: '#50DBB4'
    },
    cardThree:{
        backgroundColor: '#5DA3FA'
    }
})