import React from "react";
import styled, { keyframes } from "styled-components";
import { ImCheckmark } from "react-icons/im";

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 80%;
  height: 75%;

  display: flex;
  flex-flow: column wrap;
`;

const LeftContainer = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  height: 30%;
  background-color: white;
  border-radius: 25px;
`;

const RightContainer = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  height: 80%;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const NameInput = styled.input`
  width: 70%;
  height: 100%;
  font-size: 24px;
  border: none;
`;

const EmailInput = styled.input`
  width: 75%;
  height: 100%;
  font-size: 24px;
`;

const Span = styled.span`
  width: 60%;
  height: 10%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  width: 25%;
`;

const ProjectInput = styled.textarea`
  width: 60%;
  height: 40%;
  max-height: 60%;
  max-width: 90%;
  font-size: 12px;
`;

const anime = keyframes`
0% {
      -webkit-transform: translateY(50%);
      opacity: 0;
    }

    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
    }
`;

const Button = styled.button`
  :hover {
    cursor: pointer;
  }

  background-color: white;

  :after {
    content: "Submit!";
  }
  width: 20%;
  height: 7%;
`;

const SuccessButton = styled.button`
  :hover {
    cursor: pointer;
  }
  background-color: lightgreen;
  :before {
    animation: ${anime} 2s linear;
  }
  width: 20%;
  height: 7%;
`;

const Checkmark = styled(ImCheckmark)`
  animation: ${anime} 1s linear;
`;

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      email: "",
      message: "",
      submitted: null,
    };
    this.submitClick = this.submitClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitClick(e) {
    e.preventDefault();

    this.setState({ submitted: true }, () => {
      console.log("Form Data:", this.state);
    });
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <Container id="Contact">
        <InnerContainer>
          <LeftContainer>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </LeftContainer>
          <RightContainer>
            <Title>Write me your project</Title>
            <Form onSubmit={this.submitClick}>
              <Span>
                <Label htmlFor="fName">First Name</Label>
                <NameInput
                  name="fName"
                  id="fName"
                  placeholder="Insert Your First Name"
                  onChange={this.handleChange}
                ></NameInput>
              </Span>
              <Span>
                <Label htmlFor="lName">Last Name</Label>
                <NameInput
                  name="lName"
                  id="lName"
                  placeholder="Insert Your Last Name"
                  onChange={this.handleChange}
                ></NameInput>
              </Span>
              <Span>
                <Label htmlFor="email">Email</Label>
                <EmailInput
                  name="email"
                  id="email"
                  placeholder="Insert Your Email"
                  onChange={this.handleChange}
                ></EmailInput>
              </Span>
              <ProjectInput
                name="message"
                id="message"
                placeholder="Write Your Project"
                onChange={this.handleChange}
              ></ProjectInput>

              {this.state.submitted ? (
                <SuccessButton
                  type="submit"
                  value="Submit"
                  onClick={this.submitClick}
                >
                  <Checkmark />
                </SuccessButton>
              ) : (
                <Button
                  type="submit"
                  value="Submit"
                  onClick={this.submitClick}
                />
              )}
            </Form>
          </RightContainer>
        </InnerContainer>
      </Container>
    );
  }
}
