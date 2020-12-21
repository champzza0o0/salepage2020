import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "../styles/Home.module.scss";

export default class Testimonial extends Component {
  render() {
    return (
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className={styles.texttheme}>Testimonial</h1>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col xs={3}>
            <Image src="book.jpg" fluid />
          </Col>
          <Col className="bg-gray" xs={9}>
            <p>Aute ut irure aliquip laborum non tempor in sint fugiat amet.</p>
            <p className="text-center">คุณตังเมย์</p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12} md={4}>
            <Image src="sale product-01.jpg" thumbnail />
          </Col>
          <Col xs={12} md={4}>
            <Image src="sale product-01.jpg" thumbnail />
          </Col>
          <Col xs={12} md={4}>
            <Image src="sale product-01.jpg" thumbnail />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={12} md={4}>
            <Image src="sale product-01.jpg" thumbnail />
          </Col>
          <Col xs={12} md={4}>
            <Image src="sale product-01.jpg" thumbnail />
          </Col>
          <Col xs={12} md={4}>
            <Image src="sale product-01.jpg" thumbnail />
          </Col>
        </Row>
      </Container>
    );
  }
}
