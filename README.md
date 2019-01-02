# Basic React-Native Boiler Plate

[![js-eslint-style](https://img.shields.io/badge/lint%20compliance-eslint-brightgreen.svg?style=flat)](http://eslint.org/)

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Rename the project bundle id and package name:([react-native-rename](https://github.com/junedomingo/react-native-rename) is useful module sin this step)

**Step 4:** Install the Application with `npm i`

## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS

- for iOS
  - run `npm run ios`
- for Android
  - run `npm run android`
  - Use the sdk versions for any third party library you add as mentioned in Project/android/app/build.gradle. Since google forces to use target sdk 26 or onwards.

## :heavy_exclamation_mark: Eslint and Airbnb javascript Compliant :heavy_exclamation_mark:

This project adheres to Airbnb style guide. We have setup and enabled eslint for this project. We suggest that you keep following it.

**To Lint**

This is implemented using [eslint](https://eslint.org). Just run `npm run lint`

**To Fix Lint Errors**

run `npm run fixcode`

**Bypass Lint And Run Project**

If you have to bypass lint and just run the project for special case.

- for iOS
  - run `react-native run-ios`
- for Android
  - run `react-native run-android`

**Understanding Linting Errors**

The linting rules are from airbnb and React-Standard. [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react). [Airbnb errors can be found here.](https://github.com/airbnb/javascript)
We have customised the linting as per our requirements. You can check the .eslintrc of the project and modify it as per your requirements.
