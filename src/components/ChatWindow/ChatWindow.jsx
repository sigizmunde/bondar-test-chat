import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getContacts } from "../../redux/contactsSlice";
import { getMessages } from "../../redux/messagesSlice";
import Avatar from "../Avatar/Avatar";
import { USFormatDateTime } from "../../utils/formatDateTime";
import {
  ChatMessage,
  ChatPanel,
  ChWindow,
  ContactPanel,
  MessageText,
  MessageTimeStamp,
} from "./ChatWindow.styled";
import SendForm from "../SendForm/SendForm";

const ChatWindow = () => {
  const { id } = useParams();

  const contact = useSelector(getContacts).find(
    ({ id: contact_id }) => contact_id === id
  );
  const { name, avatar, online } = contact
    ? contact
    : { name: "", avatar: "", online: false };
  const messages = useSelector(getMessages).filter(
    ({ contact_id }) => contact_id === id
  );

  return (
    <ChWindow>
      <ContactPanel>
        {avatar !== "" && (
          <Avatar src={avatar} alt="current chat avatar" online={online} />
        )}
        <p>{name}</p>
      </ContactPanel>
      <ChatPanel>
        {messages.length > 0 &&
          messages.map(({ id, datetime, text, incoming }) => (
            <ChatMessage
              key={id + datetime}
              className={incoming ? "in" : "out"}
            >
              <MessageText>{text}</MessageText>
              <MessageTimeStamp>{USFormatDateTime(datetime)}</MessageTimeStamp>
            </ChatMessage>
          ))}
      </ChatPanel>
      <SendForm />
    </ChWindow>
  );
};

export default ChatWindow;
