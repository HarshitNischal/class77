
import React,{ Component } from "react"
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableOpacity, ImageBackground, Image } from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import axios from 'axios';

export default class IssLoacationScreen extends Component{
    constructor(){
        super()
        this.state={location:{}}
    }
    getIssLocation=()=>{
     axios
     .get('https://api.wheretheiss.at/v1/satellites/25544')  
      .then(response=>{
          this.setState({
              location:response.data
          })
          .catch(error=>{
              alert(error.message)
          })
      })
    }
    componentDidMount(){
        this.getIssLocation()
        try{setInterval(async()=>{
            this.getIssLocation()
        },5000)}
        catch(e){console.log(e)}
    }
    render(){
        if(Object.keys(this.state.location).length===0){
        return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>
               Loading........;-;
            </Text>
        </View>
        )
        }
        else{
            return(
                <View style={styles.container}>
                   
                    
                       <Text style={styles.routeText}>
                   Latitude:{this.state.location.latitude}
               </Text>
               <Text style={styles.routeText}>
               Longitude:{this.state.location.longitude}
               </Text>
               <Text style={styles.routeText}>
               Altitude(KM):{this.state.location.altitude}
               </Text>
               <Text style={styles.routeText}>
               Velocity(KM/hr):{this.state.location.velocity}
               </Text>
                    
                
                 </View>)


        }
    }
}
const styles=StyleSheet.create({
    container:{flex:1},
  
RouteText:{
    fontSize:15,
fontWeight:"bold",
color:'black',
},

})