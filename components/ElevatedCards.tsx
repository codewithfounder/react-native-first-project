import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.fonts}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.fonts}>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.fonts}>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.fonts}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.fonts}>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.fonts}>😂😂</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: '#FFFFFF'
    },
    container:{
        padding: 8,

    },
    card:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    cardElevated:{
        backgroundColor: '#EF5354',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    fonts:{
        color: '#ffffff'
    }
})