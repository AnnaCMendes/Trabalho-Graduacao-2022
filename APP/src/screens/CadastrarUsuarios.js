import React from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, CheckBox} from 'react-native';
import {  Input, Button} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import Navbar from '../components/Navbar'; 



export default function CadastrarUsuario({navigation}){
    
    const [Nome, setNome] = React.useState('')
    const [selectedValue, setSelectedValue] = useState("PessoaFisíca");
    const [selectedValue2, setSelectedValue2] = useState("PROSPECÇÃODOVENDEDOR");
    const [selectedValue3, setSelectedValue3] = useState("ORÇAMENTOVIAAPP");
    const [selectedValue4, setSelectedValue4] = useState("RESIDENCIAL");
    const [selectedValue5, setSelectedValue5] = useState("FACEBOOK");
    const [selectedValue6, setSelectedValue6] = useState("TRIFÁSICA - 380/220 v - 380 v");
    const [selectedValue7, setSelectedValue7] = useState("SP");

    return(

        <View style={estilos.container}>


            
            <ScrollView style={estilos.scrollView}>
            
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>

            <Text style={estilos.txt1}>CADASTRAR NOVO CLIENTE!</Text>

            <Navbar/>
            <Text></Text>
            

            <Text style={estilos.txt2}>Preencha todos os campos para cadastrar um novo cliente.</Text>

            <Text></Text>
            <Text></Text>

            <Text style={estilos.txt2}>Nome da Pessoa ou Organização:</Text>

            <Text></Text>
            
            
            <SafeAreaView style={estilos.act}>
            <Input
            style={estilos.txt3}
            leftIcon={{ type: 'font-awesome',color:'#DAFDBA' ,size:24,name: 'user' }}
            value={Nome} 
            onChange={e => {
                setNome(e.target.value)
        }}
        placeholder=""
        />
        </SafeAreaView>

        <Text style={estilos.txt2}>Pessoa:</Text>
        <View style={estilos.containerbox}>
        <Picker style={estilos.boxer}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) =>
            setSelectedValue(itemValue)
        }>
        <Picker.Item label="Pessoa Fisíca" value="PessoaFisíca" />
        <Picker.Item label="Pessoa Juridíca" value="PessoaJuridíca" />
        </Picker>
        </View>

        <Text></Text>

        <Text style={estilos.txt2}>Representante: Fabiano Alves / São José dos Campos - SP</Text>

        <Text></Text>

        <Text style={estilos.txt2}>Origem do Negócio:</Text>
        <View style={estilos.containerbox}>
        <Picker style={estilos.boxer}
        selectedValue={selectedValue2}
        onValueChange={(itemValue2, itemIndex) =>
            setSelectedValue2(itemValue2)
        }>
        <Picker.Item label="PROSPECÇÃO DO VENDEDOR " value="PROSPECÇÃODOVENDEDOR " />
        <Picker.Item label="PARCEIRO DE NEGÓCIO" value="PARCEIRODENEGÓCIO" />
        <Picker.Item label="GESTOR DE LEADS" value="GESTORDELEADS" />
        <Picker.Item label="INDICAÇÃO DE CLIENTE" value="INDICAÇÃODECLIENTE" />
        <Picker.Item label="LICITAÇÃO" value="LICITAÇÃO" />
        </Picker>
        </View>

        <Text></Text>

        <Text style={estilos.txt2}>Tipo de Orçamento:</Text>
        <View style={estilos.containerbox}>
        <Picker style={estilos.boxer}
        selectedValue={selectedValue3}
        onValueChange={(itemValue3, itemIndex) =>
            setSelectedValue3(itemValue3)
        }>
        <Picker.Item label="ORÇAMENTO VIA APP" value="ORÇAMENTOVIAAPP" />
        <Picker.Item label="ORÇAMENTO INTERNO" value="ORÇAMENTOINTERNO " />
        </Picker>
        </View>

        <Text></Text>

        <Text style={estilos.txt2}>Segmento do Cliente:</Text>
        <View style={estilos.containerbox}>
        <Picker style={estilos.boxer}
        selectedValue={selectedValue4}
        onValueChange={(itemValue4, itemIndex) =>
            setSelectedValue4(itemValue4)
        }>
        <Picker.Item label="RESIDENCIAL " value="RESIDENCIAL " />
        <Picker.Item label="COMERCIAL" value="COMERCIAL" />
        <Picker.Item label="GESTOR DE LEADS" value="GESTORDELEADS" />
        <Picker.Item label="AGRONEGÓCIO" value="AGRONEGÓCIO" />
        <Picker.Item label="INDUSTRIAL" value="INDUSTRIAL" />
        </Picker>
        </View>

        <Text></Text>

        <Text style={estilos.txt2}>Responsável Pelo Negócio:</Text>

        <Text></Text>


        <SafeAreaView style={estilos.act}>
        <Input
            style={estilos.txt3}
            leftIcon={{ type: 'font-awesome',color:'#DAFDBA' ,size:24,name: 'user' }}
            value={Nome} 
            onChange={e => {
                setNome(e.target.value)
        }}
            placeholder=""
        />
        </SafeAreaView>

        <Text></Text>

        <Text style={estilos.txt2}>Participação de Prceiro:  </Text>

        <Text></Text>


        <SafeAreaView style={estilos.act}>
        <Input
            style={estilos.txt3}
            leftIcon={{ type: 'font-awesome',color:'#DAFDBA' ,size:24,name: 'tablet' }}
            value={Nome} 
            onChange={e => {
            setNome(e.target.value)
        }}
        placeholder=""
        />
        </SafeAreaView>

        <Text style={estilos.txt2}>Informe o Telefone do cliente:</Text>

        <Text></Text>


        <SafeAreaView style={estilos.act}>
        <Input
            style={estilos.txt3}
            leftIcon={{ type: 'font-awesome',color:'#DAFDBA' ,size:24,name: 'phone' }}
            value={Nome} 
            onChange={e => {
            setNome(e.target.value)
        }}
        placeholder=""
        />
        </SafeAreaView>

        <Text style={estilos.txt2}>Indique o local da Prospecção:</Text>
        <View style={estilos.containerbox}>
        <Picker style={estilos.boxer}
        selectedValue={selectedValue5}
        onValueChange={(itemValue5, itemIndex) =>
            setSelectedValue5(itemValue5)
        }>
        <Picker.Item label="FACEBOOK" value="FACEBOOK" />
        <Picker.Item label="INSTAGRAM" value="INSTAGRAM " />
        <Picker.Item label="HCC" value="HCC" />
        <Picker.Item label="INDICAÇÂO" value="INDICAÇÂO" />
        <Picker.Item label="PANFLETO" value="PANFLETO" />
        <Picker.Item label="PROSPECÇÃO VENDEDOR " value="PROSPECÇÃOVENDEDOR " />
        </Picker>
        </View>

        <Text></Text>

        <Text style={estilos.txt2}>Informar o Tipo de Conecção - Tensão:</Text>
        <View style={estilos.containerbox}>
        <Picker style={estilos.boxer}
        selectedValue={selectedValue6}
        onValueChange={(itemValue6, itemIndex) =>
            setSelectedValue6(itemValue6)
        }>
        <Picker.Item label="TRIFÁSICA - 380/220 v - 380 v" value="TRIFÁSICA - 380/220 v - 380 v" />
        <Picker.Item label="MONOFÁSICA 127 V - 127 v" value="MONOFÁSICA 127 V - 127 v " />
        <Picker.Item label="BIFÁSICA 220/127 v - 220 v" value="BIFÁSICA 220/127 v - 220 v" />
        <Picker.Item label="TRIFÁSICA - 220/127 v  - 220 v " value="TRIFÁSICA - 220/127 v  - 220 v " />
        <Picker.Item label="TRIFÁSICA - 800/460 v - 800 v " value="TRIFÁSICA - 800/460 v - 800 v " />
        <Picker.Item label="MONOFÁSICA 254/127 v - 254 v" value="MONOFÁSICA 254/127 v - 254 v " />
        </Picker>
        </View>

        <Text></Text>

        <Text style={estilos.txt2}>Informar o  Estado: </Text>
        <View style={estilos.containerbox}>
        <Picker style={estilos.boxer}
        selectedValue={selectedValue7}
        onValueChange={(itemValue7, itemIndex) =>
            setSelectedValue7(itemValue7)
        }>
        <Picker.Item label="São Paulo -SP" value="SP" />
        <Picker.Item label="Sergipe - SE" value="SE" />
        <Picker.Item label="Tocantins - TO" value="TO" />
        <Picker.Item label="Santa Catarina - SC" value="SC" />
        <Picker.Item label="Roraima - RR" value="RR" />
        <Picker.Item label="Rondônia - RO" value="RO " />
        <Picker.Item label="Rio Grande do Sul - RS" value="RS" />
        <Picker.Item label="Rio Grande do Norte - RN" value="RN" />
        <Picker.Item label="Rio de Janeiro - RJ" value="RJ" />
        <Picker.Item label="Piauí - PI" value="PI" />
        <Picker.Item label="Pernambuco - PE" value="PE" />
        <Picker.Item label="Paraná - PR" value="PR" />
        <Picker.Item label="Paraíba - PB" value="PB" />
        <Picker.Item label="Pará- PA" value="PA" />
        <Picker.Item label="Minas Gerais - MG" value="MG" />
        <Picker.Item label="Mato Grosso do Sul - MS" value="MS" />
        <Picker.Item label="Mato Grosso - MT" value="MT" />
        <Picker.Item label="Maranhão - MA" value="MA" />
        <Picker.Item label="Goiás - GO" value="GO" />
        <Picker.Item label="Espírito Santo - ES" value="ES" />
        <Picker.Item label="Distrito Federal - DF" value="DF" />
        <Picker.Item label="Ceará - CE" value="CE" />
        <Picker.Item label="Bahia - BA" value="BA" />
        <Picker.Item label="Amazonas - AM" value="AM" />
        <Picker.Item label="Amapá - AP" value="AP" />
        <Picker.Item label="Alagoas - AL" value="AL" />
        <Picker.Item label="Acre - AC" value="AC" />
        <Picker.Item label="Distrito Federal - DF" value="DF" />
        </Picker>
        </View>

        <Text></Text>

        <Text style={estilos.txt2}>Informar o Município:</Text>

        <Text></Text>


        <SafeAreaView style={estilos.act}>
        <Input
            style={estilos.txt3}
            leftIcon={{ type: 'font-awesome',color:'#DAFDBA' ,size:24,name: 'home' }}
            value={Nome} 
            onChange={e => {
            setNome(e.target.value)
        }}
        placeholder=""
        />
        </SafeAreaView>

        <Text></Text>

        <Text style={estilos.txt2}>Informar a data do cadastro:</Text>

        <Text></Text>


        <SafeAreaView style={estilos.act}>
        <Input
            style={estilos.txt3}
            leftIcon={{ type: 'font-awesome',color:'#730202' ,size:24,name: 'table'  }}
            value={Nome} 
            onChange={e => {
            setNome(e.target.value)
        }}
        placeholder=""
        />
        </SafeAreaView>

        <Text></Text>

        <Text style={estilos.txt2}>Informar a data da próxima visita:</Text>

        <Text></Text>


        <SafeAreaView style={estilos.act}>
        <Input
            style={estilos.txt3}
            leftIcon={{ type: 'font-awesome',color:'#730202' ,size:24,name: 'table'  }}
            value={Nome} 
            onChange={e => {
            setNome(e.target.value)
        }}
        placeholder=""
        />
        </SafeAreaView>

        <Text></Text>

        <Text style={estilos.txt2}>Informar o horário da nova visita:</Text>

        <Text></Text>


        <SafeAreaView style={estilos.act}>
        <Input
            style={estilos.txt3}
            leftIcon={{ type: 'font-awesome',color:'#DAFDBA' ,size:24,name: 'dashboard'  }}
            value={Nome} 
            onChange={e => {
            setNome(e.target.value)
        }}
        placeholder=""
        />
        </SafeAreaView>

        <SafeAreaView style={estilos.button}>
        <Button 
        buttonStyle={{
            borderRadius: 30,
            backgroundColor: '#13678A',
        }}
        title='SALVAR'
        titleStyle={{
            color: '#DAFDBA',
            fontSize: 24,
            fontWeight: 'bold',
          }}  
        onPress={() => navigation.navigate('Tela de Opções')} 
        />
        </SafeAreaView>

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
