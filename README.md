```bash
expo install react-native-svg
yarn add --dev @hitbit/expo-svg-transformer
```

### app.json

```json
"packagerOpts": {
  "config": "metro.config.js",
  "sourceExts": ["js", "jsx", "ts", "tsx", "svg"]
}
```

### metro.config.js

```javascript
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const { resolver: defaultResolver } = await getDefaultConfig();
  const { sourceExts, assetExts } = defaultResolver;

  return {
    transformer: {
      babelTransformerPath: require.resolve('@hitbit/expo-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
```

### App.js

```javascript
import React from 'react';
import { View } from 'react-native';
import Logo from './assets/Logo.svg';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Logo height={50} width={50} />
    </View>
  );
}
```
