//import { StatusBar } from "expo-status-bar";
import React,{Component} from 'react';
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { change_count } from "./src/actions/counts";

// import { connect } from "react-redux";

 class App extends Component{

  decreamentcount(){
    let {count, actions} = this.props;
    count --;
    this.props.COUNTER_CHANGE(count)
    
  }

  increamentcount(){
    let {count, actions} = this.props;
    count ++;
    this.props.COUNTER_CHANGE(count)
  }


  

  
  
  render(){
    
    const {count} = this.props;
    return(
      <View style={{flex:1, backgroundColor:'#fff', justifyContent:'center', alignItems:'center'}}>
        <Text>{count}</Text>
        <Button
        onPress={()=>this.increamentcount()}
        title='increament'></Button>

        <Button title='Decreament'
        onPress={()=>this.decreamentcount()}></Button>
        <StatusBar style='auto'></StatusBar>
      </View>
    )
  }
}

  const mapStateToProps = (state) =>{
    count: state.counter.count
  }

  const mapDispatchToProps = (dispatch) =>{
    return{
      CounterChange: (count) => dispatch(change_count(count))
    }
  
  }



export default connect(mapStateToProps, mapDispatchToProps)
