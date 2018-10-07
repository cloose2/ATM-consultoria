import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import BarraNavegacao from './src/components/BarraNavegacao'
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaCliente from './src/components/CenaCliente';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';


export default class App extends Component {
  render() {
    return (
      
        <Navigator
        initialRoute={{id:'principal'}}
        renderScene={(route,navigator)=>{
          if(route.id=='principal'){
            return (<CenaPrincipal nav = {navigator}/>)
          }
          if(route.id=='cliente'){
            return (<CenaCliente nav = {navigator} />)
          }
          if(route.id=='contato'){
            return (<CenaContatos nav = {navigator} />)
          }
          if(route.id=='empresa'){
            return (<CenaEmpresa nav = {navigator} />)
          }
          if(route.id=='servico'){
            return (<CenaServicos nav = {navigator} />)
          }
        }}
        />
      
    );
  }
}

