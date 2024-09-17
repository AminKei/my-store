import { useState } from "react";  
import { Button, Form } from "react-bootstrap";  
import "bootstrap/dist/css/bootstrap.min.css";  

interface userSend {  
  email: string;  
  name: string;  
  password: string;  
}  

const Regester = () => {  
  const [loading, setLoading] = useState(false);  

  const handleSubmit = (event: React.FormEvent) => {  
    event.preventDefault();  
    setLoading(true);  

    // Simulate a network request  
    setTimeout(() => {  
      // Here, you would typically handle form submission (e.g., API call)  
      // After finishing, set loading to false  
      setLoading(false);  
      alert("Form submitted!"); // Replace this with your actual submission logic  
    }, 2000); // Simulating a 2-second delay for the submission  
  };  

  return (  
    <div  
      style={{  
        justifyContent: "center",  
        alignItems: "center",  
        display: "flex",  
        width: "100%",  
        marginTop: "20vh",  
        padding: "30px",  
      }}  
    >  
      <Form onSubmit={handleSubmit}>  
        <h3 style={{ marginBottom: "7vh" }}>Register</h3>  
        <Form.Group className="mb-3" controlId="formBasicName">  
          <Form.Label>Name</Form.Label>  
          <Form.Control type="text" placeholder="Enter Your Name" required />  
        </Form.Group>  
        <Form.Group className="mb-3" controlId="formBasicEmail">  
          <Form.Label>Email address</Form.Label>  
          <Form.Control type="email" placeholder="Enter email" required />  
        </Form.Group>  

        <Form.Group className="mb-3" controlId="formBasicPassword">  
          <Form.Label>Password</Form.Label>  
          <Form.Control type="password" placeholder="Password" required />  
        </Form.Group>  

        <Form.Group className="mb-3" controlId="formBasicCheckbox">  
          <Form.Check type="checkbox" label="Check me out" />  
        </Form.Group>  
        <Button variant="primary" type="submit" disabled={loading}>  
          {g ? "Loading..." : "Submit"}  
        </Button>  
      </Form>  
    </div>  
  );  
};  

export default Regester;