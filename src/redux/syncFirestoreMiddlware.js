import { addMessage } from "./messagesSlice";
import { addContact } from "./contactsSlice";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { authSuccess } from "./authActions";
import { removeUser } from "./authSlice";
import { loadInitialUserData } from "./loadInitialUserData";
import { loadDataAction } from "./loadDataAction";

const updateFirebase = async (store) => {
  const { contacts, messages } = store.getState().persisted;
  const { user } = store.getState().persisted.auth;
  const user_id = !user ? "test_user" : user.email;
  await setDoc(doc(db, user_id, "chat"), {
    contacts,
    messages,
  })
    // .then((response) =>
    //   console.log("Document written with response: ", response)
    // )
    .catch((e) => console.error("Error adding document: ", e));
};

const syncFirestoreMiddleware = (store) => (next) => (action) => {
  if (action.type === addMessage.type || action.type === addContact.type) {
    next(action);
    updateFirebase(store);
    return;
  }
  if (action.type === authSuccess.type || action.type === loadDataAction.type) {
    loadInitialUserData(store, action.payload.user)
      .then(() => updateFirebase(store))
      .catch((err) => console.error(err));
  }
  if (action.type === removeUser.type) {
    loadInitialUserData(store, null)
      .then(() => updateFirebase(store))
      .catch((err) => console.error(err));
  }
  next(action);
};

export default syncFirestoreMiddleware;
