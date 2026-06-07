import React from 'react';
import styled from 'styled-components';

const TickerSection = styled.div`
  background: var(--navy2);
  border-top: 1px solid rgba(201, 168, 76, 0.15);
  border-bottom: 1px solid rgba(201, 168, 76, 0.15);
  padding: 0.75rem 0;
  overflow: hidden;
`;

const TickerInner = styled.div`
  display: flex;
  gap: 4rem;
  animation: ticker 22s linear infinite;
  white-space: nowrap;

  @keyframes ticker {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

const TickerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.5);

  span {
    color: var(--gold);
    font-weight: 600;
  }
`;

const services = [
  'Financial Consulting',
  'Portfolio Management',
  'Taxation',
  'Bookkeeping & Payroll',
  'Risk Management',
  'Retirement Planning',
  'Global Investment',
  'Accountancy',
  'Investment Strategies'
];

const Ticker: React.FC = () => {
  return (
    <TickerSection>
      <TickerInner>
        {/* Render twice for seamless loop */}
        {[...services, ...services].map((service, index) => (
          <TickerItem key={index}>
            {service} <span>✦</span>
          </TickerItem>
        ))}
      </TickerInner>
    </TickerSection>
  );
};

export default Ticker;
