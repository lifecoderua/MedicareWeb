import firebase from "firebase/app";
import "firebase/firestore";

let dbInstance!: firebase.firestore.Firestore;

export function init() {
  if (dbInstance) {
    return;
  }

  dbInstance = firebase.initializeApp({ projectId: "medicare-4ccfe" }).firestore();
}

const DBService = {
  get db() {
    init();

    return dbInstance;
  }
}

export default DBService;
