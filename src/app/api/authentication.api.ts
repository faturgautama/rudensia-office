import { environment } from "src/environments/environment";

export const REGISTER = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseWebApiKey}`;
export const UPDATE_PROFILE = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${environment.firebaseWebApiKey}`;
export const SIGN_IN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseWebApiKey}`;
