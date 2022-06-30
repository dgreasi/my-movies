import React, { memo } from 'react';
import { CARD_WIDTH_FULL, IMAGE_IN_LIST } from '~config/constants';
import theme from '~theme/theme';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Animated, { FadeIn, Layout } from 'react-native-reanimated';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ISearch } from '~api/search/searchResponses';
import { Box, ImageWithFallback, Text } from '~components';
import { MAIN_ROUTES } from '~navigation/Main/mainTypes';

interface Props {
  entity: ISearch;
  index: number;
}

const EntityCard = ({ entity, index }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const description = entity?.description || entity?.plot || '';

  const onPressCard = () => {
    navigation.navigate(MAIN_ROUTES.ENTITY, { id: entity.id });
  };

  return (
    <TouchableOpacity onPress={onPressCard} activeOpacity={0.5} style={styles.container}>
      <Animated.View entering={FadeIn.delay(100 * index)} layout={Layout}>
        <Box style={styles.container1}>
          <ImageWithFallback source={{ uri: entity.image }} styles={styles.imageContainers} />
          <Box padding="m" width="80%">
            <Text variant="oswald" numberOfLines={2}>
              {entity.title}
            </Text>
            {description?.length > 0 && (
              <Text color="primary900" numberOfLines={3} paddingTop="s">
                {description}
              </Text>
            )}
          </Box>
        </Box>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH_FULL,
    borderRadius: theme.borderRadii.ml,
    backgroundColor: theme.colors.white,
    padding: theme.spacing.sm,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageContainers: {
    width: IMAGE_IN_LIST,
    height: IMAGE_IN_LIST,
    borderRadius: theme.borderRadii.ml,
  },
  authorName: {
    padding: theme.spacing.m,
  },
});

export default memo(EntityCard);
