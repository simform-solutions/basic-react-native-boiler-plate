module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }],
    "object-curly-spacing": ["error", "always"],
    "eol-last": ["error", "always"],
    "no-console": "off",
    "no-restricted-syntax": [
        "error",
        {
            "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info|trace|disableYellowBox)$/]",
            "message": "Unexpected property on console object was called"
        }
    ],
    "react/no-unescaped-entities": ["error", {"forbid": ['>', '"', '}']}]
  },
  // Map from global var to bool specifying if it can be redefined
  "globals": {
    "__DEV__": true,
    "__dirname": false,
    "__fbBatchedBridgeConfig": false,
    "alert": false,
    "cancelAnimationFrame": false,
    "cancelIdleCallback": false,
    "clearImmediate": true,
    "clearInterval": false,
    "clearTimeout": false,
    "console": false,
    "document": false,
    "escape": false,
    "Event": false,
    "EventTarget": false,
    "exports": false,
    "fetch": false,
    "FormData": false,
    "global": false,
    "Map": true,
    "module": false,
    "navigator": false,
    "process": false,
    "Promise": true,
    "requestAnimationFrame": true,
    "requestIdleCallback": true,
    "require": false,
    "Set": true,
    "setImmediate": true,
    "setInterval": false,
    "setTimeout": false,
    "window": false,
    "XMLHttpRequest": false,
  },
  settings: {
    react: {
        version: require('./package.json').dependencies.react,
    }
  }
};