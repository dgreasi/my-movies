import React, { useCallback } from 'react';
import { BasicLoader, Box, Text } from '~components';
import { useSearch } from '~api/search/useSearch';
import { FlatList, StyleSheet } from 'react-native';
import EntityCard from '~screens/Home/components/EntityCard';
import { ISearch } from '~api/search/searchResponses';
import theme from '~theme/theme';
import ErrorEmpty from '~components/molecules/ErrorEmpty';
import { useSelector } from 'react-redux';
import { selectHidden } from '~store/hidden/hiddenSlice';

interface IRender {
  item: ISearch;
  index: number;
}

interface Props {
  search: string;
}

const EntityList = ({ search }: Props) => {
  const hidden = useSelector(selectHidden);
  const { data, isLoading, isError } = useSearch(search);

  const keyExtractor = useCallback((item: ISearch) => item.id, []);

  const renderEntities = useCallback(
    ({ item, index }: IRender) => {
      if (hidden[item.id]) return null;
      return (
        <Box marginBottom="m">
          <EntityCard entity={item} index={index} inSearch />
        </Box>
      );
    },
    [hidden],
  );

  if (isLoading) return <BasicLoader />;

  if (isError) {
    return (
      <Box flex={1} marginTop="xl">
        <ErrorEmpty />
      </Box>
    );
  }

  return (
    <FlatList
      ListEmptyComponent={
        <Box alignItems="center" justifyContent="center" height="100%">
          <Text>No results</Text>
        </Box>
      }
      onEndReachedThreshold={0.5}
      data={data}
      renderItem={renderEntities}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.container}
      columnWrapperStyle={undefined}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: theme.spacing.xxl + 4,
  },
  separator: {
    height: theme.spacing.m,
  },
  footerLoading: {
    marginTop: theme.spacing.l,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EntityList;
