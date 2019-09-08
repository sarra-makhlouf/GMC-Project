const initialState = [
  {
    id: 0,
    title: "BackLog",
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
    title: "Weekly Sprint",
    tickets: [
      {
        id: 0,
        text: "Create the UI"
      }
    ]
  },
  {
    id: 2,
    title: "In Progress",
    tickets: [
      {
        id: 0,
        text: "Create the Structure for the app"
      }
    ]
  },
  {
    id: 3,
    title: "Under Review",
    tickets: [
      {
        id: 0,
        text: "Lorem"
      }
    ]
  },
  {
    id: 4,
    title: "Done",
    tickets: [
      {
        id: 0,
        text: "Ipsum"
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
