import styled from "styled-components";

export const Main = styled.main``;

export const Card = styled.div`
  max-width: 22rem;
  margin: auto;
  margin-top: 9px;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

export const StyledInput = styled.input`
  position: relative;
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

export const ButtonPrimary = styled.button`
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

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
`;

export const Subtitle = styled.p`
  color: #6b7280;
  margin: 0;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const FooterText = styled.p`
  text-align: center;
  color: #6b7280;
  margin-top: 2rem;
`;

export const SignUpLink = styled.a`
  color: #2563eb;
  margin-left: 0.25rem;
  cursor: pointer;
  &:hover {
    color: #1e40af;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorText = styled.span`
  position: relative;
  left: 1rem;
  color: red;
  font-size: 11px;
`;
