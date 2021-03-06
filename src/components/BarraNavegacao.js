import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  Image,
  Text,
  View
} from 'react-native';


const btnVoltar = require('../../imgs/btn_voltar.png')

export default class BarraNavegacao extends Component {
  render() {
    if(this.props.voltar){
    return (
      <View style={[styles.barraTitulo,{backgroundColor:this.props.cor}]}>
        <TouchableHighlight underlayColor={this.props.cor} activeOpacity={0.3} onPress={()=>{
          this.props.nav.pop();
        }}>
          <Image source={btnVoltar}/>  
        </TouchableHighlight>
        <Text style={styles.titulo}>ATM Consultoria</Text>
      </View>
    );
  }
  return (
    <View style={styles.barraTitulo}>
      <Text style={styles.titulo}>ATM Consultoria</Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
    barraTitulo:{
        backgroundColor:'#CCC',
        padding:10,
        flexDirection:'row',
        height:60
    },
    titulo:{
        flex:1,
        fontSize:18,
        textAlign:'center',
        color:'#000'
    }
});