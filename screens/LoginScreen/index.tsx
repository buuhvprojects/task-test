import React, { useMemo, useState } from 'react';

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

  const onLogin = () => navigation.navigate('List' as never, { name: user.username } as never);

  const buttonDisabled = useMemo(() => {
    if (user.username.length === 0 || user.password.length === 0) {
      return true;
    }
    return false;
  }, [user]);
  const onChangeForm = (key: keyof IUser, value: string) => {
    setUser({...user, [key]: value});
  }

  return (
    <Main>
      <Title>Faça seu login</Title>
      <Container>
        <UserInput
          placeholder="Digite Seu Nome De Usuario"
          placeholderTextColor="white"
          value={user.username}
          onChangeText={usernameText => onChangeForm('username', usernameText)}
          maxLength={30}
        />
        <UserInput
          placeholder="Digite Sua Senha"
          placeholderTextColor="white"
          keyboardType="numeric"
          value={user.password}
          onChangeText={passwordText => onChangeForm('password', passwordText)}
        />
        <LoginButton
          activeOpacity={1}
          disabled={buttonDisabled}
          onPress={onLogin}>
          <Text>Login</Text>
        </LoginButton>
      </Container>
    </Main>
  );
}
