import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{ color: "green", textAlign: "center", marginTop: "-50px" }}
      ></h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us </Heading>
            <FooterLink href="#">Who we are</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Help</FooterLink>
            <FooterLink href="#">FAQs</FooterLink>
            <FooterLink href="#">Terms of Services</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">011-7725510</FooterLink>
            <FooterLink href="#">abcuniversity@gmail.com</FooterLink>
            <FooterLink href="#">No.19, Dalugama kelaniya</FooterLink>
          </Column>
          <Column style={{ paddingLeft: "rem" }}>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <FaFacebookSquare />
            </FooterLink>
            <FooterLink href="#">
              <FaInstagramSquare />
            </FooterLink>
            <FooterLink href="#">
              <FaTwitterSquare />
            </FooterLink>
            <FooterLink href="#">
              <FaYoutube />
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
