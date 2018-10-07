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

const detalheServico = require('../../imgs/detalhe_servico.png');



export default class CenaServicos extends Component {
  render() {
    return (
    <View style={{backgroundColor:'#FFF',flex:1}}>
        <StatusBar backgroundColor='#19D1C8' />
        <BarraNavegacao voltar={true} nav={this.props.nav} cor={'#19D1C8'}/>
        <View style = {styles.cabecalho}>
                <Image  source={detalheServico}/>
                <Text style={styles.txtCabecalho}>Nossos Serviços</Text>
        </View>
        <View style={styles.detalheContatos}>
            <Text style={styles.txtContato}>-Consultoria</Text>
            <Text style={styles.txtContato}>-Processos</Text>
            <Text style={styles.txtContato}>-Acompanhamento de Projetos</Text>
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
        color:'#19D1C8',
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


