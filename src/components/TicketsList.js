import React from "react";
import Ticket from "./Ticket";
import AddButton from "./AddButton";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin-right: 8px;
`;

const TicketsList = ({ title, tickets, listID }) => {
  return (
    // listID has to be a string
    <Droppable droppableId={String(listID)}>
      {/* everything inside the Droppable component uses the render functionality of react */}
      {provided => (
        <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
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
        </ListContainer>
      )}
    </Droppable>
  );
};

export default TicketsList;
