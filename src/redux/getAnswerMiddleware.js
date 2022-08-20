import { getAnswer } from "./answerAPI";
import { addMessage } from "./messagesSlice";

const getAndStoreNewAnswer = async (store, id) => {
  getAnswer().then((value) => {
    const datetime = new Date().toISOString();
    store.dispatch(
      addMessage({ contact_id: id, datetime, text: value, incoming: true })
    );
  });
};

const getAnswerMiddleware = (store) => (next) => (action) => {
  if (action.type === addMessage.type && !action.payload.incoming) {
    const id = action.payload.contact_id;
    const timeout = (Math.random(5) + 10) * 1000;
    setTimeout(() => getAndStoreNewAnswer(store, id), timeout);
  }
  next(action);
};

export default getAnswerMiddleware;
