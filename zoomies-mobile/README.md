# Zoomies Mobile App

This is the mobile app version of Zoomies, built with React + Capacitor for iOS and Android deployment.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation
```bash
cd zoomies-react
npm install
```

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Sync to mobile platforms
npx cap sync
```

## 📱 Mobile Development

### Android
```bash
# Open in Android Studio
npx cap open android

# Or build directly
npx cap build android
```

### iOS (macOS only)
```bash
# Open in Xcode
npx cap open ios

# Or build directly
npx cap build ios
```

## 🏗️ Project Structure

```
zoomies-mobile/
├── zoomies-react/          # React web app
│   ├── src/               # React components
│   ├── dist/              # Built web assets
│   └── package.json       # Dependencies
├── android/               # Android native project
├── ios/                   # iOS native project
└── capacitor.config.json  # Capacitor configuration
```

## 📦 Building for App Stores

### Android (Google Play Store)
1. Build the web app: `npm run build`
2. Sync to Android: `npx cap sync`
3. Open in Android Studio: `npx cap open android`
4. Build APK/AAB in Android Studio
5. Upload to Google Play Console

### iOS (Apple App Store)
1. Build the web app: `npm run build`
2. Sync to iOS: `npx cap sync`
3. Open in Xcode: `npx cap open ios`
4. Configure signing and capabilities
5. Archive and upload to App Store Connect

## 🔧 Configuration

### Capacitor Config
The `capacitor.config.json` file contains:
- App ID: `com.zoomies.app`
- App name: `Zoomies`
- Web directory: `dist`

### Mobile-Specific Features
- Push notifications (to be added)
- Camera access (to be added)
- Native device features (to be added)

## 📋 TODO

- [ ] Add push notifications
- [ ] Implement camera functionality
- [ ] Add native device features
- [ ] Configure app icons and splash screens
- [ ] Set up app store metadata
- [ ] Add mobile-specific UI optimizations

## 🔗 Links

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [React Documentation](https://reactjs.org/docs)
- [Android Development Guide](https://developer.android.com/guide)
- [iOS Development Guide](https://developer.apple.com/develop/)

## 📞 Support

For questions about the mobile app development, refer to the Capacitor documentation or contact the development team. 