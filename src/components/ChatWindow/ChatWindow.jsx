import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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

const ChatWindow = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const contact = useSelector(getContacts).find(
    ({ id: contact_id }) => contact_id === id
  );
  const { name, avatar, online } = contact;
  const messages = useSelector(getMessages).filter(
    ({ contact_id }) => contact_id === id
  );

  return (
    <ChWindow>
      <ContactPanel>
        <Avatar src={avatar} alt="current chat avatar" online={online} />
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
    </ChWindow>
  );
};

export default ChatWindow;
