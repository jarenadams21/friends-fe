import React, { useEffect, useState } from 'react';

import Select from 'react-select';
import './profile.css';
import { Button, Form } from 'react-bootstrap';
import defaultProfile from '../../../public/blank-profile.jpg';
type Interests = {value: string, label: string}

export function MultiSelect() {
    const options : Interests[]= [{value: 'Basketball', label: 'Basketball'}, {value: 'football', label: 'Football'}, {value: 'party', label: 'Party'}]
    return (
        <div>
            <header>Select a few of your interests</header>
            <Select
                isClearable
                isSearchable
                isMulti
                name="color"
                options={options}
            />
        </div>
  );
}

// export function ImageUpload() {
//     const [image, setImage] = useState(defaultProfile);
//     const [imageUrl, setImageUrl] = useState('');

//     useEffect(() => {
//         setImageUrl(URL.createObjectURL(image[0]))
//     }, [image])

//     function onChangeFunction(e) {
//         setImage([...e.target.files]);
//     }
    
//     return (
//         <div>
//             <input type="file" accept='image/*' onChange={e => setImage(e.target.files[0])} />
//         </div>
//   );
// }

export default function Profile() {
    return (
        <div className="Container border">
            <header className='ProfileHeader'>Profile</header>
            <Form.Group className="mb-3 FormGroup">
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="Disabled input" disabled />
            </Form.Group>
            <Form.Group className="mb-3 FormGroup">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Disabled input" disabled />
            </Form.Group>
            <Form.Group className="mb-3 FormGroup">
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Disabled input" disabled />
            </Form.Group>
            <MultiSelect/>
            <Button variant="primary" type="submit" className="ProfileSubmit">
                Finish
            </Button>
        </div>
    )
}