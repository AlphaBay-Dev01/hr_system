import React, {useEffect,useState} from 'react'
import {request} from "../../util/helper"
import {Table,Button,Modal,Input} from 'antd'
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi"; 
import { IoPersonAddOutline } from "react-icons/io5";

import moment from 'moment'; // For date formatting
const Employee = () => {
  const [list, setList] = useState([])
  useEffect(()=>{
    getList();
  },[])
  const getList =async () =>{
    const res = await  request("info")
    if (res && res.list) {  
      setList(res.list);
  }  
  }

  // call button delete edit and view

  const onClickEdit = (data, item) => {
    console.log(data )
  }

  const onClickDelete = (data, item) => {
    console.log(data )
  }

  // call button add data
  const [state, setState] = useState({
    visibleModal: false,
    name: " ",
    gender: " ",
    dateOfBirth: " ",
    email: " ",
    phone: " ",
    dateView: " ", 
  });
  const onClickAdd = () => {
    setState({ 
      ...state,
      visibleModal: true });
  }

  const onCloseModal = () => {
    setState({ 
      ...state,
      visibleModal: false });
  }
  const onSave =   () => {
   const res = request("employeeprofile", "post")
  }

  return (
    <div>
      <Button type='primary' icon={<IoPersonAddOutline />} onClick={onClickAdd} >Add Data</Button>
      <Modal  open={state.visibleModal} title= "Add New Employee"  footer = {null} onCancel={onCloseModal} > 
      <div> 
          <Input onChange={(e) => setState({...state, name: e.target.value })} paddings="10px" type="text" placeholder="Name" />
          <Input onChange={(e) => setState({...state, gender: e.target.value })} paddings="10px" type="text" placeholder="Gender" />
          <Input onChange={(e) => setState({...state, dateOfBirth: e.target.value })} paddings="10px" type="date" placeholder="Date of Birth" />
          <Input onChange={(e) => setState({...state, email: e.target.value })} paddings="10px" type="text" placeholder="Email" />
          <Input onChange={(e) => setState({...state, phone: e.target.value })}  paddings="10px"type="text" placeholder="Phone" />
         <space className='mt-2'>
         <Button type='primary' >Cancel</Button>
         <Button onClick={onSave} style={{marginLeft: '3px'}} type='primary' >Save Data</Button>
         </space> 
      </div>
      </Modal> 
      {/* Employee{list?.length} */}
     <Table dataSource={list}
      columns = {[
        {
          key: "No",
          title: "No",
          render: (item, data,index) => <span>{list.indexOf(item) + 1}</span>,
        },
        {
          key: 'Name',
          title: "Name",
          dataIndex: 'Name',
        },
        {
          key: 'Gender',
          title: "Gender",
          dataIndex: 'Gender',
        },
        {
          key: 'DateOfBirth',
          title: "Date of Birth",
          dataIndex: 'DateOfBirth',
          render: (date) => {
            // Format the date to display only YYYY-MM-DD
            return date ? moment(date).format('YYYY-MM-DD') : 'N/A';
          },
        },
        {
          key: 'Email',
          title: "Email",
          dataIndex: 'Email',
        },
        {
          key: 'Phone',
          title: "Phone",
          dataIndex: 'Phone',
        },
        {
          key: 'DateView',
          title: "DateView",
          dataIndex: 'DateView',
          render: (date) => {
            // Format the date to display only YYYY-MM-DD
            return date ? moment(date).format('YYYY-MM-DD') : 'N/A';
          },
        },
        {
          key: "Action",
          title: "Action",
          align: "center",
          render: (item,data,index) =>(
            <space>
              <Button style={{marginRight: '3px'}} type='primary' View icon={<FiEdit />} onClick={() => onClickEdit( data, item)} />    
              <Button style={{marginRight: '3px'}} type='primary'  danger icon={<AiOutlineDelete />} onClick={() => onClickDelete(data, item)} /> 
            </space>
          )
        } 
      ]} />
    </div>
  )
}
export default Employee;

