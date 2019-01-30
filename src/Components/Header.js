import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;

  z-index: 15;
  background-color: rgba(25, 25, 25, 0.7);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.5);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${props => (props.current ? "#eb2f06" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderComponent = ({ location: { pathname } }) => (
  <Header>
    {console.log(pathname)}
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);

export default withRouter(HeaderComponent);
