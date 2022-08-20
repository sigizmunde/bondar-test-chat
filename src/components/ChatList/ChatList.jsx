import { Navigate, useNavigate } from "react-router-dom";
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

const ChatList = ({ chats }) => {
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
            <ContactLi key={id} onClick={() => navigate(`/${id}`)}>
              <Avatar src={avatar} alt="avatar" online={online} />
              <Info>
                <Caption>
                  <Name>{name}</Name>
                  <Time>{datetime}</Time>
                </Caption>
                <Text>{text}</Text>
              </Info>
            </ContactLi>
          )
        )}
    </ChList>
  );
};

export default ChatList;
