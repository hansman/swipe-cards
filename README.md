# Swipe-Cards

A tinder-like swipe experience for android and ios. The application pulls cards (images) from the imgur api and renders them via react-native. An user can vote for content by a tinder-like swipe animation. Please reach out to become a beta tester.

## Build
- `npm install`
- `react-native run-ios` or
- `react-native run-android`

## Checklist

- [x] react-native app for ios (`index.io.js`)
- [x] react-native app for android (`index.android.js`)
- [x] fetching images from imgur api; authorization based on clientId (`src/config.js`)
- [x] state management via `Yomguithereal/baobab-react`
- [x] swipe gesture based on `meteor-factory/react-native-tinder-swipe-cards`
- [x] buttons to trigger accept-card animation or reject-card animation
- [x] overlaying color buttons to indicate swipe gesture progress
- [x] prefetching images before they get rendered
- [x] image rendering thumbnails 320x320
- [x] fallback to original image if thumbnail is not available
- [x] styles calculated based on view port dimensions, support for multiple devices.
- [x] reloading of image stack ones all images have been swiped
- [x] handling of api failures such as rate-limiting with manual reload button
- [x] display locked to portrait mode
- [x] card render error handling
- [x] cards fetch error handling
- [x] unit tests

## Test
`npm test`

## Devices
The app has been tested on iphone6, iphone7 and iphone7+ and Nexus5.

## Demo
![Demo gif](http://i.giphy.com/3o7TKSqlllY2MNNeEg.gif)
