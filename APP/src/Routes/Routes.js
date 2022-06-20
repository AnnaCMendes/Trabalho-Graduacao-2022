import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import TelaOpcoes from '../screens/TelaOpcoes';
import CadastrarUsuario from '../screens/CadastrarUsuarios';
import ConsultarClienteProspeccao from '../screens/ConsultarClienteProspccao';
import ConsultarClienteProspeccao2 from '../screens/ConsultarClienteProspccao2';
import ConsultarClienteVenda from '../screens/ConsultarClienteVenda';
import ConsultarClienteVenda2 from '../screens/ConsultarClienteVenda2';
import CalendariodeVisitas from '../screens/CalendariodeVisitas';
import CalendariodeVisitas2 from '../screens/CalendariodeVisitas2';
import ConsultarGraficodeProspeccao from '../screens/ConsultarGraficodeProspeccao';
import TotalVisitasxVendas from '../screens/TotalVisitasxVendas';
import VendasxValorVenda from '../screens/VendasxValorVenda';


const Routes = () =>{
    const Stack = createStackNavigator();

      return (
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
          <Stack.Screen options={{headerShown: false}} name="Tela de Opções" component={TelaOpcoes} />
          <Stack.Screen options={{headerShown: false}} name="Cadastrar Usuários" component={CadastrarUsuario} />
          <Stack.Screen options={{headerShown: false}} name="Consultar Cliente Prospecção" component={ConsultarClienteProspeccao} />
          <Stack.Screen options={{headerShown: false}} name="Consultar Cliente Prospecção 2" component={ConsultarClienteProspeccao2} />
          <Stack.Screen options={{headerShown: false}} name="Consultar Cliente Venda" component={ConsultarClienteVenda} />
          <Stack.Screen options={{headerShown: false}} name="Consultar Cliente Venda 2" component={ConsultarClienteVenda2} />
          <Stack.Screen options={{headerShown: false}} name="Calendário de Visitas" component={CalendariodeVisitas} />
          <Stack.Screen options={{headerShown: false}} name="Calendário de Visitas 2" component={CalendariodeVisitas2} />
          <Stack.Screen options={{headerShown: false}} name="Consultar Gráfico de Porspecção" component={ConsultarGraficodeProspeccao} />
          <Stack.Screen options={{headerShown: false}} name="Total de Vistas x Vendas" component={TotalVisitasxVendas} />
          <Stack.Screen options={{headerShown: false}} name="Vendas x Valor da Venda" component={VendasxValorVenda} />
         </Stack.Navigator>
      );
}

export default Routes;