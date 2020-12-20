import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
export default class Product extends Component {
  render() {
    return (
      <Row className="my-3">
        <Col xs={12} md={3} className={styles.borderproduct1}>
          <Image src={this.props.source} fluid />
        </Col>
        <Col xs={12} md={9} className={styles.borderproduct}>
          <h3 className={styles.texttheme}>{this.props.head}</h3>
          <p>{this.props.texts}</p>
        </Col>
      </Row>
    );
  }
}
