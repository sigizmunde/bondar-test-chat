import { useNavigate } from "react-router-dom";
import { MenuContainer, MobileBtn } from "./MobileMenu.styled";
import icons from "../../image/icons.svg";

const MobileMenu = () => {
  const navigate = useNavigate();
  return (
    <MenuContainer>
      <MobileBtn onClick={() => navigate("/")}>
        <use href={icons + "#icon-menu"}></use>
      </MobileBtn>
    </MenuContainer>
  );
};

export default MobileMenu;
