import React, { useState } from 'react';
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { SlOrganization } from "react-icons/sl";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { BiSolidUserAccount } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineApi } from "react-icons/ai";
import { GiSecurityGate } from "react-icons/gi";
import { LiaUserShieldSolid } from "react-icons/lia"; 
import { FaCcMastercard } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { AiOutlineFileProtect } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { PiTreeStructureThin } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import './MainLayout.css'
import Profile from '../../images/Profile1.jpg'
import { RiMessengerLine } from "react-icons/ri";
import Logo from '../../images/Logo.png'

import {
  DesktopOutlined, 
  PieChartOutlined,
  TeamOutlined, 
} from '@ant-design/icons'; 
import { Breadcrumb, Layout, Menu, theme,Row,Col } from 'antd';
import {  Outlet } from 'react-router-dom'; 

const { Header, Content, Footer, Sider } = Layout;



const items = [ 
    {
        key: "/",
        label: "Dashboard",
        icon: <PieChartOutlined />,
        children: null 
    },  
    {
      key: "messenger",
      label: "Messenger",
      icon: <RiMessengerLine />,
    },
    {
      key: "calendar",
      label: "Calendar & Todos",
      icon: <RiMessengerLine />,
    },
    {
        key: "recruitment",
        label: "Recruitment",  
        icon: <DesktopOutlined />,
        children: [
          {
            key: "candidates",
            label: "Candidates",
            icon: <AiOutlineUserSwitch />,
          },
          {
            key: "career_Site",
            label: "Career_Site",
            icon: <MdWorkOutline />,
          },
          {
            key: "job",
            label: "Jobs",
            icon: <MdWorkOutline />,
          },
          {
            key: "my_referral",
            label: "My Referral",
            icon: <AiOutlineUserSwitch />,
          }, 
        ]
    }, 
    {
      key: "Organization",
      label: "Organization",
      icon: <SlOrganization />,
      children: [
        {
          key: "structure",
          label: "Strucutre",
          icon: <TeamOutlined />,
        }, 
        {
          key: "employee",
          label: "Employee",
          icon: <RiTeamLine />,
          children: null,
        },
        {
          key: "report",
          label: "Report",
          icon: <HiOutlineDocumentReport />,
        },
       ]

    },
    {
      key: "finance",
      label: "Finance",
      icon: <HiOutlineBanknotes />,
      children: [
        {
          key: "billing",
          label: "Billing",
          icon: <AiOutlineFileProtect />,
        },
        {
          key: "invoices",
          label: "Invoices",
          icon: <LiaFileInvoiceDollarSolid />,
        },
        {
          key: "payroll",
          label: "Payroll",
          icon: <FaCcMastercard />,
        }, 
      ]
    },
    
    {
      key: " ",
      label: "Department",
      icon: <TeamOutlined />,
      children: [
        {
          key: "admin_hr",
          label: "HR Admin",
          icon: <SlOrganization />,
        },
        {
          key: "it_team",
          label: "IT Team",
          icon: <SlOrganization />,
        },
        {
          key: "cs_bank",
          label: "CS Bank",
          icon: <HiOutlineBanknotes />,
        },
        {
          key: "finance_account",
          label: "Finance Account",
          icon: <BiSolidUserAccount />,
        },
        {
          key: "property_mg",
          label: "Property_MG",
          icon: <IoHomeOutline />,
        },
        {
          key: "sale_marketing",
          label: "Sale Marketing",
          icon: <AiOutlineApi />,
        },
        {
          key: "security",
          label: "Security",
          icon: <GiSecurityGate />,
        },
        {
          key: "users",
          label: "User",
          icon: <LiaUserShieldSolid />,
        },

           
        
      ],
      
    }, 
    {
      key: "report",
      label: "Report",
      icon: <HiOutlineDocumentReport />,
      children: null
    },
    {
      key: "chart",
      label: "Chart",
      icon: <PieChartOutlined />,
      children: null
    },
    {
      ket: "table",
      label: "Table",
      icon: <PiTreeStructureThin />,
      children: null
    }
    
   
];

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
const navigate = useNavigate();
  const onClickMenu = (item) =>{
    
     navigate(item.key)
  }
  return (
    <Layout
      style={{
        padding: '0px',
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} onClick={onClickMenu} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{ 
            padding: 0,
            background: colorBgContainer,
            backgroundColor: '#19579169',  
            
          }} >
           <div style={{ display: 'flex', justifyContent: 'right', padding: '0 16px' }}>
               <img className='profile-image' src={Profile} alt="logo" style={{ width: '50px' , borderRadius: '50%', margin: '8px 0',}} />
            </div>
        </Header>
        <Content
          style={{
            margin: '16px 16px',
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item >
              <UserOutlined />  User
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <FileOutlined /> 
            </Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            style={{
              padding: 10,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
            ©{new Date().getFullYear()} Created by  
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
