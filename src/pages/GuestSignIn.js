import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonPrimary,
  Card,
  FooterText,
  FormContainer,
  FormGroup,
  Main,
  SignUpLink,
  StyledInput,
  Subtitle,
  Title,
  TitleContainer,
} from "../assets/styles/GuestSignIn";

const GuestSignIn = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signUp");
  };
  return (
    <div>
      <Main>
        <Card>
          <TitleContainer>
            <Title>Welcome</Title>
            <Subtitle>Sign in to continue as a Guest</Subtitle>
          </TitleContainer>
          <FormContainer>
            <FormGroup>
              <StyledInput type="text" placeholder="Enter a name" />
            </FormGroup>
            <ButtonPrimary>Continue as Guest</ButtonPrimary>
            <FooterText>
              Don't have an account?
              <SignUpLink onClick={handleSignUp}>Sign up</SignUpLink>
            </FooterText>
          </FormContainer>
        </Card>
      </Main>
    </div>
  );
};

export default GuestSignIn;
