import React from 'react';
import styled from 'styled-components';
import { Section, Container, SectionHeader } from '../Common';

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 2.25rem;
    left: 2.5rem;
    right: 2.5rem;
    height: 1px;
    background: linear-gradient(90deg, var(--gold) 0%, rgba(201, 168, 76, 0.2) 100%);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    &::before {
      display: none;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessStep = styled.div`
  padding: 0 1.5rem;
`;

const ProcessNum = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  font-weight: 600;
  background: var(--white);
  border: 2px solid var(--gold);
  color: var(--gold);
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  transition: all 0.4s var(--ease);

  ${ProcessStep}:hover & {
    background: var(--gold);
    color: var(--navy);
  }
`;

const ProcessTitle = styled.h4`
  font-size: 1.1rem;
  color: var(--navy);
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ProcessDescription = styled.p`
  font-size: 0.855rem;
  color: var(--body);
  line-height: 1.7;
`;

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'A free, in-depth consultation to understand your financial position, objectives, and challenges.'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We design a bespoke financial plan, selecting the optimal service mix and presenting a clear roadmap.'
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Our expert team implements the plan with rigorous attention to compliance, accuracy, and deadlines.'
  },
  {
    number: '04',
    title: 'Review & Optimise',
    description: 'Regular performance reviews and proactive advice to keep your finances optimised as your business evolves.'
  }
];

const Process: React.FC = () => {
  return (
    <Section id="process">
      <Container>
        <SectionHeader
          label="How We Work"
          title="A Proven, Structured Approach"
          subtitle="Every engagement follows our four-step methodology, ensuring clarity, accountability and results from day one."
        />

        <ProcessSteps>
          {steps.map((step, index) => (
            <ProcessStep key={index} className={`reveal ${index > 0 ? `reveal-delay-${index}` : ''}`}>
              <ProcessNum>{step.number}</ProcessNum>
              <ProcessTitle>{step.title}</ProcessTitle>
              <ProcessDescription>{step.description}</ProcessDescription>
            </ProcessStep>
          ))}
        </ProcessSteps>
      </Container>
    </Section>
  );
};

export default Process;
