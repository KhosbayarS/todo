import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Login extends Component {
  render() {
    return (
      <div>
        <Card className="text-center">
          <Card.Header>
            {" "}
            <h1>TODO</h1>
          </Card.Header>
          <Card.Body>
            <Button variant="primary" onClick={() => this.props.auth.login()}>
              Нэвтрэх/Бүртгүүлэх
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Login;
