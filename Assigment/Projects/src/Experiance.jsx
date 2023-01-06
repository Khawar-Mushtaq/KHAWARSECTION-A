import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import TableExperiance from './TableExperiance';
const Experiance = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
        <Form.Label> Organization Name</Form.Label>
        </div>
        <div className='col-md-6'>
        <Form.Label> Designation</Form.Label>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
        <Form.Control type="text" name='' />
        </div>
        <div className='col-md-6'>
        <Form.Control type="text" name='' />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
        <Form.Label> Start Date</Form.Label>
        </div>
        <div className='col-md-6'>
        <Form.Label> End Date</Form.Label>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
        <Form.Control type="date" name='' />
        </div>
        <div className='col-md-6'>
        <Form.Control type="date" name='' />
        </div>
      </div>
      <br></br>
      <Button type="submit" variant="primary">Submit</Button>{' '}
      <TableExperiance/>
    </div>
  )
}

export default Experiance