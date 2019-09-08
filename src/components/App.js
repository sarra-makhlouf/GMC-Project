import React, { Component } from "react";
import TicketsList from "./TicketsList";
import { connect } from "react-redux";
import { flexbox } from "@material-ui/system";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <h2>Project Board</h2>
        <div style={styles.listsContainer}>
          {lists.map(list => (
            <TicketsList title={list.title} tickets={list.tickets} />
          ))}
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
