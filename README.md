## Steps to convert your angular web application to android apk or ios also

changes:
1. outputPath: "dist/project" >>> "outputPath": "www" (angular.json)
2. ng add @capacitor/angular
3. npm i @capacitor/ios @capacitor/android
4. ng build --prod
5. npx cap add android/npx cap add ios
6. npx cap sync
7. npx cap open android
8. the android file will open on android studio and app will run automatically.
9. Into the android studio go to build >> build bundles/apk(s) 

[watch this](https://www.youtube.com/watch?v=T8ia2evu_5o)