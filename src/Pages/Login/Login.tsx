import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLogin } from "../../Hooks/useAuth/useLogin";
import { useEffect, useState } from "react";
import { LoginUser } from "../../models/user";

const Login = () => {
  const { Login, isPending, isError, isSuccess, data } = useLogin();

  const [form, setForm] = useState<LoginUser>({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    if (form.email && form.password) {
      Login(form);
    }
  };
  
  useEffect(() => {
    if (isSuccess) {
      alert("Yes");
      // document.location = "/login"
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
        <h3 style={{ marginBottom: "7vh" }}>Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
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
        </Form.Group>
        {isPending && <h1>لطفا صبر کنید</h1> }
        <Button variant="primary"  onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;




