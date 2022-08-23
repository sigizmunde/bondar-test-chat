import sortObjectsByDatetime from "./sortObjectsByDatetime";

const generateListNoFilter = (contacts, messages) => {
  const unsortedList = contacts.map(({ id, name, avatar, online }) => {
    const lastMessage = messages.findLast(
      ({ contact_id }) => contact_id === id
    );
    return {
      id,
      name,
      avatar,
      online,
      text: lastMessage ? lastMessage.text : null,
      datetime: lastMessage ? lastMessage.datetime : null,
    };
  });
  const sortedList = sortObjectsByDatetime(unsortedList, -1);
  return sortedList;
};

const generateFilteredList = (contacts, messages, filter) => {
  const filteredList = messages.filter(({ text }) =>
    text.toLowerCase().includes(filter.toLowerCase())
  );
  return filteredList.map(({ contact_id, datetime, text, incoming }) => {
    const contact = contacts.find(({ id }) => id === contact_id) || {
      name: "",
      avatar: "",
      online: false,
    };
    return {
      id: contact_id,
      name: contact.name,
      avatar: contact.avatar,
      online: contact.online,
      datetime,
      text,
      incoming,
    };
  });
};

const generateListOfContacts = ({ contacts, messages, filter }) => {
  if (filter) {
    return generateFilteredList(contacts, messages, filter);
  }
  if (!filter) {
    return generateListNoFilter(contacts, messages);
  }
};

export default generateListOfContacts;
