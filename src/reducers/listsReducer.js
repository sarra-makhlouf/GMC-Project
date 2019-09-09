// importing constants
import { CONSTANTS } from "../actions";

// this is temporary, I gotta fix this
let listID = 5;
let ticketID = 5;

// setting up the inital state for listReducer
const initialState = [
  {
    id: 0,
    title: "To Do",
    tickets: [
      {
        id: 0,
        text: "Create a database for my app"
      },
      {
        id: 1,
        text: "Create a server for my app"
      }
    ]
  },
  {
    id: 1,
    title: "In Progress",
    tickets: [
      {
        id: 0,
        text: "Create the UI"
      }
    ]
  },
  {
    id: 2,
    title: "Code Review",
    tickets: [
      {
        id: 0,
        text: "Create the Structure for the app"
      }
    ]
  },
  {
    id: 3,
    title: "Done",
    tickets: [
      {
        id: 0,
        text: "Lorem"
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        id: listID,
        title: action.payload,
        tickets: []
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_TICKET:
      const newTicket = {
        id: ticketID,
        text: action.payload.text
      };
      ticketID += 1;

      //determining in which list to store the ticket
      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            tickets: [...list.tickets, newTicket]
          };
        } else {
          return list;
        }
      });
      return newState;

    default:
      return state;
  }
};

export default listsReducer;
