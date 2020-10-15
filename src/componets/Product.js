import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
const Example = (props) => {
  return (
    <div class="container-fluid">
    <CardGroup>
      <Card>
      <float-right> <CardImg width="495" height="257" src="./images/ac.png" alt="Card image cap" /></float-right>
        <CardBody>
          <CardTitle>บัญชี</CardTitle>
          <CardText>เรียนรู้วิธีการรับเงินสด/เช็ค/เงินโอน การออกใบเสร็จรับเงินโดย QM-Soft และ QOS</CardText>
          <Button color="link"href="/Ac">เข้าสู่หลักสูตร</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg width="495" height="257" src="./images/en.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>วิศวกรรม</CardTitle>
          <CardText>หลักสูตรสำหรับช่างใหม่ และหลากหลายคำถามระบบการทำงานที่มี</CardText>
          <Button color="link"href="/En">เข้าสู่หลักสูตร</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg width="495" height="257" src="./images/lw.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>กฎหมาย</CardTitle>
          <CardText>หลักสูตรที่ผู้จัดการบ้านพลาดไม่ได้สำหรับข้อกฎหมายอาคารชุด/พรบ.จัดสรรที่ดิน</CardText>
          <Button color="link"href="/Lw">เข้าสู่หลักสูตร</Button>
        </CardBody>
      </Card>
    </CardGroup>
    
    </div>
    
  );
};

export default Example;