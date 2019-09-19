import React from "react";
import Ticket from "./Ticket";
import AddButton from "./AddButton";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding-left: 8px;
  padding-right: 8px;
  height: 100%;
  margin-right: 8px;
  position: relative;
`;

class TicketsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textHeight: 140
    };
  }

  textHeight = textHeight => {
    this.setState(
      {
        textHeight: textHeight + 75
      },
      () => {
        console.log(this.state.textHeight);
        console.log(textHeight);
      }
    );
  };

  render() {
    const { title, tickets, listID } = this.props;
    return (
      // listID has to be a string
      <Droppable droppableId={String(listID)}>
        {/* everything inside the Droppable component uses the render functionality of react */}
        {provided => (
          <ListContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ paddingBottom: `${this.state.textHeight}px` }}
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
            <AddButton listID={listID} textHeight={this.textHeight} />
            {/* the placeholder creates a space to drag the ticket in */}
            {provided.placeholder}
          </ListContainer>
        )}
      </Droppable>
    );
  }
}

export default TicketsList;
