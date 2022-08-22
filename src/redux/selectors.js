export const getContacts = (state) => state.persisted.contacts.items;
export const getMessages = (state) => state.persisted.messages.items;
export const getUser = (state) => state.persisted.auth.user;
export const getToken = (state) => state.persisted.auth.token;
export const getUserIsLoading = (state) => state.persisted.auth.isLoading;
export const getError = (state) => state.persisted.auth.error;
export const getIsLoading = (store) => store.isLoading;
