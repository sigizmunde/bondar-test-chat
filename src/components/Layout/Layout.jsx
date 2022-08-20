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
import ChatList from "../ChatList/ChatList.jsx";
import {
  ChatHead,
  H2,
  LayoutContainer,
  PanelHeader,
  Warn,
} from "./Layout.styled.js";
import { SidePanel } from "../SidePanel/SidePanel.styled";
import Avatar from "../Avatar/Avatar";
import SearchForm from "../SearchForm/SearchForm.jsx";
import { createContext, useContext, useEffect, useState } from "react";
import generateListOfContacts from "../../utils/generateListOfContacts.js";

export const FilterContext = createContext("");

const Layout = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const messages = useSelector(getMessages);

  if (contacts?.length === 0) dispatch(overwriteContacts(contactsJSON.data));
  if (messages?.length === 0) dispatch(overwriteMessages(messagesJSON.data));

  const [filter, setFilter] = useState("");
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    setContactList(
      generateListOfContacts({
        contacts,
        messages,
        filter,
      })
    );
  }, [filter, contacts, messages]);

  const handleSearch = (search) => {
    setFilter(search.toLowerCase());
  };

  return (
    <LayoutContainer>
      <FilterContext.Provider value={filter}>
        <SidePanel>
          <PanelHeader>
            <Avatar
              src={`https://xsgames.co/randomusers/assets/avatars/male/20.jpg`}
              alt="user avatar"
              online={true}
            />
            <SearchForm onSearch={handleSearch} />
          </PanelHeader>
          <ChatHead>
            <H2>Chats{filter !== "" && <Warn> — search results:</Warn>}</H2>
          </ChatHead>
          <ChatList chats={contactList} />
        </SidePanel>
        <Outlet />
      </FilterContext.Provider>
    </LayoutContainer>
  );
};

export default Layout;
