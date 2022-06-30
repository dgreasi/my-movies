import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import NavigationContainer from '~navigation/NavigationContainer';
import { MainNavigator } from '~navigation/Main/MainNavigator';
import { ToastMessage } from '~components';

const RootNavigator = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const bootstrapAsync = async () => {
      // Add init actions e.g:
      // 1) Load user
      // 2) Setup language
      // 3) Check for update

      setIsChecked(true);
    };

    bootstrapAsync();
  }, [dispatch]);

  if (!isChecked) return null;

  // Add toast message
  return (
    <NavigationContainer>
      <MainNavigator />
      <ToastMessage />
    </NavigationContainer>
  );
};

export default RootNavigator;
