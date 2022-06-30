import React from 'react';
import { Box, SearchButton, Text } from '~components';
import { Dimensions, StyleSheet } from 'react-native';
import theme from '~theme/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { useHeaderHeight } from '~hooks';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack/src/types';
import { MAIN_ROUTES } from '~navigation/Main/mainTypes';

const { width } = Dimensions.get('screen');

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase>;
  options: NativeStackNavigationOptions;
  noShadow?: boolean;
}

export const HomeHeader = ({ navigation, noShadow, options }: Props) => {
  const { height } = useHeaderHeight();

  const goToSearch = () => {
    navigation.navigate(MAIN_ROUTES.SEARCH);
  };

  return (
    <Box borderBottomColor={noShadow ? 'background' : 'shadow'} style={[styles.container, { height: height + 5 }]}>
      <Box flexDirection="row" alignItems="center" justifyContent="space-between" width="100%" height={40}>
        {options?.title && (
          <Box alignItems="center" justifyContent="center" width="100%">
            <Text variant="headline">{options?.title}</Text>
          </Box>
        )}
        {!options?.title && (
          <Box width={width * 0.92}>
            <SearchButton onPress={goToSearch} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
  btnCalendar: {
    alignItems: 'flex-end',
  },
  btnNotifications: {
    alignItems: 'flex-start',
  },
  container: {
    paddingBottom: theme.spacing.s,
    paddingHorizontal: theme.spacing.m,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
  },
  notificationDot: {
    position: 'absolute',
    top: 6,
    right: 14,
  },
});

export default HomeHeader;
