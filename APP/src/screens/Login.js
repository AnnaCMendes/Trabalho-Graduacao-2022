import React from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import {  Input, Button} from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';


export default function Login({navigation}){
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')
    
    return(
        
        <View style={estilos.container}>
            <Image source={require('../assets/energiasolar.png')} />


            <Text style={estilos.txt1}>3F ENERGIA SOLAR!</Text>
            
            <SafeAreaView style={estilos.act}>
            <Input
            style={estilos.txt2}
            leftIcon={{ type: 'font-awesome',color:'#DAFDBA' ,size:24,name: 'user' }}
            value={login} 
            onChange={e => {
                setLogin(e.target.value)
        }}
        placeholder="Usuário"
        />
        </SafeAreaView>

            <SafeAreaView style={estilos.act}>
            <Input
            style={estilos.txt2}
            secureTextEntry
            leftIcon={{ type: 'font-awesome',color:'#DAFDBA' ,size:24,name: 'key' }}
            value={password}
            onChange={e => {
                setPassword(e.target.value)
        }}
        placeholder="Password"
        keyboardType="visible-password"
        />
        </SafeAreaView>
        
        <SafeAreaView style={estilos.button}>
        <Button 
        icon={<Icon 
        name="check"
        size={20} 
        color='#DAFDBA'/>}
        buttonStyle={{
            borderRadius: 30,
            backgroundColor: '#13678A',
        }}
        title='Login'
        titleStyle={{
            color: '#DAFDBA',
            fontSize: 24,
            fontWeight: 'bold',
          }}  
        onPress={() => navigation.navigate('Tela de Opções')} 
        />
        </SafeAreaView>

</View>       
    )
}

const estilos = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#012030',
        alignItems: 'center',
        justifyContent: 'center',
    },

    
    txt1:{
        color:'#DAFDBA',
        fontWeight: 'bold',
        fontSize:36,
    },
    act:{
        flexDirection: 'row',

    },
        
    txt2:{
        color:'#DAFDBA',
        fontWeight: 'bold',
        fontSize:20,
    },

    button:{
        padding:10,
        width: 400,
        height: 100,
        marginTop:'10%',
        marginLeft:'20%',
        marginRight:'20%',
    },
    checkbox:{

        marginTop:'50%',
        marginBottom:'5%',
        marginLeft:'5%',
        marginRight:'5%',
    },

}); 