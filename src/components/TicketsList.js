import React from "react";
import Ticket from "./Ticket";

const TicketsList = ({ title, tickets }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {tickets.map(ticket => (
        <Ticket text={ticket.text} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8
  }
};

export default TicketsList;
