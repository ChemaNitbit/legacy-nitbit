import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
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
  const theme = useTheme();
  const Content = useMemo(
    () =>
      spaced ? (
        <NbContainer>{children}</NbContainer>
      ) : (
        <View
          style={{
            ...styles.container,
            backgroundColor: theme.colors.background,
          }}>
          {children}
        </View>
      ),
    [spaced, children, theme.colors.background],
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
