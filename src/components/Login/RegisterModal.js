import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Alert, Row, Col } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class RegisterModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loginError: false
    };
  }

  handleSubmit = (event, errors, { email, username, password }) => {
    const { handleRegister } = this.props;
    handleRegister(email, username, password);
  };

  render() {
    const { loginError, handleClose, showModal } = this.props;

    return (
      <Modal isOpen={showModal} toggle={handleClose} >
        <AvForm onSubmit={this.handleSubmit}>
          <ModalHeader id="login-title" toggle={handleClose}>
            Sign up
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col md="12">
                {loginError ? (
                  <Alert color="danger">
                    <strong>Failed to sign up!</strong>
                  </Alert>
                ) : null}
              </Col>
              <Col md="12">
              <AvField
                  name="email"
                  label="Email"
                  placeholder="Your email"
                  required
                  errorMessage="Email cannot be empty!"
                />
                <AvField
                  name="username"
                  label="Username"
                  placeholder="Your username"
                  required
                  errorMessage="Username cannot be empty!"
                  autoFocus
                />
                <AvField
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Your password"
                  required
                  errorMessage="Password cannot be empty!"
                />
              </Col>
            </Row>
            <div className="mt-1">&nbsp;</div>
            <div className="login-container">
              
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={handleClose} tabIndex="1">
              Cancel
            </Button>{' '}
            <Button color="primary" type="submit">
              Sign up
            </Button>
          </ModalFooter>
        </AvForm>
      </Modal>
    );
  }
}

export default RegisterModal;
