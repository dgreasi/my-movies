import { createText } from '@shopify/restyle';
import { Theme } from '~theme/theme';

export const Text = createText<Theme>();
Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
