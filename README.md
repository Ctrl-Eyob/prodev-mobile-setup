# ProDev Mobile App Setup (Expo + Expo Router)

This project documents the setup of a React Native mobile application using **Expo** with the **Expo Router** template. It also explains the generated file structure, a small UI modification, and the effect of resetting the project.

---

## Project Information

* **Repository:** `prodev-mobile-setup`
* **Directory:** `prodev-mobile-app-0x00`
* **Framework:** React Native (Expo)
* **Routing:** Expo Router

---

## 1. Scaffolding the Project

### Step 1: Navigate to the Parent Directory

```bash
cd prodev-mobile-setup
```

This directory acts as the workspace where the Expo application is initialized.

---

### Step 2: Initialize the Expo Project

```bash
npx create-expo-app@latest .
```

* The **latest Expo CLI** was used.
* The **Expo Router template** was selected during setup.
* Dependencies were installed automatically.
* A ready-to-run React Native project was scaffolded.

---

## 2. Understanding the File Structure

Key folders and files created by Expo Router:

```
app-example/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx        # Home screen (Tabs root)
│   │   └── _layout.tsx      # Tabs layout configuration
│   ├── _layout.tsx          # Root navigation layout
│   └── +not-found.tsx       # 404 / fallback screen
│
├── constants/
│   └── Colors.tsx           # Centralized theme colors
│
├── assets/                  # Fonts, images, icons
├── package.json             # Dependencies & scripts
└── README.md
```

### Key Notes

* **Expo Router** uses the `app/` directory for file-based routing.
* Files inside `(tabs)` define tab navigation screens.
* `_layout.tsx` controls navigation structure.
* `constants/Colors.tsx` centralizes color theming for light and dark modes.

---

## 3. Modifying the Home Screen

### File Edited

```
app-example/app/(tabs)/index.tsx
```

### Change Made

* Located the default text: `Welcome!`
* Updated it to:

```
First App Created
```

This confirms successful editing and hot reloading in the Expo development environment.

---

## 4. Running the Application

The development server was started using:

```bash
npx expo start
```

### Testing Options

* **Android:** Scan QR code using **Expo Go** app
* **iOS:** Scan QR code using the **Camera app**
* **Web:** Press `w` to run in browser

The application loaded successfully with the updated home screen text.

---

## 5. Resetting the Project

### Command Used

```bash
npm run reset-project
```

### Observations

When running the reset command:

* Cached build files were cleared
* Metro bundler cache was reset
* Temporary files and development artifacts were removed
* The project returned to a clean development state

### Why This Is Useful

* Fixes unexpected runtime or bundler issues
* Resolves stale cache problems
* Ensures a fresh rebuild of the application

> **Note:** Source files such as `app/` and custom code are not deleted.

---

## 6. Conclusion

This setup demonstrates:

* Successful scaffolding of an Expo Router project
* Understanding of file-based navigation in Expo
* Ability to modify and run a React Native application
* Awareness of project reset behavior and its benefits

The project is now ready for further development and feature expansion 🚀
