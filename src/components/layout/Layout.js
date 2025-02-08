import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MainContent>{children || <Outlet />}</MainContent>
    </>
  );
};

export default Layout;

const MainContent = styled.div`
  padding-top: 4.375rem;
`;
