'use client';

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Section, Container } from '../Common';

const StatsSection = styled(Section)`
  padding: 5rem 0;
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  padding: 0 3rem;
  text-align: center;
  border-right: 1px solid rgba(201, 168, 76, 0.2);

  &:first-child {
    border-left: 1px solid rgba(201, 168, 76, 0.2);
  }

  @media (max-width: 900px) {
    padding: 2rem;
    border: 1px solid rgba(201, 168, 76, 0.15);
    margin: 0;

    &:first-child {
      border-left: 1px solid rgba(201, 168, 76, 0.15);
    }
  }
`;

const StatNum = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1;

  sup {
    font-size: 1.5rem;
    vertical-align: super;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: var(--slate);
  margin-top: 0.5rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const StatsBand: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const targets = [1000, 15, 75, 9];
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animate each counter
            targets.forEach((target, index) => {
              const duration = 1800;
              const steps = 60;
              const increment = target / steps;
              const stepDuration = duration / steps;
              let current = 0;

              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(current);
                  return newCounts;
                });
              }, stepDuration);
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [hasAnimated]);

  return (
    <StatsSection variant="dark" ref={sectionRef}>
      <Container>
        <StatsRow>
          <StatItem className="reveal">
            <StatNum>{counts[0]}<sup>+</sup></StatNum>
            <StatLabel>Satisfied Clients</StatLabel>
          </StatItem>
          <StatItem className="reveal reveal-delay-1">
            <StatNum>{counts[1]}<sup>+</sup></StatNum>
            <StatLabel>Years of Experience</StatLabel>
          </StatItem>
          <StatItem className="reveal reveal-delay-2">
            <StatNum>{counts[2]}<sup>+</sup></StatNum>
            <StatLabel>Expert Professionals</StatLabel>
          </StatItem>
          <StatItem className="reveal reveal-delay-3">
            <StatNum>{counts[3]}</StatNum>
            <StatLabel>Core Service Lines</StatLabel>
          </StatItem>
        </StatsRow>
      </Container>
    </StatsSection>
  );
};

export default StatsBand;
