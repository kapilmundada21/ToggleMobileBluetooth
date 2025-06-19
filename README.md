# Toggle Mobile Bluetooth

A React Native application that allows you to manage Bluetooth functionality on mobile devices. This app demonstrates how to interact with the device's Bluetooth settings using React Native.

## Features

- Toggle Bluetooth on/off
- Check Bluetooth current state
- Monitor Bluetooth state changes
- Cross-platform support (iOS and Android)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js >= 18
- React Native development environment set up ([React Native - Environment Setup](https://reactnative.dev/docs/environment-setup))
- For iOS development:
  - macOS
  - Xcode
  - CocoaPods
- For Android development:
  - Android Studio
  - Android SDK
  - JDK 11 or newer

## Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd ToggleMobileBluetooth
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Install iOS dependencies (iOS only):

```bash
cd ios
pod install
cd ..
```

## Running the Application

### Start Metro Server

First, start the Metro bundler:

```bash
npm start
# or
yarn start
```

### Run on Android

```bash
npm run android
# or
yarn android
```

### Run on iOS

```bash
npm run ios
# or
yarn ios
```

## Permissions

### Android

The application requires the following permissions in AndroidManifest.xml:

- `BLUETOOTH`
- `BLUETOOTH_ADMIN`
- `ACCESS_FINE_LOCATION` (for Android 11 and below)
- `BLUETOOTH_CONNECT` (for Android 12+)

### iOS

For iOS, the following permissions need to be added to Info.plist:

- `NSBluetoothAlwaysUsageDescription`
- `NSBluetoothPeripheralUsageDescription`

## Usage

The app uses `react-native-bluetooth-state-manager` to handle Bluetooth functionality. Here are the main features:

1. **Check Bluetooth State**

   - The app automatically checks and displays the current Bluetooth state
   - States include: PoweredOn, PoweredOff, Resetting, Unauthorized, Unknown, Unsupported

2. **Toggle Bluetooth**
   - Tap the toggle button to turn Bluetooth on/off
   - Note: On iOS, the app can only open the system settings due to platform limitations

## Troubleshooting

### Common Issues

1. **Bluetooth Permission Issues**

   - Ensure all required permissions are properly set in AndroidManifest.xml and Info.plist
   - For Android 12+, make sure `BLUETOOTH_CONNECT` permission is granted at runtime

2. **Build Errors**

   - Clean the build:

     ```bash
     # For Android
     cd android
     ./gradlew clean
     cd ..

     # For iOS
     cd ios
     pod deintegrate
     pod install
     cd ..
     ```

3. **Metro Bundler Issues**
   - Clear Metro cache:
     ```bash
     npm start -- --reset-cache
     ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have any questions or feedback, please open an issue in the repository.

## Acknowledgments

- [React Native](https://reactnative.dev)
- [react-native-bluetooth-state-manager](https://github.com/patlux/react-native-bluetooth-state-manager)
