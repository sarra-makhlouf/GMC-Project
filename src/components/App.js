import React, { Component } from "react";
import TicketsList from "./TicketsList";
import { connect } from "react-redux";
import AddButton from "./AddButton";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
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
