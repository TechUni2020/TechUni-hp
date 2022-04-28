import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProTain from "../../Assets/Projects/ProTain.png";
import ProTask from "../../Assets/Projects/ProTask.png";
import TechUni from "../../Assets/Projects/TechUni.png";
import TechInterview from "../../Assets/Projects/TechInterview.png";
import TechBoard from "../../Assets/Projects/TechBoard.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Our <strong className="purple">Products </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TechUni}
              isBlog={false}
              title="Tech.Uni Webサイト"
              description="Tech.Uniのwebサイトです。"
              category="webサイト"
              frontend="React"
              author="井手翔陽"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProTask}
              isBlog={false}
              title="ProTask"
              description="Lunaでの課題管理に不安や不満を持ち一ヶ月で開発。 リリース1ヶ月で1,000人ユーザーが利用を開始。 現在利用者数は3,500人を超える。"
              category="スマホアプリ"
              frontend="Flutter"
              backend="Node.js"
              infra="Firebase"
              author="井手翔陽"
              link="https://protaskg.studio.site/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProTain}
              isBlog={false}
              title="ProTain"
              description="近年新型コロナウイルス蔓延により「筋トレ」が流行した。 そこでTwitterやInstagramではなく筋トレに焦点を当てたSNS、いわば情報共有の場・モチベーション維持を支援するSNSアプリが欲しいと考え一ヶ月で開発。"
              category="スマホアプリ"
              frontend="Flutter"
              infra="Firebase"
              author="井手翔陽、池田紗穂"
              link="https://protain29.studio.site/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TechInterview}
              isBlog={false}
              title="Tech.面接"
              description="2021年JPHacksにてAward進出を果たし、クラスメソッド賞を獲得。AIによる表情認識/音声認識を用いて面接練習の効率化/アップデートを図る"
              category="webアプリ"
              frontend="Next.js"
              backend="Python"
              infra="GCP"
              author="井手翔陽、テザー、大島颯人、福山祐史、サンジャ、藤本優梨花"
              link="https://github.com/jphacks/B_2105_client"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TechBoard}
              isBlog={false}
              title="Tech.Board"
              description="オンラインホワイトボードwebアプリ。Tech.Uni内で使用できるツールとして開発。"
              category="webアプリ"
              frontend="Nuxt.js"
              backend="Kotlin"
              infra="Docker"
              author="井手翔陽、テザー"
              link="https://tech-board-tau.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
