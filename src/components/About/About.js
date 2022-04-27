import React from "react";
import { Container, Table } from "react-bootstrap";
import homeLogo from "../../Assets/TechUni.svg";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import Button from "react-bootstrap/Button";
import {  BiBookOpen } from "react-icons/bi";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
      <h1 className="project-heading">
          Our <strong className="purple">About </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are about us.
        </p>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>正式名称</td>
            <td>Tech.Uni</td>
          </tr>
          <tr>
            <td>ロゴ</td>
            <td><img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "150px" }}
              /></td>
          </tr>
          <tr>
            <td>所在</td>
            <td>関西学院大学</td>
          </tr>
          <tr>
            <td>設立</td>
            <td>2020年10月26日</td>
          </tr>
          <tr>
            <td>主内容</td>
            <td>web・アプリ開発、ITコミュニティの運営</td>
          </tr>
          <tr>
            <td>メンバー</td>
            <td>約115名(2022年度)</td>
          </tr>
          <tr>
            <td>広報支援機構</td>
            <td>関西学院大学研究推進社会連携機構 社会連携センター</td>
          </tr>
          <tr>
            <td>顧問</td>
            <td>木本　圭一 (国際学部学部長・社会連携センターコーディネーター）</td>
          </tr>
          <tr>
            <td>技術アドバイザー</td>
            <td>巳波　弘佳(副学長工学部教授・情報推進機構長）</td>
          </tr>
          <tr>
            <td>参加交流団体</td>
            <td>KC3</td>
          </tr>
          <tr>
            <td>属性</td>
            <td>IT系学生団体</td>
          </tr>
          <tr>
            <td>SNS</td>
            <td><AiOutlineTwitter />&thinsp;@TechUni2016 &emsp;<AiFillInstagram/>&thinsp;@tech_uni1026</td>
          </tr>
        </tbody>
      </Table>
      <h1 className="project-heading">
        Our <strong className="purple">History </strong>
      </h1>
      <p style={{ color: "black" }}>
      Here are  history of 'Tech.Uni' and its activities..
      </p>
      <Button variant="enroll" href="/history/2020" target="_blank">
        <BiBookOpen /> &nbsp;2020年度
      </Button>
      <Button variant="enroll" href="/history/2021" target="_blank">
        <BiBookOpen /> &nbsp;2021年度
      </Button>
      </Container>
    </Container>
  );
}

export default About;
