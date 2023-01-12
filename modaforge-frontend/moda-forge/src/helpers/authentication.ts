import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { environment } from "src/environments/environment";

export const app = initializeApp(environment.firebaseConfig);
export const auth = getAuth(app);
export const user = auth.currentUser;