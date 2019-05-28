import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
var { FBLogin, FBLoginManager } = require('react-native-facebook-login');


export default class App extends Component {
  
  render() {
    var _this = this;
    var user = this.state.user;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FBLogin 
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        permissions={["email"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={function(data){
          console.log("Logged in!");
          console.log(data);
          _this.setState({ user : data.credentials });
        }}
        onLogout={function(){
          console.log("Logged out.");
          _this.setState({ user : null });
        }}
        onLoginFound={function(data){
          console.log("Existing login found.");
          console.log(data);
          _this.setState({ user : data.credentials });
        }}
        onLoginNotFound={function(){
          console.log("No user logged in.");
          _this.setState({ user : null });
        }}
        onError={function(data){
          console.log("ERROR");
          console.log(data);
        }}
        onCancel={function(){
          console.log("User cancelled.");
        }}
        onPermissionsMissing={function(data){
          console.log("Check permissions!");
          console.log(data);
        }}
      />

      <Text>{ user ? user.token : "N/A" }</Text>
      </View>
    );
  }
};