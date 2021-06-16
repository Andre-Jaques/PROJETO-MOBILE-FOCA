import React, {useState} from 'react';
import { Image, Platform, View, StyleSheet, TextInput,Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 



export default function EsqueceuSenha({navigation} : {navigation: any}) {
  

  return (
     

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerprincipal}>
       <View style={styles.menu} >

          <Ionicons name="arrow-back" size={30} color="#552583" onPress={() =>{navigation.navigate('LandingPage')} }/>
 
          <Ionicons name="ios-menu" size={30} color="#552583" />
       </View>

      <ScrollView style={{ backgroundColor:'white'}} >

          <View style={styles.formEsqueceu}>

               <Text style={styles.tituloEsqueceu}>Esqueceu a senha?</Text>

               <Text style={styles.subTituloEsqueceu}>
                Esqueceu a senha ? Digite um e-mail para que possamos enviar 
                um código para definir sua nova senha.
                </Text>

               <TextInput
                    style={styles.input}
                    placeholder='Email'
                    keyboardType="email-address"
                    
                />

               <TouchableOpacity 
               style={styles.botaoEsqueceu}
               onPress={() =>{navigation.navigate('Login')} }>

                    <Text style={styles.textoBotao}>Redefinir</Text> 

               </TouchableOpacity>

               <Text style={styles.subTituloEsqueceu}>
               Não deseja redefinir sua senha? 
  
               </Text>

               <Text style={{fontFamily:'Prompt_600SemiBold',fontSize:18, color:"#552583"}} onPress={() =>{navigation.navigate('Login')} }>Faça login agora </Text>
          </View>

      </ScrollView>

    </KeyboardAvoidingView>


  );
}

const styles =  StyleSheet.create({

     containerprincipal:{
          flex:1,
         
     },

     menu:{
          marginTop:20,
          backgroundColor:"white",
          height:50,
          flexDirection:"row",
          alignItems:'center',
          padding:10,
          justifyContent:"space-between"
          
     },

     logo:{
          fontSize:25,
          fontWeight:"bold",
          color:"#fff"
     },

     formEsqueceu:{
          
          alignItems:'center',
          justifyContent:'space-around',
          height:530,
          
     },

     tituloEsqueceu:{
          width:"80%",
          height:"20%",
          textAlign:'center',
          fontSize:30,
          color:"#552583",
          fontFamily:'Prompt_600SemiBold',
     },

     subTituloEsqueceu:{
        width:"90%",
        height:"10%",
        textAlign:'center',
        fontSize:16,
        color:"gray",
        fontFamily:'Prompt_600SemiBold',
   },

     input: {
          marginTop:15,
          width: 250,
          height: 40,
          backgroundColor: 'white',
          fontFamily:'Prompt_600SemiBold',
          borderBottomColor: "#552583",
          borderBottomWidth:2,
          paddingLeft:20,
          color:"#552583",
     },

     botaoEsqueceu:{
          width:'40%',
          height:'12%',
          alignItems:'center',
          justifyContent:'center',
          backgroundColor: '#552583',
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
          color:"white",
          fontSize:20,
          fontFamily:'Prompt_600SemiBold',
     },

     
     
}) 
