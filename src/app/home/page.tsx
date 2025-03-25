"use client";
import { getEmployee ,getEmployeeById} from '@/api/api.service';
import { Button, Modal, Table } from 'antd';
import React, { use, useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [page,setPage] = useState(1)
  const [limit,setLimit] = useState(10)
  const [search,setSearch] = useState('')
  const [employeeList,setEmployeeList] = useState([])
  const [openModal,setOpenModal] = useState(false)
  const [employeeDetail,setEmployeeDetail] = useState<any>({})

useEffect(()=>{
fetchEmployee()
},[page,search])
const fetchEmployee = async ()=>{
  const res = await getEmployee({limit,page,search})
  setEmployeeList(res.data)
}

const handleClickEmpDetail = async( id:string)=>{
 setOpenModal(true)
 const res = await getEmployeeById(id)
  setEmployeeDetail(res.data)
}
const columns =[
  {
    title :"ไอดีพนักงาน",
    dataIndex:"id",
    key:"id",
  },

  {
    title :"รหัสพนักงาน",
    dataIndex:"code",
    key:"code",
  },
  {
    title :"ชื่อพนักงาน",
    dataIndex:"first_name",
    key:"first_name",
  },
  {
    title :"นาทสกุลพนักงาน",
    dataIndex:"last_name",
    key:"last_name",
  },
  {
    title :"ชื่อตำแหน่ง",
    dataIndex:"position_name",
    key:"position_name",
  },
  {
    title :"เบอร์โทร",
    dataIndex:"phone_no",
    key:"phone_no",
  },
  {
    title :"อีเมล",
    dataIndex:"email",
    key:"email",
  },
  {
    title:'วันที่เริ่มงาน',
    dataIndex:'start_date',
    key:'start_date',
  },
  {
  title:'action',
  render:(record:any)=>(
    <div>
      <Button type="primary" onClick={()=>handleClickEmpDetail(record.id)}>detail</Button>
    </div>
  )

  }

  
]

  return (
    <div>
    <Table columns={columns}
    rowKey={(record:any)=>record.id}
    dataSource={employeeList}
    pagination={{
      position:['bottomCenter'],
      current:page,
      pageSize:limit,
    }}
    >
      
    </Table>
    <Modal 
    open={openModal}
    onCancel={()=>setOpenModal(false)}
    onOk={()=>setOpenModal(false)}
    >
      
      <span className='font-bold'>ไอดีพนักงาน</span>
      <div>{employeeDetail.id}</div>
      <span className='font-bold'>รหัสพนักงาน</span>
      <div>{employeeDetail.code}</div>
      <span className='font-bold'>ชื่อพนักงาน</span>
      <div>{employeeDetail.first_name}</div>
      <span className='font-bold'>นามสกุลพนักงาน</span>
      <div>{employeeDetail.last_name}</div>
      <span className='font-bold'>ชื่อตำแหน่ง</span>
      <div>{employeeDetail.position_name}</div>
      <span className='font-bold'>เบอร์โทร</span>
      <div>{employeeDetail.phone_no}</div>
      <span className='font-bold'>อีเมล</span>
      <div>{employeeDetail.email}</div>
      <span className='font-bold'>วันที่เริ่มงาน</span>
      <div>{employeeDetail.start_date}</div>

    </Modal>
    </div>
  );
};

export default HomePage;