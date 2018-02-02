import React, {Component} from "react";
import {Container, Row, Col, CardGroup, Card, CardBlock, Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import {Link} from 'react-router-dom';



class Login extends Component {
    render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <img src={'img/logo.png'} className="img-bg"/>
          </Row>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup className="mt-5">
                <Card className="p-4">
                  <CardBlock className="card-body">
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                      <Input type="text" placeholder="Username"/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                      <Input type="password" placeholder="Password"/>
                    </InputGroup>
                    <Row>
                      <Col xs="12" className="text-center">
                        <Button color="link" className="px-1">Forgot password? </Button>
                        |
                        <Button color="link" className="px-1"> Register</Button>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs="12" className="text-center">
                        <Link to="/dashboard">
                        <Button color="primary" className="px-5 mt-1" onClick={this.handleClick}
                        >Login</Button>
                        </Link>
                      </Col>
                    </Row>

                    <Col xs="12" className="text-center">
                      <p className="mt-2">By clicking, I accept the <a href="#" className="text-primary">
                        <Link to="/register">Terms of Service</Link></a></p>

                  </Col>
                  </CardBlock>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
