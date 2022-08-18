import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getContacts,
  removeContact,
  addContact,
  overwriteContacts,
} from "../../redux/contactsSlice.js";
import {
  getMessages,
  removeMessage,
  addMessage,
  overwriteMessages,
} from "../../redux/messagesSlice.js";
import messagesJSON from "../../data/messages.json";
import contactsJSON from "../../data/contacts.json";

const Layout = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const messages = useSelector(getMessages);
  console.log(contacts, messages);

  if (contacts?.length === 0) dispatch(overwriteContacts(contactsJSON.data));
  if (messages?.length === 0) dispatch(overwriteMessages(messagesJSON.data));

  return (
    <>
      <ul>
        {contacts?.length > 0 &&
          contacts.map(({ id, name, avatar, online }) => (
            <li key={id} className={online && "online"}>
              <img src={avatar} alt="avatar" />
              {name}
            </li>
          ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Layout;
