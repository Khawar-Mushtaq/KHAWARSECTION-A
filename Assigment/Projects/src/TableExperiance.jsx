import React from 'react'
import { useQuery } from "react-query";
import { Table } from 'reactstrap';
const TableExperiance = () => {
    const getFacts = async () => {
        const res = await fetch('http://localhost:3005/experiances');
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
        <th>OrganizationName</th>
        <th>Designation</th>
        <th>Start Date</th>
        <th>End Date</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map((data) => {
          return (
            <tr>
              <td>{data.OrganizationName}</td>
              <td>{data.Designation}</td>
              <td>{data.startdate}</td>
              <td>{data.enddate}</td>
            </tr>
          )
        })
      }
    </tbody>
  </Table>
    </div>
  )
}

export default TableExperiance