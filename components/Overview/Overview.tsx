import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

const OverviewSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  padding: 2rem;
  
  @media (max-width: 768px) {
    min-height: 80vh;
    padding: 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const HeroContent = styled.div`
  max-width: 600px;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const MainHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid white;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    color: #1e3a8a;
    transform: translateY(-2px);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 3rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.8;
`;

interface OverviewProps {
  onContactClick: () => void;
}

const Overview: React.FC<OverviewProps> = ({ onContactClick }) => {
  return (
    <OverviewSection>
      <Container>
        <HeroContent>
          <MainHeading>Your Finance Business Profile</MainHeading>
          <SubHeading>Global Financial Expertise at Your Service</SubHeading>
          <Description>
            We provide comprehensive financial services with a client-oriented approach, 
            leveraging our global reach and deep expertise to help you achieve your financial goals. 
            From strategic planning to portfolio management, we&apos;re your trusted partner in financial success.
          </Description>
          <CTAButton onClick={onContactClick} aria-label="Get started with our financial services">
            Get Started Today
            <FaArrowRight />
          </CTAButton>
        </HeroContent>
        
        <StatsContainer>
          <StatItem>
            <StatNumber>500+</StatNumber>
            <StatLabel>Global Clients</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>$2B+</StatNumber>
            <StatLabel>Assets Managed</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>15+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
        </StatsContainer>
      </Container>
    </OverviewSection>
  );
};

export default Overview;