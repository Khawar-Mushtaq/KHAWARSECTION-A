import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useMutation } from 'react-query';
import Tabledata from './Tabledata';

const PersonalInfo = () => {
  const mutation=useMutation(async (newUser)=>{
    const rawResponse=await fetch('http://localhost:3005/posts',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify(newUser)
    });
    const Content=await rawResponse.json();
    console.log('data',Content);
})
const handlesubmit=(e)=>{
  e.preventDefault();
  const {First,Middle,Last,FatherName,Mobile,Gender,Phone,DateofBirth,Birthplace,Maerialstatus,PostalAddress,PernanentAddress,Religion,Nationality}=e.target.elements;
  const Adddata={
    first:First.value,
    middle:Middle.value,
    last:Last.value,
    fatherName:FatherName.value,
    mobile:Mobile.value,
    gender:Gender.value,
    phone:Phone.value,
    dateofBirth:DateofBirth.value,
    birthplace:Birthplace.value,
    maerialstatus:Maerialstatus.value,
    postalAddress:PostalAddress.value,
    pernanentAddress:PernanentAddress.value,
    religion:Religion.value,
    nationality:Nationality.value
  }
  mutation.mutate(Adddata);
}
  return (
    <div>
      <Form onSubmit={handlesubmit}>
        <div className='row'>
          <div className='col-md-4'>
            <Form.Label>First</Form.Label>
          </div>
          <div className='col-md-4'>
            <Form.Label>Middle</Form.Label>
          </div>
          <div className='col-md-4'>
            <Form.Label>Last</Form.Label>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <Form.Control type="text" name='First' placeholder="First"  />
          </div>
          <div className='col-md-4'>
            <Form.Control type="text" name='Middle' placeholder="Middle" />
          </div>
          <div className='col-md-4'>
            <Form.Control type="text" name='Last' placeholder="Last" />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <Form.Label>Father Name</Form.Label>
          </div>
          <div className='col-md-3'>
            <Form.Label>Mobile</Form.Label>
          </div>
          <div className='col-md-3'>
            <Form.Label>Gender</Form.Label>
          </div>
          <div className='col-md-3'>
            <Form.Label>PhoneNo</Form.Label>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <Form.Control type="text" name='FatherName' placeholder="FatherName" />
          </div>
          <div className='col-md-3'>
            <Form.Control type="text" name='Mobile' placeholder="xxxx-xxxxxxx" />
          </div>
          <div className='col-md-3'>
            <Form.Select aria-label="Default select example" name='Gender'>
              <option>Open this select menu</option>
              <option value="">Male</option>
              <option value="">Female</option>
            </Form.Select>
          </div>
          <div className='col-md-3'>
            <Form.Control type="text" name='Phone' placeholder="Landline" />
            {/*<p style={{color:'red' , fontSize:'10px'}}>{(error)&&(!PersonalData.Phone)&&"Invalid Input"}</p>*/}
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <Form.Label>Date-of-Birth</Form.Label>
          </div>
          <div className='col-md-4'>
            <Form.Label>Place of Birth</Form.Label>
          </div>
          <div className='col-md-4'>
            <Form.Label>Marital Status</Form.Label>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <Form.Control type="text" name='DateofBirth' placeholder="DateofBirth" />
          </div>
          <div className='col-md-4'>
            <Form.Control type="text" name='Birthplace' placeholder="Place of Birth" />
          </div>
          <div className='col-md-4'>
            <Form.Select aria-label="Default select example" name='Maerialstatus' >
              <option>Open this select menu</option>
              <option value="">Married</option>
              <option value="">UnMarried</option>
            </Form.Select>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-2'>
            <Form.Label>Postal Address</Form.Label>
          </div>
        </div>
        <Form.Control type="text" name='PostalAddress' placeholder="Postal" />
        <div className='row'>
          <div className='col-md-2'>
            <Form.Label>Permanent Address</Form.Label>
          </div>
        </div>
        <Form.Control type="text" name='PernanentAddress' placeholder="Permanent" />
        <div className='row'>
          <div className='col-md-6'>
            <Form.Label>Religion</Form.Label>
          </div>
          <div className='col-md-6'>
            <Form.Label>Nationalty</Form.Label>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Form.Select aria-label="Default select example" name='Religion' >
              <option>Open this select menu</option>
              <option value="">Islam</option>
              <option value="">Charichen</option>
            </Form.Select>
          </div>
          <div className='col-md-6'>
            <Form.Control type="text" name='Nationality' placeholder="Nationalty" />
          </div>
        </div>
        <br></br>
        <div className='row'>
          <div className='col-md-12'>
            <Button type="submit" variant="primary">Submit</Button>{' '}
          </div>
          
        </div>
      </Form>
      <Tabledata/>
    </div>
  )
}

export default PersonalInfo