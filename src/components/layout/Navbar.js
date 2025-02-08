import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("userName") || "User";

  const handleNavLink = (item) => {
    if (item === "Dashboard") {
      navigate("/event-dashboard");
    }
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("createdBy");
        navigate("/");
      }
    });
  };

  return (
    <StyledNavbar>
      <Header>
        <Logo>EventFlow</Logo>
        {token && (
          <NavLinks>
            {["Dashboard"].map((item, index) => (
              <NavLink key={index} onClick={() => handleNavLink(item)}>
                {item}
              </NavLink>
            ))}
          </NavLinks>
        )}
      </Header>
      {token && (
        <NavLogoutDiv>
          <div className="profile-div">
            <AccountCircleIcon fontSize="large" className="icon" />
            <Username>{username}</Username>
          </div>
          <LogoutIcon
            fontSize="large"
            className="icon"
            onClick={handleLogout}
          />
        </NavLogoutDiv>
      )}
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 98%;
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Header = styled.div`
  display: flex;
  gap: 2rem;
  width: 80%;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 23px;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 900;
  font-style: italic;
  background: linear-gradient(to right, #2563eb, #7c3aed);
  -webkit-background-clip: text;
  color: transparent;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLogoutDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15%;

  .icon {
    color: #2563eb;
    cursor: pointer;
    font-size: 30px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  .profile-div {
    display: flex;
    align-items: center;
  }
`;

const Username = styled.span`
  font-weight: bold;
  font-size: 1rem;
  color: #2563eb;
`;

const NavLink = styled.a`
  position: relative;
  padding: 0.5rem 0;
  color: inherit;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #2563eb;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0.125rem;
    background: #2563eb;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;
