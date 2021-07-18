import React,{ Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableOpacity, ImageBackground, Image } from 'react-native';
import axios from 'axios';

export default class MeteorScreen extends Component{
    constructor(){
        super()
        this.state={meteors:{}}
    }
    getMeteors=()=>{
    //retriving the data from api key generated from nasa studio
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=pO2Porof8xO4eKvX2sMLQwDa4qA0dbPBGWWkXWdr')  
     .then(response=>{
         this.setState({
             meteors:response.data.near_earth_object
         })
         .catch(error=>{
             alert(error.message)
         })
     })
    }
    componentDidMount(){
        this.getMeteors()
    }
    render(){
     //object.keys method check if any key is there in a state or not, its checks the key name
        if(Object.keys(this.state.meteors).length===0){
                return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text>
                       Loading........;-;
                    </Text>
                </View>
                )
                }
                else{
               //meteor_arr contained all the erray of objects on a particular meteor date with the map function by iterating over all the keys of object(dates of next 7 days)   
                        var meteor_arr=Object.keys(this.state.meteors).map(meteor_date=>{
                            return this.state.meteors[meteor_date]
                        })
                        //concatinating all errays inside meteor_arr into another master erray with the concat . apply funtion 
                        var meteors=[].concat.apply([],meteor_arr)
                        meteors.forEach(function(element){
                            var diameter=(element.estimated_diameter.kilometers.estimated_diameter_min+element.estimated_diameter.kilometers.estimated_diameter_max)/2
                            var threatScore=(diameter/element.close_approach_data[0].miss_distance.kilometers)*1000000000
                            element.threat_score=threatScore

                        })
                         }
    }}

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

RouteText:{
    fontSize:15,
fontWeight:"bold",
color:'black',
},

   map:{width:'100%',hieght:'100%'}
})