import React from 'react';
import { AuthRoutes } from './auth.routes';
import { PageProps } from '../global/interface/page.interface';

export const Routes: React.FunctionComponent<PageProps> = ({
  onLayoutRootView,
}) => {
  return <AuthRoutes onLayoutRootView={onLayoutRootView} />;
};
