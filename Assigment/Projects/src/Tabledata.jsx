import React from 'react'
import { useQuery } from "react-query";
import { Table } from 'reactstrap';
import PersonalDeleteModel from './PersonalDeleteModel';
import PersonalUpdateModel from './PersonalUpdateModel';
const Tabledata = () => {
    const getFacts = async () => {
        const res = await fetch('http://localhost:3005/posts');
        return res.json();
      };
      
      console.log(getFacts);
      const { data, error, isLoading } = useQuery('randomFacts', getFacts);
      if (error) return <div>Request Failed</div>;
      if (isLoading) return <div>Loading...</div>;
      console.log(JSON.stringify(data));
  return (
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>FirstName</th>
          <th>MiddleName</th>
          <th>LastName</th>
          <th>fatherName</th>
          <th>mobile</th>
          <th>gender</th>
          <th>phone</th>
          <th>dateofBirth</th>
          <th>birthplace</th>
          <th>maerialstatus</th>
          <th>postalAddress</th>
          <th>pernanentAddress</th>
          <th>religion</th>
          <th>nationality</th>
        </tr>
      </thead>
      <tbody>
      <p>{data.id}</p>
        {
          data.map((data) => {
            return (
              <tr>
                <td>{data.first}</td>
                <td>{data.middle}</td>
                <td>{data.last}</td>
                <td>{data.fatherName}</td>
                <td>{data.mobile}</td>
                <td>{data.gender}</td>
                <td>{data.phone}</td>
                <td>{data.dateofBirth}</td>
                <td>{data.birthplace}</td>
                <td>{data.maerialstatus}</td>
                <td>{data.postalAddress}</td>
                <td>{data.pernanentAddress}</td>
                <td>{data.religion}</td>
                <td>{data.nationality}</td>
                <td><PersonalUpdateModel/></td>
                <td><PersonalDeleteModel/></td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
    </div>
  )
}

export default Tabledata