import React, { useEffect, useState, useContext } from 'react';
import {
  StyleSheet,
  TextInput,
 
} from 'react-native';

import * as Font from '../Utils/Typography';






const MyTextInput = ({
    value,
    style = {},
    placeholder,
    onChangeText,
    keyboardType,
    numberOfLines,
    multiline,
    secureTextEntry,
    defaultValue,
  }) => {
    return (
      <TextInput
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        // placeholderTextColor={Colors.T_SECONDARY}
        style={[style, styles.MyTextInput]}
        style={[style, styles.MyTextInput]}
        keyboardType={keyboardType}
        numberOfLines={numberOfLines}
        multiline={multiline}
        defaultValue={defaultValue}
  
      />
  
    );
  };


  
export {
   
    MyTextInput,
  
  };




  const styles = StyleSheet.create({

    MyTextInput: {
      fontSize: 17,
      borderRadius:8,
      borderWidth:1,
      borderColor:'black',
    //   fontFamily: Font.FF_REGULAR,
      width: '100%',
      color: "black",
      // maxLength: "20"
      height:50,
      paddingLeft:15,
      fontFamily: Font.FF_LATO_BOLD,
      fontWeight:'500',
      fontStyle:'normal',
  
    },
  

    
  
  });