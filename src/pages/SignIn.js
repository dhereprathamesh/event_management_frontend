import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Brand = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 900;
  font-style: italic;
  background: linear-gradient(to right, #2563eb, #8b5cf6);
  -webkit-background-clip: text;
  color: transparent;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Main = styled.main``;

const Card = styled.div`
  max-width: 22rem;
  margin: auto;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const StyledInput = styled.input`
  padding: 1rem;
  border: 1px solid #e5e7eb; /* gray-200 */
  border-radius: 1.75rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2563eb; /* blue-600 */
    box-shadow: 0 0 0 2px #dbeafe; /* blue-100 */
  }
`;

const ButtonPrimary = styled.button`
  padding: 1rem;
  border: none;
  background: #2563eb;
  color: white;
  border-radius: 1.75rem;
  transition: all 0.3s;
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(37, 99, 235, 0.2);
  &:hover {
    background: #1e40af;
    transform: translateY(-2px);
    box-shadow: 0px 6px 14px rgba(37, 99, 235, 0.3);
  }
`;

const ButtonSecondary = styled.button`
  padding: 1rem;
  border: none;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 1.75rem;
  transition: all 0.3s;
  font-weight: bold;
  &:hover {
    background: #f3f4f6;
    transform: translateY(-2px);
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
`;

const Subtitle = styled.p`
  color: #6b7280;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const FooterText = styled.p`
  text-align: center;
  color: #6b7280;
  margin-top: 2rem;
`;

const SignUpLink = styled.a`
  color: #2563eb;
  margin-left: 0.25rem;
  &:hover {
    color: #1e40af;
  }
`;

const SignIn = () => {
  return (
    <div>
      <Nav>
        <Brand>EventFlow</Brand>
      </Nav>
      <Main>
        <Card>
          <TitleContainer>
            <Title>Welcome Back</Title>
            <Subtitle>Sign in to continue to EventFlow</Subtitle>
          </TitleContainer>
          <FormContainer>
            <FormGroup>
              <StyledInput type="email" placeholder="Email address" />
              <StyledInput type="password" placeholder="Password" />
            </FormGroup>
            <ButtonPrimary>Sign In</ButtonPrimary>
            <ButtonSecondary>Continue as Guest</ButtonSecondary>
            <FooterText>
              Don't have an account?
              <SignUpLink href="#">Sign up</SignUpLink>
            </FooterText>
          </FormContainer>
        </Card>
      </Main>
    </div>
  );
};

export default SignIn;
