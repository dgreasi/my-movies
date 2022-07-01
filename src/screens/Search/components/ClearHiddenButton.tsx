import React from 'react';
import { Box, Text } from '~components';
import { StyleSheet, TouchableOpacity } from 'react-native';
import theme from '~theme/theme';
import { useDispatch } from 'react-redux';
import { clearHiddenAsync } from '~store/hidden/hiddenSlice';

const ClearHiddenButton = () => {
  const dispatch = useDispatch();

  const resetHidden = () => {
    dispatch(clearHiddenAsync());
  };

  return (
    <Box style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={resetHidden}>
        <Text variant="headline" color="white">
          Reset Hidden
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 14,
  },
  button: {
    height: 48,
    borderRadius: 12,
    backgroundColor: theme.colors.buttonMain,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.s,
  },
});

export default ClearHiddenButton;
