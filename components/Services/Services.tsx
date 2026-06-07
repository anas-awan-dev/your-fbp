import React from 'react';
import styled from 'styled-components';
import {
  FaChartLine,
  FaShieldAlt,
  FaHandshake,
  FaPiggyBank,
  FaCalculator,
  FaGlobeAmericas,
  FaFileInvoiceDollar,
  FaBook,
  FaReceipt,
  FaArrowRight
} from 'react-icons/fa';
import { Section, Container, SectionHeader, ButtonLink } from '../Common';

const ServicesHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: end;
  margin-bottom: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const HeadContent = styled.div`
  p {
    color: var(--body);
    max-width: 380px;
    margin-top: 1rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5px;
  background: rgba(11, 22, 40, 0.08);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.article`
  background: var(--white);
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s var(--ease);

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gold);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s var(--ease);
  }

  &:hover {
    background: var(--navy);

    &::before {
      transform: scaleX(1);
    }
  }

  &:hover .service-title,
  &:hover .service-icon {
    color: var(--white);
  }

  &:hover .service-desc {
    color: rgba(255, 255, 255, 0.6);
  }

  &:hover .service-num {
    color: rgba(201, 168, 76, 0.3);
  }
`;

const ServiceNum = styled.div`
  font-family: 'Courier New', monospace;
  font-size: 0.65rem;
  color: rgba(11, 22, 40, 0.2);
  margin-bottom: 1.5rem;
  letter-spacing: 0.1em;
  transition: color 0.4s;
`;

const ServiceIcon = styled.div`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  transition: color 0.4s;
  color: var(--navy);
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 0.75rem;
  transition: color 0.4s;
  line-height: 1.3;
`;

const ServiceDesc = styled.p`
  font-size: 0.875rem;
  color: var(--body);
  line-height: 1.7;
  transition: color 0.4s;
`;

const ServiceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--gold);
  text-decoration: none;
  margin-top: 1.5rem;
  letter-spacing: 0.04em;
  transition: gap 0.3s var(--ease);

  &:hover {
    gap: 0.6rem;
  }
`;

const services = [
  {
    num: '01',
    icon: FaHandshake,
    title: 'Financial Consulting',
    description: 'Bespoke financial strategies tailored to your business stage, sector, and growth objectives. We combine global market insight with local expertise.'
  },
  {
    num: '02',
    icon: FaChartLine,
    title: 'Portfolio Management',
    description: 'Institutional-grade portfolio construction with rigorous risk controls, diversification strategies, and continuous performance monitoring.'
  },
  {
    num: '03',
    icon: FaGlobeAmericas,
    title: 'Global Investment',
    description: 'Access international capital markets, emerging economies, and cross-border opportunities with expert currency and geopolitical risk management.'
  },
  {
    num: '04',
    icon: FaFileInvoiceDollar,
    title: 'Accountancy',
    description: 'Statutory accounts, management reporting, audit support, and financial analysis prepared to UK GAAP and IFRS standards by certified professionals.'
  },
  {
    num: '05',
    icon: FaReceipt,
    title: 'Taxation',
    description: 'Corporate tax, personal tax, VAT, and international tax advisory. We optimise your tax position whilst ensuring full HMRC compliance.'
  },
  {
    num: '06',
    icon: FaBook,
    title: 'Bookkeeping & Payroll',
    description: 'Accurate, timely bookkeeping and compliant payroll processing. Real-time financial data so you can make confident decisions every day.'
  },
  {
    num: '07',
    icon: FaShieldAlt,
    title: 'Risk Management',
    description: 'Comprehensive risk profiling, hedging strategies, and crisis response planning to protect your assets and ensure business continuity.'
  },
  {
    num: '08',
    icon: FaPiggyBank,
    title: 'Retirement Planning',
    description: 'Structured pension strategies, ISA optimisation, and income drawdown planning to secure a comfortable, tax-efficient retirement.'
  },
  {
    num: '09',
    icon: FaCalculator,
    title: 'Investment Strategies',
    description: 'Evidence-based, tax-efficient investment approaches — from passive index strategies to alternative assets — aligned to your financial goals.'
  }
];

const Services: React.FC = () => {
  return (
    <Section id="services">
      <Container>
        <ServicesHead className="reveal">
          <HeadContent>
            <SectionHeader
              label="What We Offer"
              title="Comprehensive Financial Services Under One Roof"
            />
          </HeadContent>
          <div>
            <p>From audit-ready accounts to complex international tax structures — our integrated team handles it all with precision and care.</p>
            <ButtonLink variant="outline-dark" href="#contact" style={{ marginTop: '1.25rem' }}>
              Talk to an Expert <FaArrowRight />
            </ButtonLink>
          </div>
        </ServicesHead>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index} className={`reveal ${index % 3 > 0 ? `reveal-delay-${index % 3}` : ''}`}>
              <ServiceNum className="service-num">{service.num}</ServiceNum>
              <ServiceIcon className="service-icon">
                <service.icon aria-hidden="true" />
              </ServiceIcon>
              <ServiceTitle className="service-title">{service.title}</ServiceTitle>
              <ServiceDesc className="service-desc">{service.description}</ServiceDesc>
              <ServiceLink href="#contact">
                Learn more <FaArrowRight />
              </ServiceLink>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </Section>
  );
};

export default Services;
