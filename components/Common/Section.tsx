import styled from 'styled-components';

export const Section = styled.section<{ variant?: 'default' | 'dark' | 'cream' | 'mist' }>`
  padding: 5rem 2rem;
  background: ${props => {
    switch (props.variant) {
      case 'dark':
        return 'var(--navy)';
      case 'cream':
        return 'var(--cream)';
      case 'mist':
        return 'var(--mist)';
      default:
        return 'var(--white)';
    }
  }};
  color: ${props => props.variant === 'dark' ? 'var(--white)' : 'var(--gray-800)'};

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;
