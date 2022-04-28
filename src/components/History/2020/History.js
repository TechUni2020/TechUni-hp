import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

function History() {
    return (
        <Container fluid className="about-section">
            <Container>
                <h1 className="project-heading">
                    Our <strong className="purple">History in 2020</strong>
                </h1>
                <p style={{color: "black"}}>
                    Here are history of 「Tech.Uni」 and its activities in 2020
                </p>
                <Table striped bordered hover>
                    <tbody>
                    <tr>
                        <td>2020.10.26</td>
                        <td>Tech.Uni創設</td>
                    </tr>
                    <tr>
                        <td>2020.11</td>
                        <td>関西学院大学社会連携センターとの正式連携</td>
                    </tr>
                    <tr>
                        <td>2020.12</td>
                        <td>初学者・中級者・開発者クラスの活動開始</td>
                    </tr>
                    <tr>
                        <td>2021.1</td>
                        <td>レッドインパルス株式会社様主催 Firebase ハッカソン出場→技術部門にて最優秀賞獲得</td>
                    </tr>
                    <tr>
                        <td>2021.1</td>
                        <td>コミッティー（幹部）形成</td>
                    </tr>
                    <tr>
                        <td>2021.2</td>
                        <td>関西学院大学情報メディアサークル様と提携</td>
                    </tr>
                    <tr>
                        <td>2021.3</td>
                        <td>技育祭にて400名の学生の前で1名がLT登壇</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>関西学院大学AI活用ワークショッププロトタイプ部門セッションにて1名が登壇</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>KC3ハッカソンにて1名が出場</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>KC3(関西情報系学生団体交流会)に加盟</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>株式会社ABABA様と提携</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>株式会社ABABA様とノーコードイベントを実施（300名超の応募 / 90%以上の満足度を獲得）</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>KSC（関西学院大学神戸三田キャンパス）での団体紹介に登壇</td>
                    </tr>
                    <tr>
                        <td>2021.3</td>
                        <td>ProTask(関西学院大学専用課題管理アプリ)リリース</td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </Container>
    );
}

export default History;
