import React, { useEffect, useState } from 'react';
import { Image, ImageResizeMode, ImageStyle, ImageURISource, StyleProp } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultPhoto = require('../../../assets/default.png');

interface Props {
  styles: StyleProp<ImageStyle>;
  resizeMode?: ImageResizeMode;
  source: ImageURISource;
  fallbackImg?: any;
  fallbackStyle?: StyleProp<ImageStyle>;
  testID?: string;
}

const ImageWithFallback = ({ styles, source, resizeMode, fallbackImg, fallbackStyle, testID }: Props) => {
  const fallback = fallbackImg || defaultPhoto;
  const [imgExists, setImgExists] = useState<boolean>(true);

  useEffect(() => {
    if (!source?.uri) {
      setImgExists(false);
    }
  }, [source]);

  const onImgError = () => {
    setImgExists(false);
  };

  return (
    <Image
      testID={testID}
      source={imgExists ? source : fallback}
      onError={onImgError}
      style={fallbackStyle && !imgExists ? fallbackStyle : styles}
      resizeMode={resizeMode}
    />
  );
};

export default ImageWithFallback;
