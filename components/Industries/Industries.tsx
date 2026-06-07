import React from 'react';
import styled from 'styled-components';
import { Section, Container, SectionHeader } from '../Common';

const IndustriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  background: rgba(11, 22, 40, 0.08);
  margin-top: 3rem;
`;

const IndustryItem = styled.div`
  flex: 1 1 200px;
  background: var(--white);
  padding: 2rem 1.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 500;
  color: var(--navy);
  font-size: 0.9rem;
  transition: all 0.3s var(--ease);
  cursor: default;

  &:hover {
    background: var(--navy);
    color: var(--white);
  }

  @media (max-width: 600px) {
    flex: 1 1 100%;
  }
`;

const IndustryIcon = styled.span`
  font-size: 1.3rem;
  flex-shrink: 0;
`;

const industries = [
  { icon: '🏗️', name: 'Real Estate & Construction' },
  { icon: '💻', name: 'Technology & SaaS' },
  { icon: '🏥', name: 'Healthcare & Life Sciences' },
  { icon: '🛒', name: 'Retail & eCommerce' },
  { icon: '⚖️', name: 'Legal & Professional Services' },
  { icon: '🏭', name: 'Manufacturing' },
  { icon: '🎓', name: 'Education' },
  { icon: '🌱', name: 'Startups & Scale-ups' }
];

const Industries: React.FC = () => {
  return (
    <Section variant="mist">
      <Container>
        <SectionHeader
          label="Sectors We Serve"
          title="Deep Expertise Across Industries"
        />

        <IndustriesList className="reveal">
          {industries.map((industry, index) => (
            <IndustryItem key={index}>
              <IndustryIcon>{industry.icon}</IndustryIcon>
              {industry.name}
            </IndustryItem>
          ))}
        </IndustriesList>
      </Container>
    </Section>
  );
};

export default Industries;
