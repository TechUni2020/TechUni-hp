import React from "react";
import { Container, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiFillInstagram, AiOutlineTwitter, } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";
import homeLogo from "../../assets/TechUni.png";

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
              <td>代表</td>
              <td>
                岡 和寛 <br></br> (関西学院大学・工学部2年)
              </td>
            </tr>
            <tr>
              <td>副代表</td>
              <td>
                櫻井 絵理香 <br></br> (京都産業大学・情報理工学部2年)
              </td>
            </tr>
            <tr>
              <td>活動内容</td>
              <td>ハッカソンの運営・勉強会運営・web・アプリ開発、ITコミュニティの運営</td>
            </tr>
            <tr>
              <td>メンバー</td>
              <td>約190名(2024年10月現在)</td>
            </tr>
            <tr>
              <td>広報支援機構</td>
              <td>関西学院大学研究推進社会連携機構 社会連携センター</td>
            </tr>
            <tr>
              <td>顧問</td>
              <td>木本 圭一 <br></br>（関西学院大学 国際学部教授）</td>
            </tr>
            <tr>
              <td>技術アドバイザー</td>
              <td>巳波 弘佳<br></br>（関西学院大学 副学長工学部教授・情報化推進機構長）</td>
            </tr>
            <tr>
              <td>参加交流団体</td>
              <td>KC3</td>
            </tr>
            <tr>
              <td>SNS</td>
              <td><AiOutlineTwitter />&thinsp;<a href="https://twitter.com/TechUni1026">TechUni1026</a>
                &emsp;<AiFillInstagram />&thinsp;<a href="https://www.instagram.com/tech_uni1026/">tech_uni1026</a>
              </td>
            </tr>
          </tbody>
        </Table>
        <h1 className="project-heading">
          Our <strong className="purple">History </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are  history of 'Tech.Uni' and its activities..
        </p>
        <Button variant="enroll" href="/history/2020">
          <BiBookOpen /> &nbsp;2020年度
        </Button>
        <Button variant="enroll" href="/history/2021">
          <BiBookOpen /> &nbsp;2021年度
        </Button>
      </Container>
    </Container>
  );
}

export default About;
