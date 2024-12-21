module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      "module-resolver",
      {
        "root": ["./"],
        "alias": {
          "@eLearning": "./src",
          "@components": "./src/component",
          "@base": "./src/base",
          "@services": "./src/service",
          "@themes": "./src/theme",
          "@types": "./src/types",
          "@utils": "./src/utils",
          "@screens": "./src/screen",
          "@navigations": "./src/navigation/StackNavigation",
          "@store": "./src/store",
          "@navigationTypes": "./src/navigation/NavigationTypes/types",
          "@navigation-taps": "./src/navigation/BottomNavigation",
          "@constant": "./src/constant"
        }
      }
    ],
  };
};



