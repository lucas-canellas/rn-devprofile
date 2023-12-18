import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import * as S from './styles';
import { PageProps } from '../../global/interface/page.interface';
import logo from './../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProps {
  goBack: () => void;
}

export const SignUp: React.FunctionComponent<PageProps> = ({
  onLayoutRootView,
}) => {
  const { goBack } = useNavigation<ScreenNavigationProps>();
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
            <S.Title>Crie sua conta</S.Title>
            <Input placeholder="Nome completo" />
            <Input placeholder="Email" />
            <Input placeholder="Senha" />

            <Button title="Criar conta" />
          </S.Content>
        </S.Container>
      </ScrollView>
      <S.BackToSignIn onPress={() => goBack()}>
        <S.Icon name="arrow-left" />
        <S.BackToSignInTitle>Voltar para logon</S.BackToSignInTitle>
      </S.BackToSignIn>
    </KeyboardAvoidingView>
  );
};
