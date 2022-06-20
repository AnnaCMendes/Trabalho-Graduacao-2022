import React from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import {  Input, Button} from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';




export default function ConsultarClienteProspeccao2({navigation}){
    
    const [Nome, setNome] = React.useState('')
    return(

        <View style={estilos.container}>

            <ScrollView style={estilos.scrollView}>
            
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>

            <Text style={estilos.txt1}>Clientes Prospecção!</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            

            <Text style={estilos.txt2}>Nome da Pessoa ou Organização:</Text>
            <Text></Text>
            <Text></Text>
            <Text style={estilos.txt2}>Pessoa:</Text>
            <Text></Text>
            <Text></Text>
            <Text style={estilos.txt2}>Representante: Fabiano Alves / São José dos Campos - SP</Text>
            <Text></Text>
            <Text></Text>
            <Text style={estilos.txt2}>Origem do Negócio:</Text>
            <Text></Text>
            <Text></Text>
            <Text style={estilos.txt2}>Tipo de Orçamento:</Text>
            <Text></Text>
            <Text></Text>
            <Text style={estilos.txt2}>Segmento do Cliente:</Text>
            <Text></Text>
            <Text></Text>
            <Text style={estilos.txt2}>Responsável Pelo Negócio:</Text>
            <Text></Text>
            <Text></Text>
            <Text style={estilos.txt2}>Participação de Prceiro:</Text>
            <Text></Text>
            <Text></Text>
            <Text style={estilos.txt2}>Telefone do cliente:</Text>
            <Text></Text>
            <Text></Text>
            <Text style={estilos.txt2}>Local da Prospecção:</Text>
            <Text></Text>
            <Text></Text>
            <Text style={estilos.txt2}>Tipo de Conecção - Tensão:</Text>
            <Text></Text>
            <Text></Text>
            <Text style={estilos.txt2}>Estado:</Text>
            <Text></Text>
            <Text></Text>
            <Text style={estilos.txt2}>Município:</Text>
            <Text></Text>
            <Text></Text>
            <Text style={estilos.txt2}>Data do cadastro:</Text>
            <Text></Text>
            <Text></Text>
            <Text style={estilos.txt2}>Data da próxima visita:</Text>
            <Text></Text>
            <Text></Text>
            <Text style={estilos.txt2}>Horário da visita:</Text>
            <Text></Text>
            <Text></Text>
            <Text style={estilos.txt2}>Informe o valor da Venda: </Text>
            <Text></Text>
            <Text></Text>
            <Text style={estilos.txt2}>Cliente Venda: </Text>

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
            
            title='OK'
            titleStyle={{
                color: '#DAFDBA',
                fontSize: 36,
            }} 
            onPress={() => navigation.navigate('Tela de Opções')} 
            />
            </SafeAreaView>

            <Text></Text>
            <Text></Text>
            <Text></Text>

        
            </ScrollView>
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

    txt3:{
        color:'#45C4B0',
        fontWeight: 'bold',
        fontSize:20,
    },

    act:{
        flexDirection: 'row',

    },
    
    scrollView: {
        
        marginHorizontal: 20,
    },
    
    containerbox: {

        backgroundColor: '#45C4B0',
        marginTop:'2%',

    },

    boxer:{
        color:'#012030',
        fontWeight: 'bold',
        fontSize:20,
    },

    button:{

        marginTop:'10%',
        marginLeft:'20%',
        marginRight:'20%',
    },

});