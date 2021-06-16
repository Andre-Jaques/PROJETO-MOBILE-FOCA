import React, {useState} from 'react';
import { Image,Platform, 
          View, 
          StyleSheet, TextInput,
          Text, KeyboardAvoidingView, 
          ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import { TouchableOpacity } from 'react-native';

export default function LandingPage({navigation} : {navigation: any}) {
  

  return (
     

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerprincipal}>

      <View style={styles.menu}>
    
          <Ionicons name="arrow-back" size={30} color="#552583" onPress={() =>{navigation.navigate('TelaInicial')} }/>
          
          <Ionicons name="ios-menu" size={30} color="#552583" /> 

      </View>

      <ScrollView style={{flex: 1}} >

           <View style={styles.introducao}>
               <Text style={styles.tituloIntroducao}>MATENHA SEMPRE O FOCO!</Text>

               <Text style={styles.subTituloIntroducao}>O Foca é a plataforma que organiza seu 
                    dia a dia e te indica os melhores métodos
                     de estudo, totalmente personalizado com
                      o seu perfil!
               </Text>

               <Image
                    source={require('../projetoFoca/image/estudante.png')}
                    style={styles.imgIntroducao}>
               </Image>

               <TouchableOpacity 
               style={styles.botaoIntroducao}
               onPress={() =>{navigation.navigate('Login')} }>

                    <Text style={styles.textoBotao}>Faça Login</Text> 

               </TouchableOpacity>

               <Text style={{fontFamily:'Prompt_600SemiBold',fontSize:16}}>Ainda não tem conta? <Text style={{color:"#552583" ,fontWeight:"bold"}} onPress={() =>{navigation.navigate('Cadastrar')} }>Cadastre-se</Text> 
               </Text>
               
           </View>

           <View style={styles.previa}>

               <Text style={styles.tituloPrevia}>Oferecemos um conteúdo mais elaborado e personalizado</Text>
               <Text style={styles.subTituloPrevia}>Organizamos por dia da semana, disciplina e assunto. Assim, você mantém uma rotina de estudo organizada</Text>
    
           </View>

           <View style={styles.depoimentos}>
                <Text style={styles.tituloDepoimentos}>Depoimentos</Text>

                <View style={styles.boxDepoimentos}>

                    <Text style={styles.aspasDepoimentos}>“...Passei na federal”</Text>

                    <Text style={styles.descricaoDepoimentos}>
                         " O Foca foi essencial para mim. A plataforma 
                         facilitou muito meus estudos, pois não fazia cursinho 
                         e estudava e organizava o que estudaria por conta própria. ”
                    </Text>

                    <View style={styles.boxAvatarDepoimentos}>

                         <Image
                         source={require('../projetoFoca/image/avatar.png')}
                         style={styles.imgDepoimento}>
                         </Image> 

                         <Text style={styles.nomeDepoimentos}>Lairton Cruz</Text>

                    </View>

                </View>

                <View style={styles.boxDepoimentos}>

                    <Text style={styles.aspasDepoimentos}>“...consegui uma bolsa no Brasilescola”</Text>

                    <Text style={styles.descricaoDepoimentos}>
                         " O Foca foi essencial para mim. A plataforma 
                         facilitou muito meus estudos, pois não fazia cursinho 
                         e estudava e organizava o que estudaria por conta própria. ”
                    </Text>

                    <View style={styles.boxAvatarDepoimentos}>

                         <Image
                         source={require('../projetoFoca/image/avatar.png')}
                         style={styles.imgDepoimento}>
                         </Image> 

                         <Text style={styles.nomeDepoimentos}>Luan José</Text>

                    </View>

                </View>
      
           </View>

           <View style={styles.planos}>

               <Text style={styles.tituloPlanos}>Conheça nossos planos</Text>

               <View style={styles.blocoPlanos}>

                    <Text style={styles.individualPlanos}>INDIVIDUAL</Text>

                    <View style={styles.boxIndividual}>

                         <View style={styles.caixaTituloIndividual}>
                              <Text style={styles.tituloIndividual}>Grátis</Text>
                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>1 Prova de desempenho por semana</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/nao.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoCinza}>Horário de estudo personalizado</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/nao.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoCinza}>Covênios</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/nao.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoCinza}>Dashbord para professor</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/nao.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoCinza}>Horário de estudo personalizado</Text>

                         </View>

                    </View>

                    <View style={styles.boxIndividual}>

                         <View style={styles.caixaTituloIndividual}>
                              <Text style={styles.tituloIndividual}>Básico</Text>
                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>3 Provas de desempenho por semana</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>Horário de estudo personalizado</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/nao.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoCinza}>Covênios</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/nao.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoCinza}>Dashbord para professor</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/nao.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoCinza}>Horário de estudo personalizado</Text>

                         </View>

                    </View>

                    <View style={styles.boxIndividual}>

                         <View style={styles.caixaTituloIndividual}>
                              <Text style={styles.tituloIndividual}>Premium</Text>
                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>1 Prova por dia</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>Horário de estudo personalizado</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>Covênios</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/nao.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoCinza}>Dashbord para professor</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>Horário de estudo personalizado</Text>

                         </View>

                    </View>

               </View>

               <View style={styles.blocoRoxoPlanos}>

                    <Text style={styles.institucionalPlanos}>INSTITUCIONAL</Text>

                    <View style={[styles.boxIndividual, {borderColor:"#552583"}]}>

                         <View style={styles.caixaTituloinstitucional}>
                              <Text style={styles.tituloIndividual}>Menos de 500 alunos</Text>
                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>1 Prova por dia</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>Horário de estudo personalizado</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>Covênios</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/nao.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoCinza}>Dashbord para professor</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/nao.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoCinza}>Horário de estudo personalizado</Text>

                         </View>

                    </View>

                    <View style={[styles.boxIndividual, {borderColor:"#552583"}]}>

                         <View style={styles.caixaTituloinstitucional}>
                              <Text style={styles.tituloIndividual}>Menos de 2000 alunos</Text>
                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>1 Prova por dia</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>Horário de estudo personalizado</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>Covênios</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>Dashbord para professor</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/nao.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoCinza}>Horário de estudo personalizado</Text>

                         </View>

                    </View>

                    <View style={[styles.boxIndividual, {borderColor:"#552583"}]}>

                         <View style={styles.caixaTituloinstitucional}>
                              <Text style={styles.tituloIndividual}>Mais de 2000 alunos</Text>
                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>1 Prova por dia</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>Horário de estudo personalizado</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>Covênios</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>Dashbord para professor</Text>

                         </View>

                         <View style={styles.caixaCheck}>
                              <Image
                              source={require('../projetoFoca/image/sim.png')}
                              style={styles.imgPlanos}>
                              </Image>

                              <Text style={styles.descricaoPlanoPreto}>Horário de estudo personalizado</Text>

                         </View>

                    </View>



               </View>
                                   
           </View>

          <View style={styles.footer}>

               <Text style={styles.textoFooter}>Quer saber como o Foca vai te ajudar a alcançar seus objetivos?</Text>

               <TouchableOpacity 
               style={styles.botaoFooter}
               onPress={() =>{navigation.navigate('Login')} }>

                    <Text style={styles.textoBotaoFooter}>Faça Login</Text> 

               </TouchableOpacity>

               <Text style={{fontSize:18, color:"#Fff", fontFamily:'Prompt_600SemiBold',}}>
                    Ainda não tem conta? <Text style={{color:"#FDB927" ,fontWeight:"bold"}} onPress={() =>{navigation.navigate('Cadastrar')} }>Cadastre-se</Text> 
               </Text>
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

     introducao: {
          alignItems:'center',
          justifyContent:'space-around',
          backgroundColor:'white',
          height:700,
          
     },

     tituloIntroducao:{
          fontSize:32,
          fontFamily:'Prompt_600SemiBold',
          width:'90%',
          textAlign:'center',
          color:'#552583',
          marginTop:20,
          textShadowColor:"#552583",
          textShadowOffset: {
               width: 1.5,
               height: 1,
          },
          
          textShadowRadius: 3,
          
         

          /*shadowColor: "#000",
          shadowOffset: {
               width: 3,
               height: 3,
          },
          shadowOpacity: 0.40,
          shadowRadius: 4.65,

          elevation: 10,*/
          
     },

     subTituloIntroducao:{
          fontSize:18,
          width:'80%',
          textAlign:'justify',
          color:"#4F4E4E",
          
          
     },

     imgIntroducao:{
          width:'65%',
          height:'42%',
         
     },

     botaoIntroducao:{
          width:'45%',
          height:'10%',
          alignItems:'center',
          justifyContent:'center',
          backgroundColor: '#552583',
          borderRadius:10,
          marginBottom:20,
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
          fontSize:23,
          fontFamily:'Prompt_600SemiBold',
          
          
     },

     previa: {
          alignItems:'center',
          justifyContent:'space-around',
          backgroundColor:'#fff',
          height:250,
          

     },

     tituloPrevia:{
          fontSize:22,
          fontFamily:'Prompt_600SemiBold',
          width:'90%',
          textAlign:'center',
          color:'#552583',
          marginTop:20,
          
          
     },

     subTituloPrevia:{
          fontSize:16,
          fontFamily:'Prompt_600SemiBold',
          width:'90%',
          textAlign:'center',
          color:'gray',
          
     },

     depoimentos: {
          alignItems:'center',
          justifyContent:'space-around',
          backgroundColor:'#FFF5E0',
          height:600, 

     },

     tituloDepoimentos: {
          fontSize:24,
          
          fontFamily:'Prompt_600SemiBold',
          width:'90%',
          textAlign:'center',
          color:'#552583',
         

     },

     boxDepoimentos:{
          paddingLeft:10,
          backgroundColor:"white",
          justifyContent:"space-around",
          width:'90%',
          height:'42%',
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

     aspasDepoimentos: {
          fontFamily:'Prompt_600SemiBold',
          width:'100%',
          height:'22%',
          fontSize:20,
          color:'black',
          


     },

     descricaoDepoimentos: {
          
          marginTop:20,
          height:"50%",
          textAlign:"justify",
          width:'95%',
          color:"#4F4E4E",
          fontFamily:'Prompt_600SemiBold',

     },

     boxAvatarDepoimentos: {
          
          width:'100%',
          height:'23%',
          flexDirection:"row",
          alignItems:"center",


     },

     imgDepoimento: {
          width:40,
          height:40,

     },

     nomeDepoimentos: {
          marginLeft:10,
          color:"#4F4E4E",

     },

     planos: {
          alignItems:'center',
          justifyContent:'space-around',
          backgroundColor:'#fff',
          height:2200,

     },

     tituloPlanos: {
          fontSize:24,
          fontFamily:'Prompt_600SemiBold',
          width:'90%',
          textAlign:'center',
          color:'#552583',

     },

     blocoPlanos: {
          alignItems:'center',
          justifyContent:'space-between',
          
          width:'100%',    
          height:1000,

     },

     blocoRoxoPlanos: {
          alignItems:'center',
          justifyContent:'space-around',
          backgroundColor:'#FFF5E0',
          width:'100%',    
          height:1100,

     },

     individualPlanos: {
          fontSize:24,
          color:'#FDB927',
          fontFamily:'Prompt_600SemiBold',
          

     },

     boxIndividual: {
          marginTop:10,
          borderColor:"#FDB927",
          borderWidth:1,
          borderRadius:10,
          backgroundColor:"white",
          justifyContent:"space-around",
          width:240,
          height:300,
          
          shadowColor: "#000",
          shadowOffset: {
               width: 4,
               height: 3,
          },
          shadowOpacity: 0.40,
          shadowRadius: 4.65,

          elevation: 10,


     },

     caixaTituloIndividual: {
          height:50,
          width:"100%",
          backgroundColor:"#FDB927",
          alignItems:'center',
          justifyContent:'center',
          borderTopLeftRadius:10,
          borderTopRightRadius:10,

     },

     tituloIndividual: {
          fontSize:20,
          color: "#fff",
          fontFamily:'Prompt_600SemiBold',

     },

     caixaCheck: {
          height:50,
          width:"100%",
          flexDirection:"row",
          justifyContent:"space-around",  
          alignItems:'center',
          borderTopColor:"gray",
          borderTopWidth:1,   

     },

     imgPlanos: {
          width:23,
          height:23,

     },

     descricaoPlanoPreto: {
          
          width:"80%",
          fontSize:15,
          fontFamily:'Prompt_600SemiBold',
          textAlign:'center',
          justifyContent:'center'

     },

     descricaoPlanoCinza: {
          
          width:"80%",
          fontSize:15,
          fontFamily:'Prompt_600SemiBold',
          textAlign:'center',
          justifyContent:'center',
          color:"#B6B6B6"

     },

     institucionalPlanos: {
          marginTop:10,
          fontSize:24,
          color:'#552583',
          fontFamily:'Prompt_600SemiBold',

     },

     caixaTituloinstitucional: {
          
          height:50,
          width:"100%",
          backgroundColor:"#552583",
          alignItems:'center',
          justifyContent:'center',
          borderTopLeftRadius:10,
          borderTopRightRadius:10,

     },

     footer: {
          
          height:250,
          width:"100%",
          backgroundColor:"#552583",
          alignItems:'center',
          justifyContent:'space-around',

     },

     textoFooter: {
          color: "#fff",
          width:"95%",
          textAlign:'center',
          fontSize:20,
          fontFamily:'Prompt_600SemiBold',

     },

     botaoFooter:{

          width:'40%',
          height:'25%',
          alignItems:'center',
          justifyContent:'center',
          backgroundColor: '#FDB927',
          borderRadius:10,
          marginBottom:20,
          shadowColor: "#000",
          shadowOffset: {
               width: 3,
               height: 3,
          },
          shadowOpacity: 0.40,
          shadowRadius: 4.65,

          elevation: 10,

     },

     textoBotaoFooter:{
          color:"#552583",
          fontSize:20,
          fontFamily:'Prompt_600SemiBold',
          
     },
})