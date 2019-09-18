import React from "react";
import Ticket from "./Ticket";
import AddButton from "./AddButton";
import { Droppable } from "react-beautiful-dnd";

const TicketsList = ({ title, tickets, listID }) => {
  return (
    // listID has to be a string
    <Droppable droppableId={String(listID)}>
      {/* everything inside the Droppable component uses the render functionality of react */}
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h4>{title.toUpperCase()}</h4>
          {tickets.map((ticket, index) => (
            <Ticket
              text={ticket.text}
              key={ticket.id}
              id={ticket.id}
              index={index}
            />
          ))}
          <AddButton listID={listID} />
          {/* the placeholder creates a space to drag the ticket in */}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: "100%",
    marginRight: 8
  }
};

export default TicketsList;
