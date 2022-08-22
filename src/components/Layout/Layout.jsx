import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { overwriteContacts } from "../../redux/contactsSlice.js";
import { overwriteMessages } from "../../redux/messagesSlice.js";
import messagesJSON from "../../data/messages.json";
import contactsJSON from "../../data/contacts.json";
import ChatList from "../ChatList/ChatList.jsx";
import {
  ChatHead,
  H2,
  LayoutContainer,
  MiddleHeading,
  PanelHeader,
  Warn,
} from "./Layout.styled.js";
import { SidePanel } from "../SidePanel/SidePanel.styled";
import SearchForm from "../SearchForm/SearchForm.jsx";
import { createContext, useEffect, useState } from "react";
import generateListOfContacts from "../../utils/generateListOfContacts.js";
import Login from "../Login/Login.jsx";
import { getContacts, getMessages, getIsLoading } from "../../redux/selectors";
import Loader from "../Loader/Loader.jsx";
import SearchList from "../SearchList/SearchList.jsx";

export const FilterContext = createContext("");

const Layout = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);
  const messages = useSelector(getMessages);

  if (contacts?.length === 0) dispatch(overwriteContacts(contactsJSON.data));
  if (messages?.length === 0) dispatch(overwriteMessages(messagesJSON.data));

  const [filter, setFilter] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter(({ name }) => name.toLowerCase().includes(filter))
    );
  }, [filter, contacts]);

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
            <Login />
            <SearchForm onSearch={handleSearch} />
          </PanelHeader>
          <ChatHead>
            <H2>Chats{filter !== "" && <Warn> — search results:</Warn>}</H2>
          </ChatHead>
          {filter && filteredContacts?.length > 0 && (
            <>
              <MiddleHeading>Contacts found:</MiddleHeading>
              <SearchList contacts={filteredContacts} />
            </>
          )}
          {filter && contacts?.length && (
            <MiddleHeading>Messages found:</MiddleHeading>
          )}
          <ChatList chats={contactList} />
        </SidePanel>
        <Outlet />
      </FilterContext.Provider>
      {isLoading && <Loader />}
    </LayoutContainer>
  );
};

export default Layout;