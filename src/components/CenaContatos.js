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

const detalheContato = require('../../imgs/detalhe_contato.png');



export default class CenaContatos extends Component {
  render() {
    return (
    <View style={{backgroundColor:'#FFF',flex:1}}>
        <StatusBar backgroundColor='#61BD8C' />
        <BarraNavegacao voltar={true} nav={this.props.nav} cor={'#61BD8C'}/>
        <View style = {styles.cabecalho}>
                <Image  source={detalheContato}/>
                <Text style={styles.txtCabecalho}>Contatos</Text>
        </View>
        <View style={styles.detalheContatos}>
            <Text style={styles.txtContato}>TEL:(11) 1234-1234</Text>
            <Text style={styles.txtContato}>CEL:(11) 9233-4321</Text>
            <Text style={styles.txtContato}>EMAIL: contato@atmconsultoria.com</Text>
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
        color:'#61BD8C',
        fontSize:30,
        marginLeft:10,
        marginTop:25
    },
    detalheContatos:{
        padding:20,
        marginTop:20
    },
    txtContato:{
        fontSize:18
    }

});


