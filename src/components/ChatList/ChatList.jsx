import { useNavigate } from "react-router-dom";
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

const ChatList = ({ chats, currentId }) => {
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
            datetime = 0,
          }) => (
            <ContactLi
              key={id + datetime}
              onClick={() => navigate(`/chat/${id}`)}
              active={id === currentId}
            >
              <Avatar src={avatar} alt="avatar" online={online} />
              <Info>
                <Caption>
                  <Name>{name}</Name>
                  <Time>{datetime ? USFormatDate(datetime) : "new chat"}</Time>
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
