import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './src/reducers/store';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <MainNavigator />
        <FlashMessage position="top" />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
