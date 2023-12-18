import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { SignIn } from '../pages/SignIn';
import { PageProps } from '../global/interface/page.interface';
import { SignUp } from '../pages/SignUp';

const Auth = createNativeStackNavigator();
export const AuthRoutes: React.FunctionComponent<PageProps> = ({
  onLayoutRootView,
}) => {
  return (
    <Auth.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name="SignIn">
        {props => <SignIn {...props} onLayoutRootView={onLayoutRootView} />}
      </Auth.Screen>
      <Auth.Screen name="SignUp">
        {props => <SignUp {...props} onLayoutRootView={onLayoutRootView} />}
      </Auth.Screen>
    </Auth.Navigator>
  );
};
