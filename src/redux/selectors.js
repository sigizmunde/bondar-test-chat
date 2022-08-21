export const getContacts = (state) => state.contacts.items;
export const getMessages = (state) => state.messages.items;
export const getUser = (state) => state.auth.user;
export const getToken = (state) => state.auth.token;
export const getUserIsLoading = (state) => state.auth.isLoading;
export const getError = (state) => state.auth.error;
export const getIsLoading = (store) => store.isLoading;
