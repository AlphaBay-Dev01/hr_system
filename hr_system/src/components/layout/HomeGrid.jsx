import React from 'react';
// import './HomeGrid.css';
import {Row,Col} from 'antd'
const HomeGrid = ({ name, genders, age, email, phone }) => {
    console.log(name, genders, age, email, phone);
    return (
        <div className="home-grid">
             <Row gutter={[16, 16]}>
 
    <Col xs={24} sm={24} md={24} xl={24}>
            <div className="grid-item">Name: {name}</div>
            <div className="grid-item">Gender: {genders}</div>
            <div className="grid-item">Age: {age}</div>
            <div className="grid-item">Email: {email}</div>
            <div className="grid-item">Phone: {phone}</div>
            </Col> 
   </Row>
        </div>
    );
};

export default HomeGrid;




