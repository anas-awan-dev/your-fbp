'use client';

import React from 'react';
import styled from 'styled-components';
import { Button, ButtonLink, Arrow } from '../Common';

const HeroSection = styled.section`
  min-height: 100vh;
  background: var(--navy);
  position: relative;
  overflow: hidden;
  padding: 80px 2rem 5rem;

  @media (max-width: 900px) {
    min-height: auto;
    padding: 100px 2rem 60px;
  }

  @media (max-width: 768px) {
    padding: 100px 1rem 60px;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 80% 80% at 65% 40%, rgba(201, 168, 76, 0.06) 0%, transparent 60%),
    radial-gradient(ellipse 50% 60% at 10% 80%, rgba(22, 44, 84, 0.8) 0%, transparent 70%);
`;

const HeroGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(201, 168, 76, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(201, 168, 76, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;

  @media (max-width: 900px) {
    max-width: 100%;
    text-align: center;
  }
`;

const HeroEyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(201, 168, 76, 0.1);
  border: 1px solid rgba(201, 168, 76, 0.25);
  padding: 0.4rem 1rem;
  margin-bottom: 2rem;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.3);
    }
  }
`;

const Label = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold-light);
`;

const Heading = styled.h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 600;
  color: var(--white);
  margin-bottom: 1.5rem;
  line-height: 1.1;

  em {
    font-style: normal;
    color: var(--gold);
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 480px;
  margin-bottom: 2.5rem;
  line-height: 1.75;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  margin-bottom: 3.5rem;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid rgba(201, 168, 76, 0.2);
  padding-top: 2rem;
  max-width: 480px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const HeroStat = styled.div`
  padding-right: 1.5rem;

  & + & {
    border-left: 1px solid rgba(201, 168, 76, 0.15);
    padding-left: 1.5rem;
    padding-right: 1rem;
  }

  @media (max-width: 900px) {
    text-align: center;
  }
`;

const StatNum = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--white);
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: var(--slate);
  letter-spacing: 0.05em;
`;

const HeroVisual = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

const HeroCardStack = styled.div`
  position: relative;
  width: 340px;
`;

const HeroCard = styled.div<{ $variant?: 'main' | 'back' }>`
  background: ${props => props.$variant === 'back'
    ? 'rgba(22, 44, 84, 0.6)'
    : 'rgba(17, 32, 64, 0.8)'};
  border: 1px solid ${props => props.$variant === 'back'
    ? 'rgba(201, 168, 76, 0.1)'
    : 'rgba(201, 168, 76, 0.2)'};
  backdrop-filter: blur(10px);
  padding: 1.75rem 2rem;
  position: ${props => props.$variant === 'back' ? 'absolute' : 'relative'};
  z-index: ${props => props.$variant === 'back' ? 1 : 2};

  ${props => props.$variant === 'back' && `
    top: -1.5rem;
    right: -1.5rem;
    left: 1.5rem;
  `}
`;

const CardLabel = styled.div`
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
`;

const CardMetric = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1;
`;

const CardSub = styled.div`
  font-size: 0.8rem;
  color: var(--slate);
  margin-top: 0.25rem;
`;

const CardBar = styled.div`
  height: 2px;
  background: rgba(201, 168, 76, 0.15);
  margin: 1.25rem 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 68%;
    background: var(--gold);
  }
`;

const CardTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const CardTag = styled.span`
  font-size: 0.68rem;
  padding: 0.25rem 0.6rem;
  background: rgba(201, 168, 76, 0.1);
  color: var(--gold-light);
  border: 1px solid rgba(201, 168, 76, 0.2);
  letter-spacing: 0.05em;
`;

const HeroBadge = styled.div`
  position: absolute;
  bottom: -2rem;
  left: -2rem;
  background: var(--gold);
  color: var(--navy);
  padding: 1rem 1.25rem;
  font-weight: 700;
  text-align: center;
  z-index: 3;
  font-size: 1.1rem;
  line-height: 1;

  small {
    display: block;
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-top: 2px;
  }
`;

interface OverviewProps {
  onContactClick: () => void;
}

const Overview: React.FC<OverviewProps> = ({ onContactClick }) => {
  return (
    <HeroSection>
      <HeroBackground />
      <HeroGrid />

      <HeroContainer>
        <HeroContent>
          <HeroEyebrow>
            <Dot />
            <Label>Global Financial Expertise</Label>
          </HeroEyebrow>

          <Heading>
            Your Trusted<br />
            <em>Finance Business</em><br />
            Partner
          </Heading>

          <Description>
            We deliver institutional-grade financial services — from strategic consultancy to tax and audit — with the rigour of a Big Four firm and the personal touch of a dedicated partner.
          </Description>

          <HeroActions>
            <Button variant="gold" onClick={onContactClick}>
              Book a Free Consultation <Arrow />
            </Button>
            <ButtonLink variant="outline" href="#services">
              Explore Services
            </ButtonLink>
          </HeroActions>

          <HeroStats>
            <HeroStat>
              <StatNum>15+</StatNum>
              <StatLabel>Years of expertise</StatLabel>
            </HeroStat>
            <HeroStat>
              <StatNum>1k+</StatNum>
              <StatLabel>Clients served</StatLabel>
            </HeroStat>
            <HeroStat>
              <StatNum>75+</StatNum>
              <StatLabel>Professionals</StatLabel>
            </HeroStat>
          </HeroStats>
        </HeroContent>

        <HeroVisual>
          <HeroCardStack>
            <HeroCard $variant="back">
              <CardLabel>Portfolio Growth</CardLabel>
              <CardMetric>+42%</CardMetric>
              <CardSub>Average client portfolio return</CardSub>
            </HeroCard>
            <HeroCard $variant="main">
              <CardLabel>Assets Under Advisory</CardLabel>
              <CardMetric>$10M+</CardMetric>
              <CardSub>Across global markets</CardSub>
              <CardBar />
              <CardTags>
                <CardTag>UK GAAP</CardTag>
                <CardTag>IFRS</CardTag>
                <CardTag>HMRC</CardTag>
                <CardTag>FCA</CardTag>
              </CardTags>
            </HeroCard>
            <HeroBadge>
              50+<small>Global Clients</small>
            </HeroBadge>
          </HeroCardStack>
        </HeroVisual>
      </HeroContainer>
    </HeroSection>
  );
};

export default Overview;
