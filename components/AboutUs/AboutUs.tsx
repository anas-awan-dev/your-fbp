import React from 'react';
import styled from 'styled-components';
import { FaUsers, FaAward, FaGlobeAmericas, FaHandshake } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: white;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.header`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContentText = styled.div`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #475569;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 1.5rem;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #64748b;
  font-weight: 500;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const ValueCard = styled.div`
  text-align: center;
  padding: 2rem 1.5rem;
`;

const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  font-size: 1rem;
`;

const AboutUs: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionHeader>
          <SectionTitle>About Your Finance Business Partner</SectionTitle>
          <SectionSubtitle>
            Your trusted partner in financial success with over 15 years of expertise
            in delivering personalized financial solutions
          </SectionSubtitle>
        </SectionHeader>

        <ContentGrid>
          <ContentText>
            <p>
              Founded in 2008, Your Finance Business Partner has been at the forefront 
              of providing comprehensive financial services to individuals and businesses 
              worldwide. Our team of 75+ certified professionals brings together decades 
              of experience in finance, accounting, and business consulting.
            </p>
            <p>
              We understand that every client's financial journey is unique. That's why 
              we take a personalized approach to every relationship, combining global 
              expertise with local understanding to deliver solutions that truly make 
              a difference in your financial future.
            </p>
            <p>
              From investment strategies and portfolio management to accounting and tax 
              services, we provide the full spectrum of financial services under one roof, 
              ensuring seamless coordination and optimal results for our clients.
            </p>
          </ContentText>

          <StatsGrid>
            <StatCard>
              <StatIcon>
                <FaUsers aria-hidden="true" />
              </StatIcon>
              <StatNumber>75+</StatNumber>
              <StatLabel>Expert Professionals</StatLabel>
            </StatCard>
            <StatCard>
              <StatIcon>
                <FaAward aria-hidden="true" />
              </StatIcon>
              <StatNumber>15+</StatNumber>
              <StatLabel>Years of Experience</StatLabel>
            </StatCard>
            <StatCard>
              <StatIcon>
                <FaGlobeAmericas aria-hidden="true" />
              </StatIcon>
              <StatNumber>Global</StatNumber>
              <StatLabel>Service Coverage</StatLabel>
            </StatCard>
            <StatCard>
              <StatIcon>
                <FaHandshake aria-hidden="true" />
              </StatIcon>
              <StatNumber>1000+</StatNumber>
              <StatLabel>Satisfied Clients</StatLabel>
            </StatCard>
          </StatsGrid>
        </ContentGrid>

        <ValuesGrid>
          <ValueCard>
            <ValueIcon>
              <FaHandshake aria-hidden="true" />
            </ValueIcon>
            <ValueTitle>Trust & Integrity</ValueTitle>
            <ValueDescription>
              We build lasting relationships based on trust, transparency, and ethical 
              practices. Your financial well-being is our top priority.
            </ValueDescription>
          </ValueCard>
          <ValueCard>
            <ValueIcon>
              <FaAward aria-hidden="true" />
            </ValueIcon>
            <ValueTitle>Excellence</ValueTitle>
            <ValueDescription>
              We strive for excellence in everything we do, continuously improving 
              our services and staying ahead of industry trends.
            </ValueDescription>
          </ValueCard>
          <ValueCard>
            <ValueIcon>
              <FaUsers aria-hidden="true" />
            </ValueIcon>
            <ValueTitle>Client-Centric</ValueTitle>
            <ValueDescription>
              Your success is our success. We tailor our services to meet your unique 
              needs and goals, ensuring personalized solutions every time.
            </ValueDescription>
          </ValueCard>
          <ValueCard>
            <ValueIcon>
              <FaGlobeAmericas aria-hidden="true" />
            </ValueIcon>
            <ValueTitle>Global Expertise</ValueTitle>
            <ValueDescription>
              With a global perspective and local insight, we help you navigate 
              international markets and opportunities with confidence.
            </ValueDescription>
          </ValueCard>
        </ValuesGrid>
      </Container>
    </AboutSection>
  );
};

export default AboutUs;