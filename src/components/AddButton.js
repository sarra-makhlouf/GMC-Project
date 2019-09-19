import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import { Card, Button } from "@material-ui/core";
import Textarea from "react-textarea-autosize";
import { connect } from "react-redux";
import { addList, addTicket } from "../actions";
import { isAbsolute } from "path";

// A reusable component that can be used to either add lists or tickets "depending on the prop recieved"
class AddButton extends Component {
  state = {
    formIsOpen: false,
    text: ""
  };

  // componentDidUpdate = (preProps, prevState) => {
  //   if (!prevState.openForm)
  //     this.props.textHeight(
  //       document.getElementById("expand").getBoundingClientRect().height
  //     );
  // };

  //a handler that sets the formIsOpen to "true"
  openForm = () => {
    this.setState({
      formIsOpen: true
    });
  };

  //a handler that sets the formIsOpen to "false"
  closeForm = () => {
    this.setState({
      formIsOpen: false
    });
  };

  // a handler that changes the text in state whenever the user types smthn
  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  // dispatching the action addList
  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      //resetting the state to empty string so that user have a fresh blank field after prev input
      this.setState({
        text: ""
      });
      dispatch(addList(text));
    }
    return;
  };

  // dispatching the action addTicket
  handleAddTicket = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;

    if (text) {
      //resetting the state to empty string so that user have a fresh blank field after prev input
      this.setState({
        text: ""
      });
      dispatch(addTicket(listID, text));
    }
    return;
  };

  //a function that decides if it should renders a list button or a ticket button
  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Add another list" : "Add another ticket";
    const buttonOpacity = list ? 1 : 0.5;
    const buttonColor = list ? "white" : "inherit";
    const buttonBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
      <div
        onClick={() => {
          this.openForm();
          // console.log(
          //   document.getElementById("expand").getBoundingClientRect().height
          // );
        }}
        style={{
          //variable styles depending on whether its a list or a ticket button
          opacity: buttonOpacity,
          color: buttonColor,
          background: buttonBackground,
          //spreading the styles from inactiveAddButton here
          ...styles.inactiveAddButton
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  //a function that renders a form when the button is clicked
  renderForm = () => {
    const { list } = this.props;

    const placeHolder = list ? "Enter a list title..." : "Enter ticket..";
    const buttonTitle = list ? "Add List" : "Add Ticket";

    return (
      <div style={styles.expanded}>
        <Card
          id="expand"
          style={{
            minHeight: 85,
            minWidth: 280,
            padding: "6px 8px 2px",
            boxSizing: "border-box"
          }}
        >
          {/* using the react-textarea-autosize npm package 
            to allow the height of the text area to grow automatically */}
          <Textarea
            placeholder={placeHolder}
            autoFocus
            id="expand"
            //onBlur={this.closeForm}
            value={this.state.text}
            onChange={e => {
              this.handleInputChange(e);
            }}
            onKeyPress={() =>
              this.props.textHeight(
                document.getElementById("expand").getBoundingClientRect().height
              )
            }
            style={{
              resize: "none",
              width: "100%",
              overflow: "hidden",
              outline: "none",
              border: "none"
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            // using onMouseDown because it fires before onBlur, if I use onClick the onBlur
            // will then be the first to fire and the event associated to onClick won't even fire
            onMouseDown={list ? this.handleAddList : this.handleAddTicket}
            variant="contained"
            style={{ color: "white", backgroundColor: "#5aac44" }}
          >
            {buttonTitle}
          </Button>
          <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
        </div>
      </div>
    );
  };

  render() {
    // conditional rendering of either the button or the form depending on the boolean state of formIsOpen
    return this.state.formIsOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  // styling the button
  inactiveAddButton: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    // width: 272
    position: "absolute",
    bottom: 0
  },

  // styling the form
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },

  expanded: {
    position: "absolute",
    left: "8px",
    right: "8px",
    boxSizing: "border-box",
    bottom: 8
  }
};

export default connect()(AddButton);
