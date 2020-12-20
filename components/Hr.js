import React from "react";
import styles from "../styles/Home.module.scss";
import { Row, Col } from "react-bootstrap";
export default function Hr() {
  return (
    <Row>
      <Col xs={3}></Col>
      <Col xs={6}>
        <hr className={styles.new5}></hr>
      </Col>
      <Col xs={3}></Col>
    </Row>
  );
}
