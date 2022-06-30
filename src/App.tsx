import React from 'react';
import { Provider } from '~store/store';
import { ThemeProvider } from '~theme/theme';
import { Box, OverlayLoader, Text } from '~components';
import APIProvider from '~api/APIProvider';

const App = () => {
  return (
    <APIProvider>
      <ThemeProvider>
        <Provider>
          <Box>
            <Text>Home</Text>
          </Box>
          <OverlayLoader />
        </Provider>
      </ThemeProvider>
    </APIProvider>
  );
};

export default App;
