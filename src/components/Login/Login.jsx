import { useDispatch, useSelector } from "react-redux";
import { authOperation } from "../../redux/authOperation";
import { getUser, removeUser } from "../../redux/authSlice";
import Avatar from "../Avatar/Avatar";
import { LoginButton, LoginPanel, LogoutButton } from "./Login.styled";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  console.log("user ", user);

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
          <Avatar
            src={`https://xsgames.co/randomusers/assets/avatars/male/20.jpg`}
            alt="default user"
            online={true}
          />
          <LoginButton type="button" onClick={handleLogin}>
            Log in
          </LoginButton>
        </>
      )}
      {user && (
        <>
          <Avatar src={user.photoURL} alt={user.displayName} online={true} />
          <LogoutButton type="button" onClick={handleLogout}>
            Log out
          </LogoutButton>
        </>
      )}
    </LoginPanel>
  );
};

export default Login;
