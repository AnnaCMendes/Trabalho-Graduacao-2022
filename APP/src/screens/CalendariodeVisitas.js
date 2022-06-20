import React from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {  Input, Button} from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';


export default function CalendariodeVisitas({navigation}){

    const [Nome, setNome] = React.useState('')

    return(
        <View style={estilos.container}>

            <Text style={estilos.txt1}>Calendário de Visitas</Text>

            <Text></Text>
            <Text></Text>

            <Text style={estilos.txt2}>Informe a data: </Text>

            <Text></Text>
            

            <SafeAreaView style={estilos.act}>
            <Input
            style={estilos.txt3}
            leftIcon={{ type: 'font-awesome',color:'#730202' ,size:24,name: 'table' }}
            value={Nome} 
            onChange={e => {
                setNome(e.target.value)
            }}
            placeholder=""
            />
            </SafeAreaView>

            <Text></Text>
            <Text></Text>
            <Text></Text>


            <Text style={estilos.txt2}>Nome da Pessoa ou Organização: </Text>

            <Text></Text>
            

            <SafeAreaView style={estilos.act}>
            <Input
            style={estilos.txt3}
            leftIcon={{ type: 'font-awesome',color:'#DAFDBA' ,size:24,name: 'edit' }}
            value={Nome} 
            onChange={e => {
                setNome(e.target.value)
            }}
            placeholder=""
            />
            </SafeAreaView>

            <Text></Text>
            <Text></Text>

            <SafeAreaView style={estilos.button1}>
            <Button 
            buttonStyle={{
                borderRadius: 20,
                backgroundColor: '#13678A',
                            
            }}
            
            title='ENTRAR'
            titleStyle={{
                color: '#DAFDBA',
                fontSize: 36,
            }} 
            onPress={() => navigation.navigate('Calendário de Visitas 2')} 
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
    txt2:{
        color:'#DAFDBA',
        fontWeight: 'bold',
        fontSize:24,
    },

    act:{
        flexDirection: 'row',

    },

    txt3:{
        color:'#45C4B0',
        fontWeight: 'bold',
        fontSize:20,
    },


});