import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            รายละเอียดหลักสูตร
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
           ชั่วโมงเรียน
          </NavLink>
        </NavItem>
       
       
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        <div class="media">
            <div class="media-body">
              <h5 class="mt-0 mb-1"> <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ระบบวิศวกรรมสำหรับช่างที่ควรรู้ </h5>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;หลักสูตรสำหรับช่างใหม่ และหลากหลายคำถามระบบการทำงานที่มี
                 </div>
            <img class="ml-3" idth="256" height="186" src="./images/em2.png" alt="Generic placeholder image" />
          </div>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>&nbsp;&nbsp;&nbsp;&nbsp;ตามมาตราฐานของกรมฝีมือแรง</CardTitle>
                <CardText>&nbsp;&nbsp;กำหนดให้ใช้เวลาในการอบรมรวมกันทั้งหมด 6 ชั่วโมงเรียน</CardText>

              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
          
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="6">
              <Card body>
              <CardTitle><h5>&nbsp;&nbsp;&nbsp;&nbsp;ตามมาตราฐานของกรมฝีมือแรง</h5></CardTitle>
                <CardText>&nbsp;&nbsp;กำหนดให้ใช้เวลาในการอบรมรวมกันทั้งหมด 6 ชั่วโมงเรียน</CardText>
              </Card>
            </Col>
          </Row>
          
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
          
        </TabPane>
      </TabContent>
      
    </div>
  );
}

export default Example;