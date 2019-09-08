import React from "react";
import Ticket from "./Ticket";
import AddButton from "./AddButton";

const TicketsList = ({ title, tickets }) => {
  return (
    <div style={styles.container}>
      <h4>{title.toUpperCase()}</h4>
      {tickets.map(ticket => (
        <Ticket text={ticket.text} key={ticket.id} />
      ))}
      <AddButton />
    </div>
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
