import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Tranding Places</Text>
        <View style={[styles.card, styles.cardElevated]}>
        <Image 
        source={{uri: 'https://cdn.pixabay.com/photo/2024/07/01/07/11/cats-8864617_960_720.jpg'}}
        
        style={styles.cardImage}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Cat to be Gethar</Text>
            <Text style={styles.cardLabel}>Two Cates sit on the Table</Text>
            <Text style={styles.cardDescription}>The Cate is lookas show Quit which is sit on the table to be gather it looks prity Osam</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: '#FFFFFF'
    },
    card:{
        width: 360,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 'auto'
    },
    cardElevated:{
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage:{
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody:{
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle:{
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6
    },
    cardLabel:{
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription:{
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter:{
        color: '#000000'
    }
})