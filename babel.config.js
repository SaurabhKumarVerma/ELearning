module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          alias: {
            "^@eLearning/(.+)": "./src/\\1",
            "@components": "./src/components",
            "@base": "./src/base",
            "@navigations-stack": "./src/navigation/StackNavigation",
            "@screens": "./src/screen",
            "@services": "./src/service",
            "@store": "./src/store",
            "@themes": "./src/theme",
            "@types": "./src/types",
            "@utils": "./src/utils",
            "@navigationTypes": "./src/navigation/NavigationTypes",
            "@navigations-taps": "./src/navigation/BottomNavigation",
            "@constant": "./src/constant/",
            "@config": "src/config/"
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  }
}