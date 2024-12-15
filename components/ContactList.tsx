import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Virendra Prajapati',
            status: 'Just an software developre',
            imageUrl: 'https://avatars.githubusercontent.com/u/139681154?v=4',
        },
        {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I love To Code and Teach!',
            imageUrl: 'https://images.pexels.com/photos/14784288/pexels-photo-14784288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

        },
        {
            Uid: 3,
            name: 'Tausef Server',
            status: 'I lave Code and solve the Problem',
            imageUrl: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            Uid: 4,
            name: 'Shivam Mehata',
            status: 'I lave code and design website',
            imageUrl: 'https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl})=>(
            <View key={uid} style={styles.userCard}>
                <Image 
                source={{
                    uri: imageUrl
                }} style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container:{
        paddingHorizontal: 16,
        marginBottom: 4
    },
    userCard:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
    },
    userImage:{
        width: 60,
        height: 60,
        borderRadius: 60/2,
        marginRight: 14
    },
    userName:{
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600'
    },
    userStatus:{
        color: '#FFFFFF',
        fontSize: 12,
    },
})