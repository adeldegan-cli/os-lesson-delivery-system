import React, { useContext, useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import BigButton from '../components/BigButton';
import MenuBackButton from '../components/MenuBackButton';
import MenuInput from '../components/MenuInput';
import { colors } from '../config/colors';
import { AuthContext } from '../providers/AuthProvider';
import { StyleSheetContext } from '../providers/StyleSheetProvider';

export const LoginScreen = ({ navigation }) => {
  const styles = useContext(StyleSheetContext);
  const auth = useContext(AuthContext);
  const { signInWithEmail } = auth;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const formVerify = () => {
    if (email && password) {
      const returnVal = {
        email,
        password
      };
      setEmailError(false);
      setPasswordError(false);
      return returnVal;
    } else {
      Alert.alert('Missing a required field');
      return null;
    }
  };

  const handleSubmitLogin = async () => {
    if (!email) {
      setEmailError(true);
      Alert.alert('Email is required');
      return;
    }

    if (!password) {
      setPasswordError(true);
      Alert.alert('Password is required');
      return;
    }

    const verified = formVerify();
    if (verified) {
      const status = await signInWithEmail(verified.email, verified.password);
      if (status === 'SignedIn') {
        // Handle successful sign-in
      } else {
        Alert.alert(status);
      }
    }
  };

  return (
    <View style={localStyles.viewStyle}>
      <View>
        <MenuBackButton navigation={navigation} />
        <Image
          style={localStyles.logoStyle}
          source={require('../assets/logo_placeholder-1.png')}
        ></Image>
        <Text style={styles.pageTitle}>LOG IN</Text>
      </View>
      <View style={{ paddingTop: 10, paddingBottom: 30, alignItems: 'center' }}>
        <MenuInput
          placeholder='Email'
          symbol='account-outline'
          hidden='false'
          setter={setEmail}
          autoCapitalize='none'
          autoCompleteType='email'
          textContentType='emailAddress'
          keyboardType='email-address'
          error={emailError}
        />
        <MenuInput
          placeholder='Password'
          symbol='lock-outline'
          hidden='true'
          setter={setPassword}
          right
          error={passwordError}
        />
      </View>
      <Pressable
        style={{ display: 'flex', alignSelf: 'flex-start', marginLeft: 53 }}
        onPress={() => {
          Alert.alert('Forgot Password');
        }}
      >
        <Text style={localStyles.forgotPassword}>I Forget My Password</Text>
      </Pressable>
      <BigButton
        buttonColor={colors.green}
        textColor={colors.black}
        content={'next'}
        onPress={handleSubmitLogin}
        uppercase={true}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  logoStyle: {
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: -80
  },
  viewStyle: {
    display: 'flex',
    paddingTop: 50,
    paddingHorizontal: 10,
    height: '100%'
  },
  forgotPassword: {
    fontSize: 12,
    fontFamily: 'Poppins',
    color: colors.lightBlue,
    marginBottom: 30,
    letterSpacing: 1,
    textTransform: 'capitalize'
  }
});
