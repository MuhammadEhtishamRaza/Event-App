import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormGroup } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='contact-form col-6 m-auto py-3' id='contact'>
            <h2>Contact Us.</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={4} placeholder='Message' />
                </Form.Group>
                <Button variant="primary" className='form-control'>
                    Submit
                </Button>
            </Form>
        </div>

    )
}

export default Contact