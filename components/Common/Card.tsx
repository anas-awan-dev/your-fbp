import styled from 'styled-components';

export const Card = styled.div<{ variant?: 'default' | 'dark' | 'transparent' }>`
  background: ${props => {
    switch (props.variant) {
      case 'dark':
        return 'var(--navy)';
      case 'transparent':
        return 'rgba(255, 255, 255, 0.04)';
      default:
        return 'var(--white)';
    }
  }};
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid ${props => props.variant === 'dark' || props.variant === 'transparent'
    ? 'rgba(201, 168, 76, 0.15)'
    : 'var(--gray-200)'};
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    ${props => props.variant === 'transparent' && `
      border-color: rgba(201, 168, 76, 0.45);
      background: rgba(255, 255, 255, 0.07);
    `}
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const CardIcon = styled.div<{ variant?: 'gradient' | 'gold' | 'outline' }>`
  width: 60px;
  height: 60px;
  border-radius: ${props => props.variant === 'outline' ? '50%' : '12px'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  ${props => {
    switch (props.variant) {
      case 'gold':
        return `
          background: var(--gold);
          color: var(--navy);
        `;
      case 'outline':
        return `
          background: transparent;
          border: 2px solid var(--gold);
          color: var(--gold);
        `;
      default:
        return `
          background: linear-gradient(135deg, var(--primary-blue-light) 0%, var(--primary-blue) 100%);
          color: var(--white);
        `;
    }
  }}
`;

export const CardTitle = styled.h3<{ variant?: 'default' | 'light' }>`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.variant === 'light' ? 'var(--white)' : 'var(--gray-800)'};
  margin-bottom: 0.75rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const CardDescription = styled.p<{ variant?: 'default' | 'light' }>`
  color: ${props => props.variant === 'light' ? 'rgba(255, 255, 255, 0.75)' : 'var(--gray-600)'};
  line-height: 1.7;
  font-size: 0.9375rem;
`;
