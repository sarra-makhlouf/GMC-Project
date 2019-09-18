import React, { Component } from "react";
import TicketsList from "./TicketsList";
import { connect } from "react-redux";
import AddButton from "./AddButton";
import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {
  //a function that will run when draggin ends
  onDragEnd = () => {
    // TODO: reordering logic
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h2>Project Board</h2>
          <div style={styles.listsContainer}>
            {lists.map(list => (
              <TicketsList
                listID={list.id}
                title={list.title}
                tickets={list.tickets}
                key={list.id}
              />
            ))}
            <AddButton list />
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex"
  }
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
