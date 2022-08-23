import { AvatarWrapper } from "./Avatar.styled";
import icons from "../../image/icons.svg";

const Avatar = ({ src, alt, online }) => {
  return (
    <AvatarWrapper>
      <img src={src || require("../../image/noavatar.png")} alt={alt} />
      {online && (
        <svg>
          <use href={icons + "#icon-checkmark"}></use>
        </svg>
      )}
    </AvatarWrapper>
  );
};

export default Avatar;
