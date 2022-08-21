import { Routes, Route, Navigate } from "react-router-dom";
import { Placeholder } from "./Placeholder/Placeholder";
import ChatWindow from "./ChatWindow/ChatWindow";
import Layout from "./Layout/Layout";

function App() {
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
