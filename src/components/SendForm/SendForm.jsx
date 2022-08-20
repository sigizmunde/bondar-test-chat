import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addMessage } from "../../redux/messagesSlice";
import { Form, SendInput } from "./SendForm.styled";
import icons from "../../image/icons.svg";

const SendForm = () => {
  const { id } = useParams();
  const [messageText, setMessageText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setMessageText(e.target.value);
  };

  const clearForm = () => {
    setMessageText("");
  };

  const sendMessage = (text, id) => {
    if (text !== "" && id) {
      const datetime = new Date().toISOString();
      dispatch(addMessage({ datetime, contact_id: id, text, incoming: false }));
    } else console.log("message not sent, empty parameter");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(messageText.trim(), id);
    clearForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <svg onClick={handleSubmit}>
        <use href={icons + "#icon-send"}></use>
      </svg>
      <SendInput
        type="text"
        name="message"
        placeholder="Type your message"
        value={messageText}
        onChange={handleChange}
      ></SendInput>
    </Form>
  );
};

export default SendForm;
