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
    default:
      return state;
  }
};

export default listsReducer;
