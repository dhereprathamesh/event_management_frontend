import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Main,
  Card,
  TitleContainer,
  Title,
  Subtitle,
  FormContainer,
  FormGroup,
  StyledInput,
  ButtonPrimary,
  FooterText,
  SignUpLink,
  ErrorText,
  InputDiv,
} from "../assets/styles/StyledSignUp";
import { registerUser } from "../services/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    try {
      setLoading(true);
      setApiError("");

      const data = {
        userName: formData.username,
        name: formData.name,
        password: formData.password,
      };

      const response = await registerUser(data);

      if (response.data) {
        navigate("/");
      }
    } catch (error) {
      console.error(
        "Registration Failed:",
        error.response?.data?.message || error.message
      );
      setApiError(
        error.response?.data?.message || "Something went wrong. Try again!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Main>
        <Card>
          <TitleContainer>
            <Title>Create Account</Title>
            <Subtitle>Join EventFlow to manage your events</Subtitle>
          </TitleContainer>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormContainer>
              <FormGroup>
                <InputDiv>
                  <StyledInput
                    type="text"
                    placeholder="Enter a username"
                    {...register("username", {
                      required: "Username is required",
                      minLength: { value: 3, message: "Min length is 3" },
                    })}
                  />
                  {errors.username && (
                    <ErrorText>{errors.username.message}</ErrorText>
                  )}
                </InputDiv>

                <InputDiv>
                  <StyledInput
                    type="text"
                    placeholder="Enter your name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                </InputDiv>

                <InputDiv>
                  <StyledInput
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: "Min length is 6" },
                    })}
                  />
                  {errors.password && (
                    <ErrorText>{errors.password.message}</ErrorText>
                  )}
                </InputDiv>
              </FormGroup>

              {apiError && <ErrorText>{apiError}</ErrorText>}

              <ButtonPrimary type="submit" disabled={loading}>
                {loading ? "Registering..." : "Sign Up"}
              </ButtonPrimary>

              <FooterText>
                Already have an account?
                <SignUpLink onClick={() => navigate("/")}>Sign in</SignUpLink>
              </FooterText>
            </FormContainer>
          </form>
        </Card>
      </Main>
    </div>
  );
};

export default SignUp;
