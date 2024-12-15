import { StyleSheet, Text, View,Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.alevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in JavaScript 24 - ES12
            </Text>
        </View>
        <Image
        source={{uri: 'https://cdn.pixabay.com/photo/2017/08/29/12/07/adult-2693054_1280.jpg',}}
        style={styles.cardImage}/>
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3} style={styles.textcolor}>Just like every year, JavaScript brings in new features. This year javascript is bringing 4 new features, which are almost in production rollout. I won't be wasting much more time and directly jump to code with easy to understand examples.</Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={()=>openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                <Text style={[styles.socialLinks]}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>openWebsite('https://youtube.com/@justlikecoder?si=MwGdxXAmVJomIm_e')}
            >
                <Text style={[styles.socialLinks]}>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card:{
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    alevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer:{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
         color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190
    },
    bodyContainer:{
        padding: 10
    },
    footerContainer:{
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks:{
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
    },
    textcolor:{
        color: '#FFFFFF'
    }
})