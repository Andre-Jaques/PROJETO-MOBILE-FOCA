import React, {useState} from 'react';
import { Image, Platform, View, StyleSheet, TextInput,Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



export default function TelaInicial({navigation} : {navigation: any}) {
  

  return (
     

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerprincipal}>

      <View style={styles.container}>

        <View style={styles.boxtitulo}>

             <Text style={styles.titulo}>Vamos conhecer o Foca? </Text>

        </View>


        <TouchableOpacity 
            style={styles.botaoCadastrar}
            onPress={() =>{navigation.navigate('LandingPage')} }>

            <AntDesign name="arrowright" size={35} color="#552583" /> 

        </TouchableOpacity>

          

      </View>

    </KeyboardAvoidingView>


  );
}

const styles =  StyleSheet.create({

     containerprincipal:{
          flex:1,
     },

     container:{
        flex: 1, 
        backgroundColor:'#552583', 
        alignItems:'center', 
        justifyContent:'space-around',
       
   },

   boxtitulo:{
     alignItems:'center',
     justifyContent:"center",
     width:"90%",
     height:"50%",
     
     
 },

   titulo:{
        color:"white",
        fontSize:60,
        textAlign:'left',
        fontFamily:'Prompt_600SemiBold'
    },
 


     botaoCadastrar:{
          width:'33%',
          height:'10%',
          alignItems:'center',
          justifyContent:'center',
          backgroundColor: '#FDB927',
          borderRadius:10,
          shadowColor: "#000",
          shadowOffset: {
               width: 3,
               height: 3,
          },
          shadowOpacity: 0.40,
          shadowRadius: 4.65,

          elevation: 10,
          
     },

     textoBotao:{
          color:"#552583",
          fontSize:20,
          fontWeight:"bold",
     },

     
     

     
}) 
