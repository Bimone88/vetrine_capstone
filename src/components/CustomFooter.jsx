import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CustomFooter = () => {
  return (
    <footer
      className="text-light text-center py-4 foot fixed-bottom "
      style={{ backgroundColor: "#0085B5" }}
    >
      <Container>
        <Row className="mb-4">
          <Col>
            <i className="bi bi-facebook me-3 icon"></i>
            <i className="bi bi-twitter me-3 icon"></i>
            <i className="bi bi-instagram me-3 icon"></i>
            <i className="bi bi-youtube icon"></i>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="list-unstyled">
              <li>Audio and Subtitles</li>
              <li>Audio Description</li>
              <li>Help Center</li>
              <li>Gift Cards</li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>Media Center</li>
              <li>Investor Relations</li>
              <li>Jobs</li>
              <li>Terms of Use</li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>Privacy</li>
              <li>Legal Notices</li>
              <li>Cookie Preferences</li>
              <li>Corporate Information</li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>Contact Us</li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col>
            <p className="mb-2">Servizi agricoli</p>
            <p>&copy; 2024 Vetrine Agricole</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default CustomFooter;
