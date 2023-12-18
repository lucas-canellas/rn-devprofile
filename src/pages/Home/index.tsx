import React from 'react';
import * as S from './styles';
import avatarDefault from './../../assets/avatar01.jpeg';

export const Home: React.FunctionComponent = () => {
  return (
    <S.Container>
      <S.Header>
        <S.UserWrapper>
          <S.UserInfo>
            <S.UserAvatarButton onPress={() => {}}>
              <S.UserAvatar source={avatarDefault} />
            </S.UserAvatarButton>
            <S.UserInfoDetail>
              <S.UserGreeting>Olá, </S.UserGreeting>
              <S.UserName>Lucas</S.UserName>
            </S.UserInfoDetail>
          </S.UserInfo>
          <S.Icon name="power" />
        </S.UserWrapper>
      </S.Header>
    </S.Container>
  );
};
