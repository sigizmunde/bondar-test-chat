import { createAction } from "@reduxjs/toolkit";

export const authRequest = createAction("auth/request");
export const authSuccess = createAction("auth/success");
export const authReject = createAction("auth/reject");
