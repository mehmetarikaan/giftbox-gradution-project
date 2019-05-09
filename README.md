# Giftbox-gradution
- Okan University Mobile Technologies Department Graduation Project


Import
- react 
- react-native 
- redux
- react-redux
- redux-thunk 
- firebase
- react-firebase

## How to npm this Project?

Example;
```sh
npm install --save react-redux
```

## How to run this Project?

## Installation
1. `git clone https://github.com/mehmetarikaan/giftbox-gradution-project.git`
2. `cd giftbox-gradution-project `
3. `npm install`
4. `cd ../server`
5. `npm install`
6. `node server.js`
7. To run the iOS version, open another terminal window type `open ../Giftbox/iOS/giftbox.xcodeproj`
8. Click the play icon in Xcode to start the app



#### Setup iOS and Android env

see

- [iOS setup](https://facebook.github.io/react-native/docs/getting-started.html#ios-setup)
- [Android setup](https://facebook.github.io/react-native/docs/android-setup.html#content)

#### run iOS

Open `ios/giftbox.xcodeproj` and hit run in Xcode.

or

```sh
react-native run-ios
```


#### run Android

```sh
emulator -avd [your_emulator_name] -gpu on &
react-native run-android
```

> On Mac using `fn + F2` to open debug panel

Also you can use `adb logcat` to log some android debug messages.

```sh
adb logcat -s 'ReactNative'
```

## Remote devtools

[chrome app](https://chrome.google.com/webstore/detail/remotedev/faicmgpfiaijcedapokpbdejaodbelph) (recommended)

See [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools) for more information

## Upgrade Guide

[React Native Upgrading](http://facebook.github.io/react-native/docs/upgrading.html)



## License
MA ©(https://github.com/mehmetarikaan)



