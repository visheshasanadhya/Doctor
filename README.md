# 🩺 Doctor App – Flutter Web Deployment on GitHub Pages

This is a Flutter web application named **Doctor**, designed for healthcare features. This guide helps you deploy the web version of the app using GitHub Pages.

---

## Youtube Video link- 

https://www.youtube.com/watch?v=Lq5M1nmqcLU


## 🔧 Prerequisites

- Flutter installed and configured
- Git installed
- GitHub repository created: [Doctor](https://github.com/visheshasanadhya/Doctor.git)
- Optional: `gh-pages` CLI (if using alternative deployment methods)

---

## 🚀 Deployment Steps

Follow these steps from your **Flutter project root** folder:

### 1. Clean and Get Dependencies
```bash
flutter clean
flutter pub get
```

### 2. Build Web Version
```bash
flutter build web --release --no-tree-shake-icons --base-href "/Doctor/"
```

> ℹ️ The `--base-href` must match your repo name (case-sensitive).

---

### 3. Initialize Git and Push Code to `main`
```bash
git init
git add .
git commit -m "First commit"
git branch -M main
git remote add origin https://github.com/visheshasanadhya/Doctor.git
git push -u origin main
```

---

### 4. Deploy Web Build to `gh-pages`
```bash
cd build/web
git init
git checkout -b gh-pages
git remote add origin https://github.com/visheshasanadhya/Doctor.git
git add .
git commit -m "Deploy Flutter Web to GitHub Pages"
git push -f origin gh-pages
```

---

## 🌐 Access the Live App

Once pushed, your web app will be available at:

```
https://visheshasanadhya.github.io/Doctor/
```

> 🕒 It might take a few minutes to reflect changes after push.

---

## 🔁 Updating the Website After Changes

To update the app in the future:

```bash
flutter clean
flutter pub get
flutter build web --release --no-tree-shake-icons --base-href "/Doctor/"
cd build/web
git add .
git commit -m "Update build"
git push -f origin gh-pages
```

---

## 📌 Important Notes

- Keep your project name and `base-href` in sync.
- Do not delete `index.html` from the `web` folder unless intentionally rebuilding it.
- Always run commands from the **project root** (where `pubspec.yaml` is located).

---

## 📬 Contact

For help or feedback, reach out via GitHub or email.
