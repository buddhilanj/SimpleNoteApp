# SimpleNoteApp
Sample App Created for CareMaster Global Initial Test


## Info
Candidate : Nawanjana Bandara
Time Frame : 2 hours
Time Taken : 2.5 hours

## Instructions
1 - Install Node JS. Use NVM or [Node JS Official Website](https://nodejs.org/en). Node v16 is recommended.

(Optional) You can also set up the android and ios development enviroments if you are planning to run the application on simulators. Follow [Getting Started Guide](https://reactnative.dev/docs/environment-setup?guide=native&package-manager=yarn)
Make sure to install XCode and Android Studio respectively for iOS simulator and Android simulator.

2 - Enable yarn 2 if it isn't already - Node v16.9+ Required

Node 16 comes with yarn 2 integrated. Enable yarn by 

```sh
corepack enable
```
3 - Clone the repository

```sh
git clone https://github.com/buddhilanj/SimpleNoteApp.git
```

4 - Change the working dir to BasicStore.

5 - Install npm dependencies

```sh
yarn install
yarn expo install
```

6 - Run the project using following commands

   **iOS**

```sh
yarn ios
```
   **Android**

```sh
yarn android
```
  **On your own device**

```sh
yarn start
```
  wait for server to start and Scan the QR code from the device

## Features
1. Has 4 Screens. Main Notes List page, Notes Adding Page, Notes Editing Page, Selection Page
2. Loads Notes List as Default Screen. if no Notes are in the app shows a text saying "No Notes"
3. Bottom button on the main screen redirects to add note screen. User have to give a title, can add content as well, have to select a client and a category. Pressing "Add" button will save the note and redirect back to main screen
4. Pressing on a note will go to edit note screen. Use can make the changes and pressing save will save the note and redirect to main page
5. Pressing on the delete button on the notes list will delete the note
6. All data is persisted so reopening an app wont loose any data

## Faced challenges and thought process
1. Decided to go with JS with Expo. Expo reduces the time to configure Cocoapods and since going with Expo implementing typescrpit didn't come with default settings and to set up it would have taken more time.
   Since this is a simple app JS complications would not make any problems
2. Tried to implment Single Responsibility as much as possible while time boxing the work to 2 hours
3. Unfortunately had to go over the time frame of 2 hours as I have not recently implemented redux-toolkit with redux-persist. 
   There was an issue with actions implemented with persist package not being serializable when implemented with toolkit. Found the fix and implemented that
4. I did not have time to think about how to improve rendering efficency due to debugging the issue with persist library at the start. But since this is a small app at start should not be much of a problem as too many re renders do not happen.
5. We can use Jest along with Detox to test the application but with how the situation escalated I did not have any time.
