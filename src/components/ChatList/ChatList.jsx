import { Navigate, useNavigate } from "react-router-dom";
import { USFormatDate } from "../../utils/formatDateTime";
import Avatar from "../Avatar/Avatar";

import {
  Caption,
  ChList,
  ContactLi,
  Name,
  Time,
  Text,
  Info,
} from "./ChatList.styled";

const ChatList = ({ chats, filter }) => {
  const navigate = useNavigate();

  return (
    <ChList>
      {chats.length > 0 &&
        chats.map(
          ({
            id,
            name,
            avatar,
            online,
            text = "<no messages yet>",
            datetime = "new chat",
          }) => (
            <ContactLi
              key={id + datetime}
              onClick={() => navigate(`/chat/${id}`)}
            >
              <Avatar src={avatar} alt="avatar" online={online} />
              <Info>
                <Caption>
                  <Name>{name}</Name>
                  <Time>{USFormatDate(datetime)}</Time>
                </Caption>
                <Text>
                  {text?.length > 36 ? text.slice(0, 32).trim() + "..." : text}
                </Text>
              </Info>
            </ContactLi>
          )
        )}
    </ChList>
  );
};

export default ChatList;
