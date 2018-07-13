module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "react-native/react-native": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": 0,
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
            "react-native/no-unused-styles": 2,
			"react-native/split-platform-components": 2,
			"react-native/no-inline-styles": 2,
			"react-native/no-color-literals": 2,
    }
};
