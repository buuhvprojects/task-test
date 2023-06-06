import React, { useState } from 'react';

import {
  useNavigation
} from '@react-navigation/native';
import { Text } from 'react-native';
import {
  Container,
  LoginButton,
  Main,
  Title,
  UserInput,
} from './LoginScreenStyles';

interface IUser {
  username: string;
  password: string;
}


export default function LoginScreen() {
  const [user, setUser] = useState<IUser>({
    username: '',
    password: '',
  });

  const navigation = useNavigation();

  const buttonDisabled = () => {
    if (user.username.length === 0 || user.password.length === 0) {
      return true;
    }
    return false;
  };

  return (
    <Main>
      <Title>Faça seu login</Title>
      <Container>
        <UserInput
          placeholder="Digite Seu Nome De Usuario"
          placeholderTextColor="white"
          value={user.username}
          onChangeText={usernameText =>
            setUser({...user, username: usernameText})
          }
          maxLength={30}
        />
        <UserInput
          placeholder="Digite Sua Senha"
          placeholderTextColor="white"
          keyboardType="numeric"
          value={user.password}
          onChangeText={passwordText =>
            setUser({...user, password: passwordText})
          }
        />
        <LoginButton
          activeOpacity={1}
          disabled={buttonDisabled()}
          onPress={() => navigation.navigate('List' as never, { name: user.username } as never)}>
          <Text>Login</Text>
        </LoginButton>
      </Container>
    </Main>
  );
}
