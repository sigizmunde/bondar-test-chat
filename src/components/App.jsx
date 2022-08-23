import { Routes, Route, Navigate } from "react-router-dom";
import { Placeholder } from "./Placeholder/Placeholder";
import ChatWindow from "./ChatWindow/ChatWindow";
import Layout from "./Layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadDataAction } from "../redux/loadDataAction";
import { getUser } from "../redux/selectors";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  // the initial database read on start
  useEffect(() => {
    dispatch(loadDataAction({ user }));
  }, [dispatch, user]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Placeholder>No chat chosen</Placeholder>} />
        <Route path="/chat/:id" element={<ChatWindow />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
