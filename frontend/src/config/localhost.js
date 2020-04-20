const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: "pet-hotel-d5d51.firebaseapp.com",
  databaseURL: "https://pet-hotel-d5d51.firebaseio.com",
  projectId: "pet-hotel-d5d51",
  storageBucket: "pet-hotel-d5d51.appspot.com",
  messagingSenderId: "792889906548",
  appId: `${process.env.APP_ID}`,
  measurementId: "G-KF5R2G70BM"
};

// Cloud Functions
// const backendUrl = `http://localhost:5000/${
//   firebaseConfig.projectId
// }/us-central1/api/graphql`;

// App Engine / Debug
const backendUrl = `http://localhost:8080`;

export default {
  firebaseConfig,
  backendUrl,
};
