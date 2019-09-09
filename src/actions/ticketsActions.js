import { CONSTANTS } from "../actions";

export const addTicket = (listID, text) => {
  return {
    type: CONSTANTS.ADD_TICKET,
    payload: { text, listID }
  };
};
