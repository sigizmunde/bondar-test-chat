import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getContacts, getMessages } from "../../redux/selectors";
import Avatar from "../Avatar/Avatar";
import MobileMenu from "../MobileMenu/MobileMenu";
import { USFormatDateTime } from "../../utils/formatDateTime";
import {
  CaptionName,
  ChatMessage,
  ChatPanel,
  ChWindow,
  ClearBtn,
  ContactPanel,
  FlexWrap,
  MessageText,
  MessageTimeStamp,
  Warn,
} from "./ChatWindow.styled";
import SendForm from "../SendForm/SendForm";
import { useContext, useEffect, useRef } from "react";
import { FilterContext } from "../Layout/Layout";
import icons from "../../image/icons.svg";

const ChatWindow = () => {
  const { id } = useParams();
  const { filter, setFilter } = useContext(FilterContext);

  const contact = useSelector(getContacts).find(
    ({ id: contact_id }) => contact_id === id
  );
  const { name, avatar, online } = contact
    ? contact
    : { name: "", avatar: "", online: false };
  const messages = useSelector(getMessages).filter(
    ({ contact_id, text }) =>
      contact_id === id && text?.toLowerCase().includes(filter.toLowerCase())
  );

  const scrollRef = useRef();

  // scroll down effect
  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight - 1000;
    let i = 100;
    const scrollTimer = setInterval(() => {
      const temp = scrollRef.current.scrollTop;
      scrollRef.current.scrollTop += 50;
      i -= 1;
      // console.log(i);
      if (i <= 0 || temp === scrollRef.current.scrollTop) {
        clearInterval(scrollTimer);
      }
    }, 25);
  }, [messages]);

  return (
    <ChWindow>
      <ContactPanel>
        {avatar !== "" && (
          <Avatar src={avatar} alt="current chat avatar" online={online} />
        )}
        <CaptionName>{name}</CaptionName>
        <MobileMenu />
      </ContactPanel>
      {filter && (
        <Warn>
          <span>{` search results for "${filter}"`} </span>
          <ClearBtn onClick={() => setFilter("")}>
            <use href={icons + "#icon-clear"}></use>
          </ClearBtn>
        </Warn>
      )}
      <ChatPanel ref={scrollRef}>
        {messages.length > 0 &&
          messages.map(({ id, datetime, text, incoming }) => (
            <FlexWrap key={id + datetime}>
              {incoming && <Avatar src={avatar} alt="avatar" online={false} />}
              <ChatMessage className={incoming ? "in" : "out"}>
                <MessageText>{text}</MessageText>
                <MessageTimeStamp>
                  {USFormatDateTime(datetime)}
                </MessageTimeStamp>
              </ChatMessage>
            </FlexWrap>
          ))}
      </ChatPanel>
      <SendForm />
    </ChWindow>
  );
};

export default ChatWindow;
