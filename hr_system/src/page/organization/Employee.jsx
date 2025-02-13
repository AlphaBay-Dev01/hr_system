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
  const onSave = async  () => {
   const res = request("employeeprofile", "post",data)
   console.log(res)
  }

  return (
    <div>
      <Button type='primary' icon={<IoPersonAddOutline />} onClick={onClickAdd} >Add Data</Button>
      <Modal  open={state.visibleModal} title= "Add New Employee"  footer = {null} onCancel={onCloseModal} > 
      <div> 
          <Input onChange={(e) => setState({...state, name: e.target.value })} paddings="10px" type="text" placeholder="Name" />
          <Input onChange={(e) => setState({...state, gender: e.target.value })} paddings="10px" type="text" placeholder="Gender" />
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

