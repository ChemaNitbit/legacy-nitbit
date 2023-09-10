import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {NbTabBar} from './NbTabBar/index';
import {NbHeader} from './NbHeader';
import {NbDefaultHeader} from './NbDefaultHeader';
import {NbContainer} from './NbContainer';

const LayoutComponent = ({
  children,
  spaced = false,
}: {
  children: React.ReactNode;
  spaced?: boolean;
}) => {
  const Content = useMemo(
    () =>
      spaced ? (
        <NbContainer>{children}</NbContainer>
      ) : (
        <View style={styles.container}>{children}</View>
      ),
    [spaced, children],
  );

  return Content;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

LayoutComponent.NbHeader = NbHeader;
LayoutComponent.NbTabBar = NbTabBar;
LayoutComponent.NbDefaultHeader = NbDefaultHeader;
LayoutComponent.NbContainer = NbContainer;

export const Layout = LayoutComponent;
