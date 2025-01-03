import React from "react";
import {Container, Table} from "react-bootstrap";

function History(props) {
  return (
          <Container fluid className="about-section">
            <Container>
              <h1 className="project-heading">
                Our <strong className="purple">History in {props.year}</strong>
              </h1>
              <p style={{ color: "black" }}>
                Here are history of「Tech.Uni」and its activities in {props.year}
              </p>
              <Table striped bordered hover className="history-table">
                <tbody>
                  {props.children}
                </tbody>
              </Table>
            </Container>
          </Container>
  );
}

function HistoryColumn(props) {
  return (
    <tr>
      <td className="history-year">{props.date}</td>
      <td>{props.children}</td>
    </tr>
  );
}

export {History, HistoryColumn};