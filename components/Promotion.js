import React, { Component } from "react";
import styles from "../styles/Home.module.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
export default class Promotion extends Component {
  render() {
    return (
      <Container fluid className={styles.bgtheme}>
        <Container>
          <Row className="pt-4">
            <Col xs={12}>
              <h1 className="text-center text-white">Promotion</h1>
            </Col>
          </Row>
          <Row className="px-3 py-3">
            <Col xs={12} md={4}>
              <Image src="sale product-05.jpg" fluid></Image>
            </Col>
            <Col xs={12} md={4}>
              <Image src="sale product-06.jpg" fluid></Image>
            </Col>
            <Col xs={12} md={4}>
              <Image src="sale product-07.jpg" fluid></Image>
            </Col>
          </Row>
          <Row className="px-3 py-3">
            <Col xs={12} md={6}>
              <Image src="sale product-08.jpg" fluid></Image>
            </Col>
            <Col xs={12} md={6}>
              <Image src="sale product-09.jpg" fluid></Image>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
