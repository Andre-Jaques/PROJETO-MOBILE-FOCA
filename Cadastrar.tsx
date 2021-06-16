import React, {useState} from 'react';
import { Image, Platform, View, StyleSheet, TextInput,Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker,  CheckBox} from 'react-native';




export default function Cadastrar({navigation} : {navigation: any,}) {
     const [selectedValue, setSelectedValue] = useState("java");
     const [isSelected, setSelection] = useState(false);

  return (
     

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerprincipal}>

       <View style={styles.menu} >

          <Ionicons name="arrow-back" size={30} color="#552583" onPress={() =>{navigation.navigate('Login')} }/>
          
          <Ionicons name="ios-menu" size={30} color="#552583" /> 

       </View>

       

       <ScrollView style={{ backgroundColor:'#E2F4FF', }} >

               <View style={styles.formCadastrar}>
                    <Text style={styles.tituloCadastrar}>Cadastre-se agora</Text>

               
                    <TextInput
                         style={styles.input}
                         placeholder='Nome' 
                    />

                    <TextInput
                         style={styles.input}
                         placeholder='Sobrenome'   
                    />

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

                    <TextInput
                         style={styles.input}
                         placeholder='Repetir senha'
                         secureTextEntry   
                    />

                    <Picker
                         selectedValue={selectedValue}
                         style={styles.select}
                         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                         >
                         <Picker.Item label="Selecione" value="" />
                         <Picker.Item label="Estudante" value="Estudante" />
                         <Picker.Item label="Professor" value="Professor" />
                    </Picker>

                    <View style={styles.termo}>
                         <CheckBox
                         value={isSelected}
                         onValueChange={setSelection}
                         
                         />

                         <Text style={styles.texto}>Eu concordo com os <Text style={{color:"#552583"}} onPress={() =>{navigation.navigate('Cadastrar')} }>termos</Text></Text>
                    </View>

                    <TouchableOpacity 
                    style={styles.botaoCadastrar}
                    onPress={() =>{navigation.navigate('Login')} }>

                         <Text style={styles.textoBotao}>Redefinir</Text> 

                    </TouchableOpacity>

                    <Text style={styles.texto}>Já é cadastrado? <Text style={{color:"#552583"}} onPress={() =>{navigation.navigate('Login')} }>Login</Text></Text>

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
          backgroundColor:'white',
          height:50,
          flexDirection:"row",
          alignItems:'center',
          padding:10,
          justifyContent:"space-between"
          
     },

     

     formCadastrar:{

          alignItems:'center',
          justifyContent:'space-around',
          height:600,
          backgroundColor:'white',

     },

     tituloCadastrar:{
          width:"80%",
          height:"15%",
          textAlign:'center',
          fontSize:30,
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

     select: {
          width: "80%",
          height: 40,
          backgroundColor: 'white',
          fontFamily:'Prompt_600SemiBold',
          borderColor: "#552583",
          borderWidth:2,
          
          color:"#552583",
     },

     termo:{
          flexDirection:'row',
          alignItems: 'center',
          width: "80%",
     },

     botaoCadastrar:{
          width:'33%',
          height:'10%',
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

     texto:{
          fontSize:17,
          fontFamily:'Prompt_600SemiBold',
          width:'95%',
          textAlign:'center',
     },

     
}) 
