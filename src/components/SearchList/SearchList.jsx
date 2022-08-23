import { useNavigate } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

import {
  Caption,
  SchList,
  SearchContactLi,
  Name,
  Info,
} from "./SearchList.styled";

const SearchList = ({ contacts, currentId }) => {
  const navigate = useNavigate();

  return (
    <SchList>
      {contacts.length > 0 &&
        contacts.map(({ id, name, avatar, online }) => (
          <SearchContactLi
            key={id}
            onClick={() => navigate(`/chat/${id}`)}
            active={id === currentId}
          >
            <Avatar src={avatar} alt="avatar" online={online} />
            <Info>
              <Caption>
                <Name>{name}</Name>
              </Caption>
            </Info>
          </SearchContactLi>
        ))}
    </SchList>
  );
};

export default SearchList;
