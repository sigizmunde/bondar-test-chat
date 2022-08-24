import { getAnswer } from "../services/answerAPI";
import { addMessage } from "./messagesSlice";

const getAndStoreNewAnswer = async (store, id) => {
  getAnswer().then((value) => {
    const datetime = new Date().toISOString();
    if (typeof value === "string")
      store
        .dispatch(
          addMessage({ contact_id: id, datetime, text: value, incoming: true })
        )
        .catch((err) => {
          console.error(err);
        });
  });
};

const getAnswerMiddleware = (store) => (next) => (action) => {
  if (action.type === addMessage.type && !action.payload.incoming) {
    const id = action.payload.contact_id;
    const timeout = Math.round(Math.random() * 5 + 10) * 1000;
    setTimeout(() => getAndStoreNewAnswer(store, id), timeout);
  }
  next(action);
};

export default getAnswerMiddleware;
