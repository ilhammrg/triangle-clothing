import React from 'react';

import {
  FooterContainer,
  CopyrightText,
  SocialMediaContainer,
  SocialMediaLink,
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
  YoutubeLogo,
  Subtitle,
  NavigationContainer,
  NavigationLink,
  OutsideLink,
  DescriptionContainer,
  Description,
  BrandName,
} from './footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <Subtitle>QUICK LINKS</Subtitle>
      <NavigationContainer>
        <NavigationLink to="/home">Home</NavigationLink>
        <NavigationLink to="/shop">Shop</NavigationLink>
        <NavigationLink to="/checkout">Checkout</NavigationLink>
        <OutsideLink href="https://github.com/ilhammrg" target="_blank" rel="noopener noreferrer">About Us</OutsideLink>
        <OutsideLink href="https://linkedin.com/in/ilham-gunawan" target="_blank" rel="noopener noreferrer">Contact</OutsideLink>
        <NavigationLink to="/#privacy-policy">Privacy Policy</NavigationLink>
      </NavigationContainer>
      <Subtitle id="social-media-title">FOLLOW US</Subtitle>
      <SocialMediaContainer>
        <SocialMediaLink href="#instagram" title="Instagram">
          <InstagramLogo title="Instagram" />
        </SocialMediaLink>
        <SocialMediaLink href="#facebook" title="Facebook">
          <FacebookLogo title="Facebook" />
        </SocialMediaLink>
        <SocialMediaLink href="#twitter" title="Twitter">
          <TwitterLogo title="Twitter" />
        </SocialMediaLink>
        <SocialMediaLink href="#youtube" title="Youtube">
          <YoutubeLogo title="Youtube" />
        </SocialMediaLink>
      </SocialMediaContainer>
      <BrandName>urban clothing</BrandName>
      <DescriptionContainer>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
          amet lacus eget enim euismod ullamcorper. Integer eu ex ut dolor porta
          consequat sed eu nibh. Donec at viverra nisl.
        </Description>
        <CopyrightText>&copy; 2020 Urban Clothing Co.</CopyrightText>
      </DescriptionContainer>
    </FooterContainer>
  );
};

export default Footer;
