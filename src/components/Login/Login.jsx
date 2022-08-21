import { useDispatch, useSelector } from "react-redux";
import { authOperation } from "../../redux/authOperation";
import { removeUser } from "../../redux/authSlice";
import Avatar from "../Avatar/Avatar";
import { LoginButton, LoginPanel, LogoutButton, UserDiv } from "./Login.styled";
import { getUser } from "../../redux/selectors";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const handleLogin = () => {
    dispatch(authOperation());
  };

  const handleLogout = () => {
    dispatch(removeUser());
  };

  return (
    <LoginPanel>
      {!user && (
        <>
          <UserDiv>
            <Avatar
              src={`https://xsgames.co/randomusers/assets/avatars/male/20.jpg`}
              alt="default user"
              online={true}
            />
            <p>test user | please login</p>
          </UserDiv>
          <LoginButton type="button" onClick={handleLogin}>
            Log in
          </LoginButton>
        </>
      )}
      {user && (
        <>
          <UserDiv>
            <Avatar src={user.photoURL} alt={user.displayName} online={true} />
            <p>
              {user.displayName.length > 26
                ? user.displayName.slice(0, 23) + "..."
                : user.displayName}
            </p>
          </UserDiv>
          <LogoutButton type="button" onClick={handleLogout}>
            Log out
          </LogoutButton>
        </>
      )}
    </LoginPanel>
  );
};

export default Login;
