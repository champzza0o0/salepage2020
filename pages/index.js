import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Container, Row, Col, Image, ResponsiveEmbed } from "react-bootstrap";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import Hr from "../components/Hr";
import List from "../components/List";
import Product from "../components/Product";
import Promotion from "../components/Promotion";
import Testimonial from "../components/Testimonial";
import Video from "../components/Video";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Habitscan Shop</title>
        <link rel="icon" href="logo.jpg" />
      </Head>
      <Container>
        <Row>
          <Col xs={12} md={2}>
            <Image className={styles.piclogo} src="logo.jpg" thumbnail />
          </Col>
          <Col xs={12} md={10}>
            <h2 className={styles.texttheme}>Habitscan.Shop</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Image src="cover.jpg" fluid />
            <h2 className="text-center my-4">หาตัวตนที่ใช่สำหรับคุณ ?</h2>
            <h2 className="text-center my-3">Habitscan ช่วยคุณได้</h2>
            <ResponsiveEmbed aspectRatio="16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/mncdDAv4evw"
              ></iframe>
            </ResponsiveEmbed>
          </Col>
        </Row>
        <Hr />
        <Testimonial />
        <Hr />
        <Row className="my-4">
          <Col>
            <h2 className="text-theme">HABITScan เหมาะสำหรับใคร</h2>
          </Col>
        </Row>
        <Row className="my-4">
          <Col xs={12} md={6}>
            <List name="ผู้รักการพัฒนาตัวเอง" />
            <List name="ผู้บริหาร" />
            <List name="นักธุรกิจ" />
            <List name="ผู้จัดการฝ่ายบุคคล" />
          </Col>
          <Col xs={12} md={6}>
            <List name="ครู" />
            <List name="ผู้ปกครอง" />
            <List name="นักเรียน/นักศึกษา" />
          </Col>
        </Row>
        <Hr />
        <Row>
          <Col>
            <h1 className="text-center">Our Product</h1>
          </Col>
        </Row>
        <Product
          source="sale product-01.jpg"
          head="HABITScan Personality type test"
          texts="แบบทดสอบบุคลิกภาพและประเมินสมรรถภาพรายบุคคล"
        />
        <Product
          source="sale product-02.jpg"
          head="คู่มืออ่านใจคนขั้นเทพ HABITS BOOK"
          texts="หนังสือคู่มืออ่านใจคน"
        />
        <Product
          source="sale product-03.jpg"
          head="HABITScan CARD"
          texts="การ์ดทายนิสัย"
        />
        <Product
          source="sale product-04.jpg"
          head="สมุดโตแล้วไปไหน"
          texts="แบบฝึกหัดค้นพบตัวเองเพื่อความชัดเจนในอาชีพ"
        />
      </Container>
      <Promotion />
      <Video />
      <Footer />
    </div>
  );
}
