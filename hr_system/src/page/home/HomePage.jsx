
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import { request } from '../../util/helper'; 
import HomeGrid from '../../components/layout/HomeGrid'; 
import {Row,Col} from 'antd'
const HomePage = () => {
    const [home, setHome] = useState([]); // Initialize state 
    useEffect(() => {
      getList();
    }, []); // Runs once on mount 
   const getList = async () => {
    const res = await request("Home", "get");
    if (res && res.list) {
        console.log(res.list);
        res.list.forEach(item => console.log(item));
        setHome(res.list);
    }  
};

    return (
        <div>
            <div>
                <Row gutter={[16, 16]}>

            {home.map((item, index) => (  
                <Col xs={24} sm={12} md={8} xl={6}>
                <HomeGrid 
                    key={index} // Add a unique key
                    name={item.name} 
                    genders={item.gender} 
                    age={item.age} 
                    email={item.email} 
                    phone={item.phone} 
                />
                </Col>
                    ))} 
   </Row>
            </div> 
        </div>
    );
}; 
export default HomePage;
