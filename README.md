# Bitcoin Dev Kit — React Native

React Native language bindings for the [Bitcoin Development Kit](https://bitcoindevkit.org/).

## Notes for developers
Using docs at https://jhugman.github.io/uniffi-bindgen-react-native/guides/rn/getting-started.html

Version "uniffi-bindgen-react-native": "0.29.3-0" has a bug which prevents the library from building. Currently pinning at "uniffi-bindgen-react-native": "0.29.0-0".

I had to install cargo-ndk.

```shell
cargo install cargo-ndk
```

## Building the library and running the examples

```shell
# Build the Android library
just comment-out-name
just build-android

# Run the Android example app
# In a separate terminal, start Metro
cd examples/
npx react-native start
# Then start the app
cd ../
yarn example android
```
