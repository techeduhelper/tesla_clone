import React,{useState} from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {

  const [burgerStatus,setBurgerStatus] =  useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="">Model s</a>
        <a href="">Model y</a>
        <a href="">Model x</a>
        <a href="">Model 3</a>
      </Menu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">Tesla account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWraper>
          <CustomClose onClick={()=>setBurgerStatus(false)} />
        </CloseWraper>
        <li>
          <a href="#">Existing Inventory</a>{" "}
        </li>
        <li>
          <a href="#">Existing Inventory</a>{" "}
        </li>
        <li>
          <a href="#">Existing Inventory</a>{" "}
        </li>
        <li>
          <a href="#">Existing Inventory</a>{" "}
        </li>
        <li>
          <a href="#">Existing Inventory</a>{" "}
        </li>
        <li>
          <a href="#">Existing Inventory</a>{" "}
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: white;
  list-style: none;
  width: 250px;
  z-index: 16;
  text-align: start;
  padding-left: 20px;
  li {
    padding: 15px 0;
    border-bottom: 1px solid green;
  }
  a {
    font-weight: bold;
  }
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 0.2s ease-in;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWraper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px 5px 0 0;
`;
