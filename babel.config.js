/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          src: './src',
        },
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    [
      'react-native-reanimated/plugin', // Needs to be last!
      {
        relativeSourceLocation: true,
      },
    ],
  ],
};
