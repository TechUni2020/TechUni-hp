import {Container} from "react-bootstrap";
import React from "react";

function NotFound() {
  return (
          <div>
            <Container fluid className="resume-section" style={{width: "100vw"}}>
              <h1 className="notfound-heading">
                <strong>Not Found.</strong>
              </h1>
              <p className="notfound-description">
                お探しのページは削除、変更されたか、現在利用できない可能性があります。
              </p>
            </Container>
          </div>
  );
}

export default NotFound;
