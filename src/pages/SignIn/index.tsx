import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Input } from '../../components/Form/Input';
import * as S from './styles';
import { Button } from '../../components/Form/Button';
import { PageProps } from '../../global/interface/page.interface';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProps {
  navigate: (screen: string) => void;
}

export const SignIn: React.FunctionComponent<PageProps> = ({
  onLayoutRootView,
}) => {
  const navigation = useNavigation<ScreenNavigationProps>();
  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
        onLayout={onLayoutRootView}
      >
        <S.Container>
          <S.Content>
            <S.Logo source={logo} />
            <S.Title>Faça seu logon</S.Title>
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <Button title="Entrar" />
            <S.ForgotPasswordButton>
              <S.ForgotPasswordTitle>Esqueci minha senha</S.ForgotPasswordTitle>
            </S.ForgotPasswordButton>
          </S.Content>
        </S.Container>
      </ScrollView>
      <S.CreateAccount onPress={() => navigation.navigate('SignUp')}>
        <S.Icon name="log-in" />
        <S.CreateAccountTitle>Criar uma conta</S.CreateAccountTitle>
      </S.CreateAccount>
    </KeyboardAvoidingView>
  );
};
