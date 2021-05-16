import React, { Component, useEffect } from 'react';
import Route from './src/Navigations/Route';
import { View, Text } from 'react-native';
import { MyProvider } from './src/Store/Store';

const App = () => {
  return (
    <MyProvider>
      <Route />
    </MyProvider>
  );
};

export default App;
