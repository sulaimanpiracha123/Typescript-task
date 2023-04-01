import React,{useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import { getUsers } from '../Services/apiServices';
import { useQuery } from 'react-query';

type Users = {
  id:number,
  name:string,
  username:string,
  email:string,
  street:string,
  address:any,
  suite:string,
  city: string,
  zipcode:number,
  lat:any,
  lng:any,

}
const Userlist = () => {


  const {data,isLoading,} = useQuery
  <Users[]>
  ({
    // queryKey:['users'],
    queryFn:getUsers

  })
  if(isLoading){
    return <span>Loading--------</span>
  }

  console.log("Response Data",data)

  return (
    <>
          <h1>Users </h1>

    <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Street</th>
        <th>Suite</th>
        <th>City</th>
        <th>ZipCode</th>
        <th>Lat</th>
        <th>Lng</th>




      </tr>
    </thead>
    <tbody>
        {data?.map((item,index:number) =>{
          return(
            <tr key= {index} >
            
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.address?.street}</td>
            <td>{item.address?.suite}</td>
            <td>{item.address?.city}</td>
            <td>{item.address?.zipcode}</td>
            <td>{item.address?.geo?.lat}</td>
            <td>{item.address?.geo?.lng}</td>

            </tr>
            
          )

        })}
    
    </tbody>
  </Table>
    
    </>
  )
}

export default Userlist