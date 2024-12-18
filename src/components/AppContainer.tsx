import React from 'react';
import { $FlexboxLayout, $Frame, $Page } from 'react-nativescript';
import { HomeScreen } from '../screens/HomeScreen';

export function AppContainer() {
  return (
    <$Frame>
      <$Page>
        <$FlexboxLayout flexDirection="column">
          <HomeScreen />
        </$FlexboxLayout>
      </$Page>
    </$Frame>
  );
}