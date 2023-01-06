import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Tableeducational from './Tableeducational';
const Eduactional = () => {

  const handlesubmit=(e)=>{
    e.preventDefault();
  }

  return (
    <div>
    <Form onSubmit={handlesubmit}>
    <Form.Label> Degree Title</Form.Label>
      <Form.Select name='Degreetitle' >
        <option>Open this select menu</option>
        <option >Matric</option>
        <option >Intermediate</option>
        <option >Bechalor's</option>
        <option >Master</option>
      </Form.Select>
      <Form.Label>Select Degree</Form.Label>
      <Form.Select name='Degree' >      <option>Open this select menu</option>
      <option>Science</option>
      <option>Fsc</option>
      <option>F.A</option>
        <option >BS(IT)</option>
        <option >BS(COMPUTER SCIENCE)</option>
        <option >BS(SOFTWARE ENGINEERING</option>
      </Form.Select>
      <Form.Label>Major subjects</Form.Label>
      <Form.Control type="text" placeholder="subjects" name='Subjects' />
      <div className='row'>
        <div className='col-md-6'>
          <Form.Label>Start Date</Form.Label>
        </div>
        <div className='col-md-6'>
          <Form.Label>End Date</Form.Label>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <Form.Control type="date" name='Startdate' />
        </div>
        <div className='col-md-6'>
          <Form.Control type="date" name='Enddate' />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <Form.Label>Obtain Marks</Form.Label>
        </div>
        <div className='col-md-4'>
          <Form.Label>Total Marks</Form.Label>
        </div>
        <div className='col-md-4'>
          <Form.Label>Division</Form.Label>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <Form.Control type="text" placeholder='Obtain' name='Obtainmarks' />
        </div>
        <div className='col-md-4'>
          <Form.Control type="text" placeholder='Total' name='Totalmarks' />
        </div>
        <div className='col-md-4'>
          <Form.Control type="text" placeholder='Division' name='Division' />
        </div>
      </div>
      <Form.Label>Select University</Form.Label>
      <Form.Select name='University' >
        <option>Open this select menu</option>
        <option >Islamia University</option>
        <option >Quaid-e-Azam University</option>
        <option >BZU</option>
        <option >UET Taxila</option>
      </Form.Select>
      <br></br>
      <Button type="submit" variant="primary">Submit</Button>{' '}
      </Form>
      <Tableeducational/>
    </div>
  )
}

export default Eduactional