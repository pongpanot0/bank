import React, { Component } from 'react'
import { Button, Jumbotron } from 'reactstrap';
import Slides from './Slides';

export default class Home extends Component {
    render() {
        return (
            <div>
                
                <div class="city"> <Slides/> </div>
               <Jumbotron>
                <h1>ยินดีต้อนรับสู่เว็บไซต์</h1>
                <p>จัดทำโดย นายพงศ์ปณต สมัครการ</p>
                
                </Jumbotron>
            </div>
        )
    }
}
