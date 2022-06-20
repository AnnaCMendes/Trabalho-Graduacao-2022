import React from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {  Input, Button} from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';


export default function ConsultarClienteProspeccao({navigation}){

    const [Nome, setNome] = React.useState('')

    return(
        <View style={estilos.container}>

            <Text style={estilos.txt1}>Consultar Clientes Prospecção </Text>

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


            <SafeAreaView style={estilos.button1}>
            <Button 
            buttonStyle={{
                borderRadius: 30,
                backgroundColor: '#13678A',
                            
            }}
            
            title='ENTRAR'
            titleStyle={{
                color: '#DAFDBA',
                fontSize: 36,
            }} 
            onPress={() => navigation.navigate('Consultar Cliente Prospecção 2')} 
            />
            </SafeAreaView>

            <Text></Text>
            <Text></Text>
            <Text></Text>

            <SafeAreaView style={estilos.button}>
            <Button 
            icon={<Icon 
            name="table"
            size={60} 
            color='#025940'/>}
            buttonStyle={{
                borderRadius: 50,
                backgroundColor: '#13678A',
            }}
            title='EXCEL DE DADOS'
            titleStyle={{
                color: '#DAFDBA',
                fontSize: 24 ,
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
        fontSize:30,
    },
    txt2:{
        color:'#DAFDBA',
        fontWeight: 'bold',
        fontSize:20,
    },

    act:{
        flexDirection: 'row',

    },

    txt3:{
        color:'#45C4B0',
        fontWeight: 'bold',
        fontSize:20,
    },

    button4:{
        width: 400,
        height: 40,
        marginHorizontal: 50,
        marginVertical: 10,
    },
});
