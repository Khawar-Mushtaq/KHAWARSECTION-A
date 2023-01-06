import React from 'react'
import { useQuery } from "react-query";
import { Table } from 'reactstrap';
import EducationalDeleteModel from './EducationalDeleteModel';
import EducationalUpdateModel from './EducationalUpdateModel';
const Tableeducational = () => {
    const getFacts = async () => {
        const res = await fetch('http://localhost:3005/comments');
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
        <th>DegreeTitle</th>
        <th>Degree</th>
        <th>Major Subjects</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Obtain Marks</th>
        <th>Total Marks</th>
        <th>Division</th>
        <th>University</th>
      </tr>
    </thead>
    <tbody>
    <p>{data.id}</p>
      {
        data.map((data) => {
          return (
            <tr>
              <td>{data.degreetitle}</td>
              <td>{data.degree}</td>
              <td>{data.Major}</td>
              <td>{data.startdate}</td>
              <td>{data.enddate}</td>
              <td>{data.obtain}</td>
              <td>{data.Total}</td>
              <td>{data.division}</td>
              <td>{data.University}</td>
              <td><EducationalUpdateModel/></td>
              <td><EducationalDeleteModel/></td>
            </tr>
          )
        })
      }
    </tbody>
  </Table>
    </div>
  )
}

export default Tableeducational