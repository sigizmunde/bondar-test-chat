import { useNavigate } from "react-router-dom";
import { USFormatDate } from "../../utils/formatDateTime";
import Avatar from "../Avatar/Avatar";

import {
  Caption,
  SchList,
  SearchContactLi,
  Name,
  Time,
  Text,
  Info,
} from "./SearchList.styled";

const SearchList = ({ contacts }) => {
  const navigate = useNavigate();

  return (
    <SchList>
      {contacts.length > 0 &&
        contacts.map(({ id, name, avatar, online }) => (
          <SearchContactLi key={id} onClick={() => navigate(`/chat/${id}`)}>
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
