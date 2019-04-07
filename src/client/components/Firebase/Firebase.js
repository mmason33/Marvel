import app from 'firebase/app'
import 'firebase/database'
// import FirebaseContext from './context.js'
// import { keyGen } from '../../utils/keygen';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

app.initializeApp(config);
export const database = app.database();
export const contestsRef = database.ref('contests')

// class Firebase {
//     constructor() {
//       app.initializeApp(config)
//       this.db = app.database()
//     }

//     createContest(key) {
//       this.db.ref('contests/' + key).set({
//         id: key,
//         connections: 0,
//         url: `/${key}`
//       });
//     }

//     doesContestExist(urlPath) {
//       const key = urlPath.replace('/', '')
//       this.db.ref('contests/' + key).once('value').then((snapshot) => {
//         return snapshot.exists()
//       })
//     }

//     getContestData(key) {
//       console.log(key);
//       this.db.ref('contests/' + key).once('value').then((snapshot) => {
//         console.log(snapshot.key)
//       })
//     }
// }

  // export default Firebase