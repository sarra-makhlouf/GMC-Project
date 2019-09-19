import React, { Component } from "react";
import TicketsList from "./TicketsList";
import { connect } from "react-redux";
import AddButton from "./AddButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";

// creating styled components using ... wait for it ....the "styled-components" pkg!!
const ListsContainer = styled.div`
  display: flex;
`;

class App extends Component {
  // a function containing the reordering logic
  // that will run when draggin ends
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    // check if there's a destination
    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h2>Project Board</h2>
          {/* <Droppable droppableId="all-lists"> */}
          <ListsContainer>
            {lists.map(list => (
              <TicketsList
                listID={list.id}
                title={list.title}
                tickets={list.tickets}
                key={list.id}
              />
            ))}
            <AddButton list />
          </ListsContainer>
          {/* </Droppable> */}
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
