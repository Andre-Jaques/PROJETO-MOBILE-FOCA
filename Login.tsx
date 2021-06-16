import React, {useState} from 'react';
import { Image, Platform, View, StyleSheet, TextInput,Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function Login({navigation} : {navigation: any}) {
  

  return (
     

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerprincipal}>
       <View style={styles.menu}>

          <Ionicons name="arrow-back" size={30} color="#552583" onPress={() =>{navigation.navigate('LandingPage')} }/>
          
          <Ionicons name="ios-menu" size={30} color="#552583" />

       </View>

      <ScrollView style={{flex: 1, backgroundColor:'white' }} >

          <View style={styles.formLogin}>
               <Text style={styles.tituloLogin}>Bem-Vindo</Text>

               <TextInput
                    style={styles.input}
                    placeholder='Email'
                    keyboardType="email-address"
                    
                />

               <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    secureTextEntry
                />

               <TouchableOpacity 
               style={styles.botaoLogin}
               onPress={() =>{navigation.navigate('Login')} }>

                    <Text style={styles.textoBotao}>Entrar</Text> 

               </TouchableOpacity>

               <Text style={{fontSize:18, fontFamily:'Prompt_600SemiBold', color:"#552583", textDecorationLine: 'underline'}} onPress={() =>{navigation.navigate('EsqueceuSenha')} }>Esqueceu sua senha?</Text>
          </View>

          <View style={styles.acessoAlternativo}>
              <Text style={styles.texto}>ou entre com</Text> 

              <View style={styles.iconesLogin}>

                    <Image
                         source={require('../projetoFoca/image/google.png')}
                         style={styles.imgLogin}>
                    </Image>

                    <Image
                         source={require('../projetoFoca/image/facebook.png')}
                         style={styles.imgLogin}>
                    </Image>

              </View>

              <Text style={styles.texto}>Ainda não tem conta? <Text style={{color:"#552583"}} onPress={() =>{navigation.navigate('Cadastrar')} }>Cadastre-se</Text></Text>
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

     formLogin:{
          alignItems:'center',
          justifyContent:'space-around',
          height:300,
          
          
          

     },

     tituloLogin:{
          width:"80%",
          height:"20%",
          textAlign:'center',
          fontSize:32,
          color:"#552583",
          fontFamily:'Prompt_600SemiBold',
          
     },

     input: {
          width: "80%",
          height: 40,
          backgroundColor: 'white',
          fontFamily:'Prompt_600SemiBold',
          borderBottomColor: "#552583",
          borderBottomWidth:2,
          paddingLeft:20,
          color:"#552583",
          
     },


     botaoLogin:{
          width:'33%',
          height:'12%',
          alignItems:'center',
          justifyContent:'center',
          //backgroundColor: '#FDB927',
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
          color:"#fff",
          fontSize:20,
          fontFamily:'Prompt_600SemiBold',
     },

     acessoAlternativo:{
          
          height:180,
          alignItems:'center',
          justifyContent:'space-around',
          
          marginTop:20,
          
          
     },

     iconesLogin:{
          width:"45%",
          
          
          flexDirection:"row",
          alignItems:'center',
          justifyContent:'space-around',
          
     },

     imgLogin:{
          width:50,
          height:50,
         
     },

     texto:{
          fontSize:17,
          fontFamily:'Prompt_600SemiBold',
          width:'95%',
          textAlign:'center',
     },
}) 
