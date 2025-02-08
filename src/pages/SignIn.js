import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonPrimary,
  ButtonSecondary,
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
} from "../assets/styles/StyledSignIn";
import { loginUser } from "../services/auth";
import { ErrorText, InputDiv } from "../assets/styles/StyledSignUp";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
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
        password: formData.password,
      };

      const response = await loginUser(data);

      const token = localStorage.getItem("token");
      if (token) {
        navigate("/event-dashboard");
      }
    } catch (error) {
      console.error(
        "Login Failed:",
        error.response?.data?.message || error.message
      );
      setApiError(
        error.response?.data?.message || "Invalid credentials. Try again!"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGuestSignIn = () => {
    // Prefill guest data
    setValue("username", "Guest");
    setValue("password", "pass123");

    // Submit form with guest credentials
    onSubmit({ userName: "Guest", password: "pass123" });
  };

  return (
    <div>
      <Main>
        <Card>
          <TitleContainer>
            <Title>Welcome</Title>
            <Subtitle>Sign in to continue to EventFlow</Subtitle>
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
                    })}
                  />
                  {errors.username && (
                    <ErrorText>{errors.username.message}</ErrorText>
                  )}
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
                {loading ? "Signing In..." : "Sign In"}
              </ButtonPrimary>

              <ButtonSecondary onClick={handleGuestSignIn}>
                Continue as Guest
              </ButtonSecondary>

              <FooterText>
                Don't have an account?
                <SignUpLink onClick={() => navigate("/signUp")}>
                  Sign up
                </SignUpLink>
              </FooterText>
            </FormContainer>
          </form>
        </Card>
      </Main>
    </div>
  );
};

export default SignIn;
