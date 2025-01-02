import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import AROOMS from "../../assets/Projects/AROOMS.webp";
import Cafe from "../../assets/Projects/Cafe.webp";
import Codepick from "../../assets/Projects/Codepick.webp";
import FeverMonitor from "../../assets/Projects/FeverMonitor.webp";
import Itimai from "../../assets/Projects/Itimai.webp";
import OldLens from "../../assets/Projects/OldLens.webp";
import Online from "../../assets/Projects/Online.webp";
import ProTain from "../../assets/Projects/ProTain.webp";
import ProTask from "../../assets/Projects/ProTask.webp";
import SubsManager from "../../assets/Projects/SubsManager.webp";
import TechBoard from "../../assets/Projects/TechBoard.webp";
import TechInterview from "../../assets/Projects/TechInterview.webp";
import TechUni from "../../assets/Projects/TechUniBanner.webp";

import AROOMSAlt from "../../assets/Projects/AROOMS.jpg";
import CafeAlt from "../../assets/Projects/Cafe.png";
import CodepickAlt from "../../assets/Projects/Codepick.png";
import FeverMonitorAlt from "../../assets/Projects/FeverMonitor.png";
import ItimaiAlt from "../../assets/Projects/Itimai.jpg";
import OldLensAlt from "../../assets/Projects/OldLens.png";
import OnlineAlt from "../../assets/Projects/Online.png";
import ProTainAlt from "../../assets/Projects/ProTain.png";
import ProTaskAlt from "../../assets/Projects/ProTask.png";
import SubsManagerAlt from "../../assets/Projects/SubsManager.png";
import TechBoardAlt from "../../assets/Projects/TechBoard.png";
import TechInterviewAlt from "../../assets/Projects/TechInterview.png";
import TechUniAlt from "../../assets/Projects/TechUniBanner.png";



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
              imgAltPath={TechUniAlt}
              isCode={true}
              title="Tech.Uni Webサイト"
              description="IT系学生団体Tech.Uniのホームページ。メンバーとのチーム開発で日々アップデートを行う予定です"
              category="webサイト"
              frontend="React"
              author="井手翔陽、テザー"
              link="https://github.com/TechUni2020/TechUni-hp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProTask}
              imgAltPath={ProTaskAlt}
              isCode={false}
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
              imgAltPath={ProTainAlt}
              isCode={false}
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
              imgAltPath={TechInterviewAlt}
              isCode={true}
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
              imgPath={FeverMonitor}
              imgAltPath={FeverMonitorAlt}
              isCode={false}
              title="FeverMonitor"
              description="体温の変化をより視覚的に表示したり、設定された時間に体温を計測するようにお知らせします。ヘルスケアアプリと連携して簡単に体温を記録できます。"
              category="スマホアプリ"
              frontend="Swift"
              backend="SwiftUI" //backendではないけど(変数名変えよかな)
              author="高橋由"
              link="https://iapp.devel.jp/mobile/m-01/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SubsManager}
              imgAltPath={SubsManagerAlt}
              isCode={false}
              title="SubsManager"
              description="煩雑になりがちなサブスクリプション管理をよりスマートに。指定された日時にお支払日や料金をお知らせします。"
              category="スマホアプリ"
              frontend="Swift"
              backend="SwiftUI"
              author="高橋由"
              link="https://iapp.devel.jp/mobile/m-02/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TechBoard}
              imgAltPath={TechBoardAlt}
              isCode={false}
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Codepick}
              imgAltPath={CodepickAlt}
              isCode={false}
              title="Codepick"
              description="プログラミングソースコード売買プラットフォーム
              Githubはライブラリのソースコードが多く、実際サービスとして動くコードがなかなか見つけられません。codepickは実際サービスとして動いているコードを対象にしGithubとは別の視点でライブラリの選定から使用方法までも学べるプラットフォームを目指しています。
              "
              category="webアプリ"
              frontend="Next.js"
              backend="Rails"
              infra="Docker"
              author="河合賢伸"
              link="https://codepick.jp/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cafe}
              imgAltPath={CafeAlt}
              isCode={false}
              title="カフェの時間"
              description="カフェ好きのためのSNS、お店検索、カフェマップなどの機能があります。"
              category="スマホアプリ"
              frontend="Flutter"
              backend="Firebase"
              infra="Google Map API"
              author="成尾憙貴"
              link="https://apps.apple.com/jp/app/%E3%82%AB%E3%83%95%E3%82%A7%E3%81%AE%E6%99%82%E9%96%93/id1606655660"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Vividstudio}
              imgAltPath={VividstudioAlt}
              isCode={true}
              title="vividstudio"
              description="会議ツール(web , モバイルを兼用可能)"
              category="webアプリ/スマホアプリ"
              frontend="Flutter"
              backend="Firebase"
              infra="Vue.js"
              author=""
              link="https://github.com/jphacks/B_2107"
            />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AROOMS}
              imgAltPath={AROOMSAlt}
              isCode={false}
              title="関西の学院大学空き教室検索サイトAROOM"
              description="大学の空き教室を5秒で検索するサイト"
              category="webアプリ"
              frontend="Ruby on rails"
              author="中西直人"
              link="https://arooms.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Itimai}
              imgAltPath={ItimaiAlt}
              isCode={false}
              title="Itimai"
              description="見せたいけど見せたくない写真を共有するサイト"
              category="webアプリ"
              frontend="Ruby on rails"
              author="中西直人"
              link="https://itimaiweb.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OldLens}
              imgAltPath={OldLensAlt}
              isCode={true}
              title="オールドレンズの解析"
              description="Pythonを用いたオールドレンズのシミュレーションをして光学の理解を深めた。
              課題:
              1.色消しレンズであることの判定が雑なこと
              2.球面レンズの計算のみを考えて、非球面の計算を実装していないこと
              3.SCHOTT社のガラスデータのみで計算したこと
              4.各屈折面の計算を一般化しなかったのでコードが冗長なこと(JavaScriptで、2次元の場合については一般化しました"
              category="研究"
              frontend="Python 3.6"
              backend="numpy"
              infra="matplotlib"
              author="小鹿哲雅"
              link="https://github.com/OAkimasa/optics_135mm_macro"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Online}
              imgAltPath={OnlineAlt}
              isCode={false}
              title="オンライン実行環境"
              description="環境構築なしでブラウザでプログラムを実行できます。"
              category="webアプリ"
              frontend="Vue.js"
              backend="Go"
              infra="AWS ( S3 CloudFront ECS on EC2 etc )"
              author="山岡朋樹"
              link="https://www.code-run.ga/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
