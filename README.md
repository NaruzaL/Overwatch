# Overwatch

#### Week 3 Javascript independent project, 07.14.17

#### **By Pete Lazuran**

## Description

This web application will allow a user to create, view, edit and delete a list of characters from the game Overwatch.

## Setup/Installation Requirements

To run this project:

* Clone this repository to your desktop.
* Run {$ npm install} and {$ bower install} in your terminal to gather required packages.
* if you do not have Bower installed already, in your terminal enter  "npm install bower -g"
* if you do not have TyepScript installed already, in your terminal enter  "npm install typescript -g"
* for angular "npm install -g @angular/cli@1.0.0"
* for angularFire/firebase "npm install angularfire2@4.0.0-rc.0 firebase --save"
* go to https://firebase.google.com/ in your browser and sign in with your gmail
* click "go to console" in the top right of the page
* click "add project" and name your project overwatch
* create a file in the app folder of this repository called api-keys.ts
* in api-keys.ts type "export var masterFirebaseConfig = {}"
* on the firebase overview page of your overwatch project click the "add firebase to your web app" option
* copy and paste to make your api-keys.ts look like this :

```Javascript

  export var masterFirebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "overwatch-xxxxxx.firebaseapp.com",
    databaseURL: "https://overwatch-xxxxx.firebaseio.com",
    projectId: "overwatch-xxxxx",
    storageBucket: "overwatch-xxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxxx"
  };
  ```
* in firebase click on the database option in the left panel
* click the three verticle dots next to the + and - signs and then click import
* browse to find this project folder and import the sample-characters.json file
* while still in the database option on the firebase webpage select rules from the top middle panel and change both read and write to "true"
* Run {$ ng serve} to view the project in your web browser at localhost:4200 .


## Support and contact details

If you have any issues or have questions, ideas, concerns, or contributions please contact me through through Github.

## Known Bugs

None

## Technologies Used

* Javascript
* Typescript
* Angular 2
* AngularFire
* Firebase
* JSON
* HTML
* CSS
* Bootstrap

### License
This software is licensed under the MIT license.

Copyright (c) 2017 **Pete Lazuran**
