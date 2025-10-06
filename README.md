# Bitcoin Dev Kit — React Native

React Native language bindings for the [Bitcoin Development Kit](https://bitcoindevkit.org/).

## Notes for developers
Using docs at https://jhugman.github.io/uniffi-bindgen-react-native/guides/rn/getting-started.html

## Building the library and running the examples

```shell
git clone git@github.com:thunderbiscuit/bdk-react-native.git
cargo install cargo-ndk
yarn install

just rename-library
just build-android
yarn example android
```
