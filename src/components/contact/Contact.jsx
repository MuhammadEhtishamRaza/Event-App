import Form from 'react-bootstrap/Form';

const Contact = () => {
    return (
        <div className='contact-form col-4 m-auto py-3'>
            <h2>Contact Us.</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    {/* <Form.Label>Example textarea</Form.Label> */}
                    <Form.Control as="textarea" rows={4} placeholder='Message' />
                </Form.Group>
            </Form>
        </div>

    )
}

export default Contact