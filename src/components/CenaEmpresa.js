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

const detalheEmpresa = require('../../imgs/detalhe_empresa.png');



export default class CenaEmpresa extends Component {
  render() {
    return (
    <View style={{backgroundColor:'#FFF',flex:1}}>
        <StatusBar backgroundColor='#EC7148' />
        <BarraNavegacao voltar={true} nav={this.props.nav} cor={'#EC7148'}/>
        <View style = {styles.cabecalho}>
                <Image  source={detalheEmpresa}/>
                <Text style={styles.txtCabecalho}>A Empresa</Text>
        </View>
        <View style={styles.detalheEmpresa}>
            <Text style={styles.txtEmpresa}>A ATM Consultoria está no mercado a mais de 20 anos</Text>
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
        color:'#EC7148',
        fontSize:30,
        marginLeft:10,
        marginTop:25
    },
    detalheEmpresa:{
        padding:20,
        marginTop:20
    },
    txtEmpresa:{
        fontSize:18
    }

});


