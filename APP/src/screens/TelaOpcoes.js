import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import Navbar from '../components/Navbar';


export default function TelaOpcoes({navigation}){

        return(
            
            <View style={estilos.container}>
            <Navbar/>
            <SafeAreaView style={estilos.button}>
            <Button 
            buttonStyle={{
                borderRadius: 30,
                backgroundColor: '#13678A',
                            
            }}
            
            title=' Login'
            titleStyle={{
                color: '#DAFDBA',
                fontSize: 24,
            }} 
            onPress={() => navigation.navigate('Login')} 
            />
            </SafeAreaView>

            <SafeAreaView style={estilos.button2}>
            <Button 
            buttonStyle={{
                borderRadius: 30,
                backgroundColor: '#13678A',
                            
            }}
            
            title='Cadastrar Usuários'
            titleStyle={{
                color: '#DAFDBA',
                fontSize: 24,
            }} 
            onPress={() => navigation.navigate('Cadastrar Usuários')} 
            />
            </SafeAreaView>

            <SafeAreaView style={estilos.button3}>
            <Button 
            buttonStyle={{
                borderRadius: 30,
                backgroundColor: '#13678A',
                            
            }}
            
            title='Consultar Cliente Prospecção'
            titleStyle={{
                color: '#DAFDBA',
                fontSize: 24,
            }} 
            onPress={() => navigation.navigate('Consultar Cliente Prospecção')} 
            />
            </SafeAreaView>


            <SafeAreaView style={estilos.button4}>
            <Button 
            buttonStyle={{
                borderRadius: 30,
                backgroundColor: '#13678A',
                            
            }}
            
            title='Consultar Cliente Venda'
            titleStyle={{
                color: '#DAFDBA',
                fontSize: 24,
            }} 
            onPress={() => navigation.navigate('Consultar Cliente Venda')} 
            />
            </SafeAreaView>


            <SafeAreaView style={estilos.button5}>
            <Button 
            buttonStyle={{
                borderRadius: 30,
                backgroundColor: '#13678A',
                            
            }}
            
            title='Calendário de Visitas'
            titleStyle={{
                color: '#DAFDBA',
                fontSize: 24,
            }} 
            onPress={() => navigation.navigate('Calendário de Visitas')} 
            />
            </SafeAreaView>


            <SafeAreaView style={estilos.button6}>
            <Button 
            buttonStyle={{
                borderRadius: 30,
                backgroundColor: '#13678A',
                            
            }}
            
            title='Consultar Gráfico de Porspecção'
            titleStyle={{
                color: '#DAFDBA',
                fontSize: 24,
            }} 
            onPress={() => navigation.navigate('Consultar Gráfico de Porspecção')} 
            />
            </SafeAreaView>

            <SafeAreaView style={estilos.button7}>
            <Button 
            buttonStyle={{
                borderRadius: 30,
                backgroundColor: '#13678A',
                            
            }}
            
            title='Total de Vistas x Vendas'
            titleStyle={{
                color: '#DAFDBA',
                fontSize: 24,
            }} 
            onPress={() => navigation.navigate('Total de Vistas x Vendas')} 
            />
            </SafeAreaView>

            <SafeAreaView style={estilos.button8}>
            <Button 
            buttonStyle={{
                borderRadius: 30,
                backgroundColor: '#13678A',
                            
            }}
            
            title='Vendas x Valor da Venda'
            titleStyle={{
                color: '#DAFDBA',
                fontSize: 24,
            }} 
            onPress={() => navigation.navigate('Vendas x Valor da Venda')} 
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
    
        button:{
            width: 400,
            marginHorizontal: 50,
            marginVertical: 10,
        },

        button2:{
            width: 400,
            marginHorizontal: 50,
            marginVertical: 10,
        },

        button3:{
            width: 400,
            marginHorizontal: 50,
            marginVertical: 10,
        },

        button4:{
            width: 400,
            height: 40,
            marginHorizontal: 50,
            marginVertical: 10,
        },

        button5:{
            width: 400,
            marginHorizontal: 50,
            marginVertical: 10,
        },

        button6:{
            width: 400,
            marginHorizontal: 50,
            marginVertical: 10,
        },

        button7:{
            width: 400,
            marginHorizontal: 50,
            marginVertical: 10,
        },

        button8:{
            width: 400,
            marginHorizontal: 50,
            marginVertical: 10,
        },

    }); 