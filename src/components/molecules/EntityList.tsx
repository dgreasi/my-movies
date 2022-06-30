import React, { useCallback, useMemo } from 'react';
import { BasicLoader, Box, Text } from '~components';
import { useSearch } from '~api/search/useSearch';
import { FlatList, StyleSheet } from 'react-native';
import EntityCard from '~screens/Home/components/EntityCard';
import { ISearch } from '~api/search/searchResponses';
import theme from '~theme/theme';
import ErrorEmpty from '~components/molecules/ErrorEmpty';

interface IRender {
  item: ISearch;
  index: number;
}

interface Props {
  search: string;
}

const EntityList = ({ search }: Props) => {
  const { data, isLoading, isError } = useSearch(search);

  const Separator = () => useMemo(() => <Box style={styles.separator} />, []);

  const keyExtractor = useCallback((item: ISearch) => item.id, []);

  const renderEntities = useCallback(({ item, index }: IRender) => {
    return <EntityCard entity={item} index={index} />;
  }, []);

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
      ItemSeparatorComponent={Separator}
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
    paddingBottom: theme.spacing.m + 4,
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
