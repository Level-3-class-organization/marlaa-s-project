# Plannify Mobile App 📒

<b> Description:</b>

- This application provides users with the capability to input various types of information, including the number of hours slept, cups of water consumed, tasks completed, and daily journal entries. The entered data is stored in a database, allowing users to track their progress through the logs page.
- The primary objective of this application is to inspire users to prioritize self-care and mindfulness in order to improve their overall well-being. Maintaining a record of daily habits serves as an effective means of practicing self-care.

## Technologies used 💻

- To create the frontend of this application, I utilized the React Native framework. Developing this app using React Native was an opportunity for me to gain proficiency in this technology. Prior to embarking on this project, I had limited knowledge of React Native and acquired skills in its usage through self-directed learning.
- Initially, I developed the app as a website (<a href="https://plannify-d286c.web.app/home">Click here to view the website </a>), but later decided to expand its functionality by creating a standalone application. I incorporated the backend I had already developed for the website into the application.

## How to Install 📲

1. Go to terminal and paste this code

```sh
git clone ‘URL of github repository’
```

2. Go into the project

```sh
cd back-end-project
```

3. Start the project

```sh
npm run ios
```

<b>Required Dependencies:</b>

- Yup

```sh
npm i yup
```

- Async Storage

```sh
npm i @react-native-async-storage/async-storage
```

- React Native Cookies

```sh
npm i @react-native-cookies/cookies
```

- React Navigation

```sh
npm install @react-navigation/native
```

- React Native Axios

```sh
npm i react-native-axios
```

- React Native Modal

```sh
npm i react-native-modal
```

## Challenges 📌

- One notable challenge I encountered during the development process was implementing the restart day function. This feature involved creating new journal entries, sleep records, and water consumption values at the start of each new day. To overcome this challenge, I conducted thorough research and made updates to the backend code. Specifically, I modified the backend to store the timestamp of the last login and compared it to the current time to determine if 24 hours had elapsed since the previous login. This allowed for the appropriate initialization of new day-specific data.

<br>
- Another challenge I encountered was related to the usage of the useEffect hook to ensure timely updates of the data. I realized that the issue arose from the presence of multiple useEffect instances within a single page. I resolved the problem by creating a function that encapsulated the various functions required and invoked this function within the useEffect hook.
## More resources 📃

- **<a href="https://docs.expo.dev/tutorial/create-your-first-app/">How to create a new Expo app</a>**
- **<a href="https://reactnative.dev/docs/tutorial">Learn the basics of React Native</a>**
- **<a href="https://github.com/react-native-modal/react-native-modal">How to use React Native Modal</a>**
- **<a href="https://www.npmjs.com/package/axios">How to install axios</a>**

## Acknowledgements 🤝

- [Free Code Camp](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/)
- [Make a README](https://www.makeareadme.com/)
