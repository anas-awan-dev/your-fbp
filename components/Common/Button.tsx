import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

export const Button = styled.button<{ variant?: 'gold' | 'outline' | 'outline-dark' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;

  ${props => {
    switch (props.variant) {
      case 'gold':
        return `
          background: var(--gold);
          color: var(--navy);

          &:hover {
            background: var(--gold-light);
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(201, 168, 76, 0.35);
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: var(--white);
          border: 1.5px solid rgba(255, 255, 255, 0.35);

          &:hover {
            border-color: var(--gold);
            color: var(--gold);
          }
        `;
      case 'outline-dark':
        return `
          background: transparent;
          color: var(--navy);
          border: 1.5px solid var(--navy);

          &:hover {
            background: var(--navy);
            color: var(--white);
          }
        `;
      default:
        return `
          background: var(--primary-blue);
          color: var(--white);

          &:hover {
            background: var(--primary-blue-dark);
            transform: translateY(-2px);
          }
        `;
    }
  }}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.8125rem;
  }
`;

export const ButtonLink = styled.a<{ variant?: 'gold' | 'outline' | 'outline-dark' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;

  ${props => {
    switch (props.variant) {
      case 'gold':
        return `
          background: var(--gold);
          color: var(--navy);

          &:hover {
            background: var(--gold-light);
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(201, 168, 76, 0.35);
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: var(--white);
          border: 1.5px solid rgba(255, 255, 255, 0.35);

          &:hover {
            border-color: var(--gold);
            color: var(--gold);
          }
        `;
      case 'outline-dark':
        return `
          background: transparent;
          color: var(--navy);
          border: 1.5px solid var(--navy);

          &:hover {
            background: var(--navy);
            color: var(--white);
          }
        `;
      default:
        return `
          background: var(--primary-blue);
          color: var(--white);

          &:hover {
            background: var(--primary-blue-dark);
            transform: translateY(-2px);
          }
        `;
    }
  }}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.8125rem;
  }
`;

export const Arrow = styled(FaArrowRight)`
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  ${Button}:hover &, ${ButtonLink}:hover & {
    transform: translateX(4px);
  }
`;
