import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import FormContainer from './FormContainer';
import './css/addAnimalForm.css'

const AddAnimalForm = ({ onSubmit, speciesData, farmer }) => {
  const [animalData, setAnimalData] = useState({
    name: '',
    photo: '',
    species: '',
    health: [],
    costs: [],
    owner: '',
    dob: '',
    sex: '', // You can set a default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimalData({
      ...animalData,
      [name]: value,
    });
  };

  const [photo, setPhoto] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    animalData.photo = photo
    animalData.owner = farmer.id
    onSubmit(animalData);
  };

  return (
    <FormContainer>
        <Form onSubmit={handleSubmit}>
            <h5>Dodaj zwierzę do swojego gospodarstwa</h5>
            <Form.Group className='formGroup-addAnimalForm'>
                <Form.Label>Nazwa zwierzęcia:</Form.Label>
                <Form.Control type="text" name="name" value={animalData.name} onChange={handleChange} required />
            </Form.Group>
            <div className='formGroup-addAnimalForm'>
                <label>Rasa:</label>
                <select name="species" class="form-select"  aria-label="Default select example" value={animalData.species} onChange={handleChange} required>
                <option value="">Wybierz gatunek zwierzęcia</option>
                {/* Map over your species data to generate options */}
                {/* Example: */}
                {speciesData.map((species) => (
                    <option key={species.id} value={species.id}>
                    {species.type} {species.name}
                    </option>
                ))}
                </select>
            </div>
            <Form.Group controlId="imageUpload" className='formGroup-addAnimalForm'>
                    <Form.Label>Dodaj zdjęcie swojego zwierzęcia:</Form.Label>
                    <Form.Control 
                    type="text" 
                    value={photo}
                    />
                    <input type="file" name="photo" onChange={(e) => setPhoto(e.target.files[0])}  />
            </Form.Group>
            <Form.Group className='formGroup-addAnimalForm'>
                <Form.Label>Płeć:</Form.Label>
                <select name="sex" class="form-select"  aria-label="Default select example" value={animalData.sex} onChange={handleChange} required>
                <option value="">Wybierz płeć zwierzęcia</option>
                <option value="Męska">Męska</option>
                <option value="Damska">Damska</option>
                <option value="Nieznana">Nieznana</option>
                </select>
            </Form.Group>
            
            <Form.Group className='formGroup-addAnimalForm'>
                <Form.Label>Data urodzenia:</Form.Label>
                <Form.Control type='date' name="dob" onChange={handleChange} value={animalData.dob} />
            </Form.Group>
            
            {/* Add more input fields for health, costs, owner, dob, and sex */}
            <div className='submitButton-addAnimalForm'>
                <Button type="submit">Dodaj zwierzę</Button>
            </div>
        </Form>
    </FormContainer>
    
  );
};

export default AddAnimalForm;
