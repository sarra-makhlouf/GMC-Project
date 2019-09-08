import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import { Card, Button } from "@material-ui/core";
import Textarea from "react-textarea-autosize";
import { connect } from "react-redux";
import { addList } from "../actions";

// A reusable component that can be used to either add lists or tickets "depending on the prop recieved"
class AddButton extends Component {
  state = {
    formIsOpen: false,
    text: ""
  };

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
      dispatch(addList(text));
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
        onClick={this.openForm}
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
      <div>
        <Card
          style={{
            minHeight: 85,
            minWidth: 272,
            padding: "6px 8px 2px"
          }}
        >
          {/* using the react-textarea-autosize npm package 
            to allow the height of the text area to grow automatically */}
          <Textarea
            placeholder={placeHolder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
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
            onMouseDown={this.handleAddList}
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
    width: 272
  },

  // styling the form
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between"
  }
};

export default connect()(AddButton);
