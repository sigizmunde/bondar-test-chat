import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase";
import { setLoading } from "./isLoadingSlice";
import { overwriteContacts } from "./contactsSlice";
import { overwriteMessages } from "./messagesSlice";

export const loadInitialUserData = async (store, user) => {
  const user_id = user ? user.email : "test_user";
  store.dispatch(setLoading(true));
  try {
    const response = await getDoc(doc(db, user_id, "chat"));
    // console.log("response: ", response.data());
    const resData = response.exists() ? response.data() : null;
    const data = resData
      ? resData
      : { contacts: { items: [] }, messages: { items: [] } };
    // console.log("data: ", data);
    const { contacts, messages } = data;
    store.dispatch(overwriteContacts(contacts.items));
    store.dispatch(overwriteMessages(messages.items));
  } catch (err) {
    console.error("Error on loading initial data: ", err);
  }
  store.dispatch(setLoading(false));
};
