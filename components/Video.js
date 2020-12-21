import React, { Component } from "react";
import styles from "../styles/Home.module.scss";
import { Container, Row, Col, Image, ResponsiveEmbed } from "react-bootstrap";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
export default class Video extends Component {
  render() {
    return (
      <Container>
        <Row className="pt-4">
          <Col xs={12}>
            <h1 className={styles.texttheme}>คู่มือการใช้งานผลิตภัณฑ์</h1>
          </Col>
        </Row>
        <Row className="px-3 py-3">
          <Col xs={12} md={8}>
            <Row>
              <Col xs={12} md={6}>
                <ResponsiveEmbed className="mx-3 my-3" aspectRatio="16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/mncdDAv4evw"
                  ></iframe>
                </ResponsiveEmbed>
                <ResponsiveEmbed className="mx-3 my-3" aspectRatio="16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/mncdDAv4evw"
                  ></iframe>
                </ResponsiveEmbed>
              </Col>
              <Col xs={12} md={6}>
                <ResponsiveEmbed className="mx-3 my-3" aspectRatio="16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/mncdDAv4evw"
                  ></iframe>
                </ResponsiveEmbed>
                <ResponsiveEmbed className="mx-3 my-3" aspectRatio="16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/mncdDAv4evw"
                  ></iframe>
                </ResponsiveEmbed>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <Image src="sale product-07.jpg" fluid></Image>
          </Col>
        </Row>
      </Container>
    );
  }
}
