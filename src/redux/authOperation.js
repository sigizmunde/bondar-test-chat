import { googleProvider, auth } from "../services/firebase";
import { signInWithPopup } from "firebase/auth";
import { authRequest, authSuccess, authReject } from "./authActions";

export const authOperation = () => (dispatch, getState) => {
  dispatch(authRequest());
  console.log("starting request");
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log("resolved with ", result);
      const { email, displayName, photoURL, accessToken } = result.user;
      // const credential = googleProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      dispatch(
        authSuccess({
          user: { email, displayName, photoURL, accessToken },
          token: accessToken,
        })
      );
    })
    .catch((err) => {
      dispatch(authReject(err));
      console.log("error occured");
    });
};
