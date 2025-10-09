# Bitcoin Dev Kit — React Native

React Native language bindings for the [Bitcoin Development Kit](https://bitcoindevkit.org/).

The code in this repository is mostly comprised of:

- Build tools and workflows
- CI workflows
- Tests
- Docs

The core Rust code that is exposed to the React Native language bindings actually resides in the [bdk-ffi](https://github.com/bitcoindevkit/bdk-ffi) repository. This repo pulls it in as a submodule.

## Notes for developers

Using docs at https://jhugman.github.io/uniffi-bindgen-react-native/guides/rn/getting-started.html to build this library.

To build the library and start testing locally, you must have:

- The [Rust](https://rust-lang.org/) toolchain installed on your machine
- The [just](https://github.com/casey/just) cli tool
- Initiate the submodule (`just submodule-init`)

## Building the library and running the examples

```shell
git clone git@github.com:bitcoindevkit/bdk-react-native.git
cargo install cargo-ndk
yarn install

just rename-library
just build-android
yarn example android
```
