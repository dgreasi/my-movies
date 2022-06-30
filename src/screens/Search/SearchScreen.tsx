import React, { useEffect, useState } from 'react';
import { SafeAreaView } from '~components';
import { StackNavigationProps } from '~navigation/navigation.interface';
import { MainRoutes } from '~navigation/Main/mainTypes';
import { Screen } from '~components/layout/Screen';
import { isIOS } from '~utils/deviceInfo';
import { useMount } from '~hooks';
import SearchPageHeader from '~screens/Search/components/SearchPageHeader';
import SearchResults from '~screens/Search/components/SearchResults';
import { Keyboard } from 'react-native';
import SearchRecents from '~screens/Search/components/SearchRecents';

const SearchScreen = ({ navigation }: StackNavigationProps<MainRoutes, 'Search'>) => {
  const ready = useMount(navigation);
  const [renderSection, setRenderSection] = useState<'recents' | 'results'>('recents');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchFocused, setSearchFocused] = useState<boolean>(false);

  useEffect(() => {
    if (!ready) return;
    else if (searchQuery && !searchFocused) setRenderSection('results');
    else return setRenderSection('recents');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, searchFocused]);

  const onSubmit = (value: string) => {
    setSearchQuery(value);
    Keyboard.dismiss();
  };

  return (
    <Screen full>
      <SafeAreaView flex={1} paddingTop={isIOS ? undefined : 'm'}>
        <SearchPageHeader
          hideShadow={renderSection === 'results'}
          setSearchQuery={setSearchQuery}
          setSearchFocused={setSearchFocused}
          searchQuery={searchQuery}
        />
        {ready && (
          <>
            {renderSection === 'recents' && <SearchRecents onSubmit={onSubmit} />}
            {renderSection === 'results' && <SearchResults searchQuery={searchQuery} />}
          </>
        )}
      </SafeAreaView>
    </Screen>
  );
};

export default SearchScreen;
