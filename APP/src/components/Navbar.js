import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Button, Input } from 'react-native-elements';
import {useState} from 'react';
import { CommonActions, CommonNavigationAction } from '@react-navigation/native';

const Nav = path =>{
    CommonActions.navigate('Home');
}

const Header= ({navigation}) =>  {

return (
    <View>
    <View style={styles.row}>
        

        <View style={styles.home}>
            <Button icon={<Icon name="home" size={40} color="#9AEBA3" />} type="clear" onPress={() => navigation.navigate('Login')}/>
        </View>

        <View style={styles.logout}>
        <Button icon={<Icon name="sign-out" size={40} color="#9AEBA3" />} type="clear" onPress={() => navigation.navigate('Tela de Opções')}/>
        </View>

        <View style={styles.exit}>
        <Button icon={<Icon name="close" size={40} color="#9AEBA3" />} type="clear" onPress={() => navigation.navigate('')}/>
        </View>

    </View>
    </View>
);
}
export default Header

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
  
        
    },
    logout:{

        marginTop:'-20%',
        marginLeft:'5%',
        marginRight:'5%',
    },
    home:{
        marginTop:'-20%',
        marginLeft:'15%',
        marginRight:'15%',
        
    },

    exit:{
        marginTop:'-20%',
        marginLeft:'20%',
        marginRight:'20%',
        
    },

});