import React from "react";
import {Container, Table} from "react-bootstrap";
import {MdEdit} from "react-icons/md";

function History(props) {
  return (
          <section>
            <Container fluid className="about-section">
              <Container>
                <h1 className="project-heading">
                  Our <strong className="purple">History in {props.year}</strong>
                </h1>
                <p style={{color: "black"}}>
                  Here are history of「Tech.Uni」and its activities in {props.year}
                </p>
                <Table striped bordered hover className="history-table">
                  <tbody>
                    {props.children}
                  </tbody>
                </Table>
              </Container>
            </Container>
          </section>
  );
}

function EditingHistory(props) {
  return (
          <section>
            <Container fluid className="about-section">
              <Container>
                <h1 className="project-heading">
                  Our <strong className="purple">History in {props.year}</strong>
                </h1>
                <p style={{color: "black"}}>
                  Here are history of「Tech.Uni」and its activities in {props.year}
                </p>
                <p style={{color: "black", marginTop: "4rem", fontSize: "1.5rem"}}>
                  <MdEdit/> &nbsp;Editing...
                </p>
              </Container>
            </Container>
          </section>
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

export {History, EditingHistory, HistoryColumn};