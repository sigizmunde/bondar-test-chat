import { Routes, Route, Navigate } from "react-router-dom";
import ChatWindow from "./ChatWindow/ChatWindow";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<br />} />
        <Route path="/:id" element={<ChatWindow />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
