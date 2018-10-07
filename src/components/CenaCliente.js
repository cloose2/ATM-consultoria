import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar
} from 'react-native';
import BarraNavegacao from './BarraNavegacao'

const detalheCliente = require('../../imgs/detalhe_cliente.png');
const cliente1 = require('../../imgs/cliente1.png');
const cliente2 = require('../../imgs/cliente2.png');


export default class CenaCliente extends Component {
  render() {
    return (
    <View style={{backgroundColor:'#FFF',flex:1}}>
        <StatusBar backgroundColor='#B9C941'/>
        <BarraNavegacao voltar={true} nav={this.props.nav} cor={'#B9C941'}/>
        <View style = {styles.cabecalho}>
                <Image  source={detalheCliente}/>
                <Text style={styles.txtCabecalho}>Nossos Clientes</Text>
        </View>
        <View style={styles.detalheClientes}>
                <Image   source={cliente1}/>
                <Text style={styles.txtCliente}>Cliente 1</Text>
        </View>
        <View style={styles.detalheClientes}>
                <Image   source={cliente2}/>
                <Text style={styles.txtCliente}>Cliente 2</Text>
        </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
    cabecalho:{
        flexDirection:'row',
        marginTop:20
    },
    txtCabecalho:{
        color:'#B9C941',
        fontSize:30,
        marginLeft:10,
        marginTop:25
    },
    detalheClientes:{
        padding:20,
        marginTop:10
    },
    txtCliente:{
        paddingLeft:20,
        fontSize:18,
    }
});


