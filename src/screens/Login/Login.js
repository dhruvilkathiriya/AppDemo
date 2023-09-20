import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {fontSize, hp, wp} from '../../helper/constants';
import {showMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/native';
import {icons} from '../../helper/imageConstants';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    const Username = 'Test';
    const Password = '1234';

    if (username === Username && password === Password) {
      showMessage({
        message: 'Login successful',
        type: 'success',
      });
      navigation.navigate('ProductListScreen');
    } else {
      showMessage({
        message: 'Login failed',
        type: 'warning',
      });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text
        style={{
          fontSize: fontSize(30),
          color: 'green',
          fontWeight: '700',
          marginBottom: hp(5),
        }}>
        LOGIN
      </Text>
      <TextInput
        style={{
          width: '90%',
          height: hp(5),
          backgroundColor: 'lightgray',
          borderRadius: 5,
          paddingLeft: wp(2),
          marginBottom: hp(2),
          marginHorizontal: wp(10),
        }}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={{
          width: '90%',
          height: hp(5),
          backgroundColor: 'lightgray',
          borderRadius: 5,
          paddingLeft: wp(2),
          marginBottom: hp(2),
          marginHorizontal: wp(10),
        }}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        onPress={handleLogin}
        style={{
          width: '80%',
          borderRadius: 10,
          height: hp(6),
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: hp(2),
          marginBottom: hp(2),
          backgroundColor: '#43632E',
        }}>
        <Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <Text>username: Test</Text>
      <Text>password: 1234</Text>
    </View>
  );
};

export default LoginScreen;
