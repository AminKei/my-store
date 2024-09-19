import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRegister } from "../../Hooks/useAuth/useRegister";
import { UserBody } from "../../models/user";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate(); 

  const { Register, isPending, data, isError, isSuccess } = useRegister();

  const [form, setForm] = useState<UserBody>({
    email: "",
    name: "",
    password: "",
    avatar: "https://picsum.photos/800",
  });

  const handleSubmit = (event: React.FormEvent) => {
    if (form.name && form.email && form.password) {
      Register(form);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      alert("Yes");
      navigate('/login'); 
    }
    if (isError) {
      alert("No");
    }
  }, [isSuccess, isError]);

  console.log(data);

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
      <Form>
        <h3 style={{ marginBottom: "7vh" }}>Register</h3>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            required
            value={form?.name}
            onChange={(e) =>
              setForm((currentState) => ({
                ...currentState,
                name: e.target.value,
              }))
            }
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            value={form?.email}
            onChange={(e) =>
              setForm((currentState) => ({
                ...currentState,
                email: e.target.value,
              }))
            }
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            value={form?.password}
            onChange={(e) =>
              setForm((currentState) => ({
                ...currentState,
                password: e.target.value,
              }))
            }
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
            {isPending && <code>Plesee wait ...</code> }
            {isError && <code>Register has a error try again later ...</code> }
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
