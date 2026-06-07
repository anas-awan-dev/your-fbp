import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Label = styled.div<{ variant?: 'default' | 'light' }>`
  font-family: 'Courier New', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${props => props.variant === 'light' ? 'var(--gold-light)' : 'var(--gold)'};
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Title = styled.h2<{ variant?: 'default' | 'light' }>`
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: ${props => props.variant === 'light' ? 'var(--white)' : 'var(--navy)'};
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const Subtitle = styled.p<{ variant?: 'default' | 'light' }>`
  font-size: 1.0625rem;
  color: ${props => props.variant === 'light' ? 'rgba(255, 255, 255, 0.75)' : 'var(--gray-600)'};
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  variant?: 'default' | 'light';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  variant = 'default'
}) => {
  return (
    <Header>
      {label && <Label variant={variant}>{label}</Label>}
      <Title variant={variant}>{title}</Title>
      {subtitle && <Subtitle variant={variant}>{subtitle}</Subtitle>}
    </Header>
  );
};
