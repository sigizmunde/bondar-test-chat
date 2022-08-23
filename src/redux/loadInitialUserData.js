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
    // console.log("response: ", response);
    const data = response.exists()
      ? response.data()
      : { contacts: { items: [] }, messages: { items: [] } };
    // console.log("data: ", data);
    const { contacts, messages } = data;
    store.dispatch(overwriteContacts(contacts.items));
    store.dispatch(overwriteMessages(messages.items));
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  store.dispatch(setLoading(false));
};
