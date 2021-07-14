import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
          <View style={styles.container}>
              <SafeAreaView style={styles.androidSafeAreaView}/>
              <ImageBackground source={require('../assets/bg_image.png')} style={{
                  flex:1,
                  resizeMode:"cover"
                  }}>
         <View style={styles.TitleBar}>
          <Text style={styles.TitleText}>
               ISS Tracker App
           </Text> 
           </View>
           <TouchableOpacity style={styles.routeCard}onPress={()=>{
               this.props.navigation.navigate('IssLocation')
           }}>
               <Text style={styles.routeText}>
                   ISS Location
               </Text>
               <Text style={styles.knowMore}>
                   {'Know More--->'}
               </Text>
               <Text style={styles.bgDigit}>
                   1.
               </Text>
               <Image source={require('../assets/iss_icon.png')} style={
                 styles.iconImage
                  }/>
           </TouchableOpacity>
           <TouchableOpacity style={styles.routeCard}onPress={()=>{
               this.props.navigation.navigate('Meteor')
           }}>
               <Text style={styles.routeText}>
                   Meteor Location
               </Text>
               <Text style={styles.knowMore}>
                   {'Know More--->'}
               </Text>
               <Text style={styles.bgDigit}>
                   2.
               </Text>
               <Image source={require('../assets/meteor_icon.png')} style={
                 styles.iconImage
                  }/>
           </TouchableOpacity>
           </ImageBackground>
           </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{flex:1},
    TitleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center'
    },
    TitleText:{
        fontSize:40,
    fontWeight:"bold",
color:'black'},
androidSafeAreaView:{marginTop:Platform.OS==='android'?StatusBar.currentHeight:0},
routeCard:{
    flex:0.25,
    marginLeft:50,
    marginRight:50,
    marginTop:50,
    borderRadius:30,
    backgroundColor:'white'
},
RouteText:{
    fontSize:35,
fontWeight:"bold",
color:'black',
paddingLeft:30,
marginTop:75,
},
knowMore:{
    fontSize:15,
    paddingLeft:30,
    color:'red'},
    bgDigit:{
        fontSize:150,
        position:'absolute',
        color:'blue',
        right:20,
        bottom:-15,
        zIndex:-1
    },
    iconImage:{
        position:'absolute',
height:200,
width:200,
resizeMode:'contain',
right:20,
top:-80
    }
})