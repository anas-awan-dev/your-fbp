import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: #060f1a;
  padding: 5rem 0 2.5rem;
  border-top: 1px solid rgba(201, 168, 76, 0.15);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FooterAbout = styled.div`
  p {
    color: rgba(255, 255, 255, 0.45);
    font-size: 0.875rem;
    line-height: 1.75;
    margin: 1rem 0 1.5rem;
  }
`;

const Logo = styled.a`
  display: inline-flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;
`;

const LogoTop = styled.span`
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--white);
  letter-spacing: 0.01em;
  line-height: 1;
`;

const LogoSub = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  color: var(--gold);
  text-transform: uppercase;
  margin-top: 2px;
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const SocialBtn = styled.a`
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 0.8rem;
  transition: all 0.25s;

  &:hover {
    border-color: var(--gold);
    color: var(--gold);
  }
`;

const FooterCol = styled.div`
  h5 {
    font-family: 'Courier New', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1.25rem;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0;
  margin: 0;

  a {
    color: rgba(255, 255, 255, 0.45);
    font-size: 0.85rem;
    text-decoration: none;
    transition: color 0.25s;

    &:hover {
      color: var(--white);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const FooterCert = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CertBadge = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.3rem 0.6rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <Container>
        <FooterGrid>
          <FooterAbout>
            <Logo href="#">
              <LogoTop>YourFBP</LogoTop>
              <LogoSub>Finance Business Partner</LogoSub>
            </Logo>
            <p>
              Professional financial services with global expertise. Serving clients across UK, Europe, Middle East, and Asia since 2008.
            </p>
            <FooterSocial>
              <SocialBtn href="#" aria-label="LinkedIn">in</SocialBtn>
              <SocialBtn href="#" aria-label="Twitter">𝕏</SocialBtn>
              <SocialBtn href="#" aria-label="Facebook">f</SocialBtn>
              <SocialBtn href="#" aria-label="YouTube">▶</SocialBtn>
            </FooterSocial>
          </FooterAbout>

          <FooterCol>
            <h5>Services</h5>
            <FooterLinks>
              <li><a href="#services">Financial Consulting</a></li>
              <li><a href="#services">Portfolio Management</a></li>
              <li><a href="#services">Global Investment</a></li>
              <li><a href="#services">Accountancy</a></li>
              <li><a href="#services">Taxation</a></li>
              <li><a href="#services">Bookkeeping & Payroll</a></li>
            </FooterLinks>
          </FooterCol>

          <FooterCol>
            <h5>Company</h5>
            <FooterLinks>
              <li><a href="#about">About Us</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#testimonials">Client Stories</a></li>
              <li><a href="#contact">Contact</a></li>
            </FooterLinks>
          </FooterCol>

          <FooterCol>
            <h5>Compliance</h5>
            <FooterLinks>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">GDPR Statement</a></li>
              <li><a href="#">FCA Registration</a></li>
            </FooterLinks>
          </FooterCol>
        </FooterGrid>

        <FooterBottom>
          <p>© 2025 Your Finance Business Partner. All rights reserved.</p>
          <FooterCert>
            <CertBadge>ICAEW Member</CertBadge>
            <CertBadge>FCA Regulated</CertBadge>
            <CertBadge>HMRC Compliant</CertBadge>
          </FooterCert>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;
