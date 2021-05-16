import React, { useState, createContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import * as Url from '../Utils/Urls';

export const MyContext = createContext();

export const MyProvider = props => {
  const [token, setToken] = useState({});
  const [companyName, setCompanyName] = useState('');
  


 
  return (
    <MyContext.Provider
      value={{
        // projectid: [companyName, setCompanyName],
    
        // clearvlaues: clearVlaues,
       
      }}>
      {props.children}
    </MyContext.Provider>
  );
};
