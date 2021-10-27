import * as React from 'react';

import { TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import { Text, View } from '../../components/Themed';


export default function LoginScreen() {

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#051937', '#004d7a', '#008793', '#00bf72', '#a8eb12']} style={styles.header}>
                <View style={styles.logo}>
                    <View style={styles.image}></View>
                </View>

                <Text style={[styles.text, styles.title]}>Login</Text>

            </LinearGradient>
            <View style={styles.main}>
                <View style={styles.form}>
                    <Ionicons style={styles.iconEmail} size={25} name="mail" />
                    <TextInput
                        keyboardType={'email-address'}
                        style={styles.input}
                        placeholder="Email"
                    />

                    <Ionicons style={styles.iconPassword} size={25} name="key" />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                    />
                    <TouchableOpacity>
                        <LinearGradient colors={['#051937', '#004d7a', '#008793', '#00bf72', '#a8eb12']} style={styles.button}>
                            <Text style={styles.text}>LOGIN</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomLeftRadius: 100,
    },
    logo: {
        marginTop: '25%',
        borderRadius: 30
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 30,
    },
    title: {
        marginBottom: 50,
        marginTop: '10%',
        marginLeft: '50%'
    },
    main: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,

    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        paddingTop: 30,
        paddingBottom: 30,
        borderColor: '#a9a9a9',
        borderRadius: 30,
        elevation: 10,
    },
    input: {
        width: '80%',
        height: 40,
        paddingLeft: 55,
        marginBottom: 30,
        borderRadius: 30,
        borderColor: '#a9a9a9',
        borderWidth: 1,
    },
    iconEmail: {
        position: 'absolute',
        top: 35,
        left: 50,
        color: '#a9a9a9'
    },
    iconPassword: {
        position: 'absolute',
        top: 105,
        left: 50,
        color: '#a9a9a9'
    },
    button: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 250,
        height: 40,
        marginTop: 30,
        fontSize: 20,
        borderRadius: 30,
    },
    text: {
        fontSize: 20,
        color: '#f8f8ff',
        fontWeight: 'bold',
    },
});
