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
  FaReceipt
} from 'react-icons/fa';

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background: #f8fafc;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.header`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled.article`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  &:focus-within {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  font-size: 1rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
`;

const ServiceFeature = styled.li`
  color: #475569;
  font-size: 0.9rem;
  padding: 0.25rem 0;
  position: relative;
  padding-left: 1rem;
  
  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #22c55e;
    font-weight: bold;
  }
`;

const services = [
  {
    icon: FaHandshake,
    title: 'Financial Consulting',
    description: 'Expert guidance tailored to your unique financial situation and goals.',
    features: [
      'Personalized financial strategy',
      'Goal-setting and planning',
      'Regular progress reviews',
      'Market insights and analysis'
    ]
  },
  {
    icon: FaChartLine,
    title: 'Portfolio Management',
    description: 'Professional management of your investment portfolio for optimal returns.',
    features: [
      'Diversified investment strategies',
      'Risk assessment and management',
      'Performance monitoring',
      'Rebalancing and optimization'
    ]
  },
  {
    icon: FaCalculator,
    title: 'Investment Strategies',
    description: 'Customized investment approaches designed to meet your financial objectives.',
    features: [
      'Asset allocation planning',
      'Market timing strategies',
      'Tax-efficient investing',
      'Alternative investment options'
    ]
  },
  {
    icon: FaShieldAlt,
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation strategies for your investments.',
    features: [
      'Risk tolerance evaluation',
      'Insurance planning',
      'Hedge strategies',
      'Crisis management planning'
    ]
  },
  {
    icon: FaPiggyBank,
    title: 'Retirement Planning',
    description: 'Strategic planning to ensure a comfortable and secure retirement.',
    features: [
      'Retirement income planning',
      '401(k) and IRA optimization',
      'Social Security strategies',
      'Healthcare cost planning'
    ]
  },
  {
    icon: FaGlobeAmericas,
    title: 'Global Investment',
    description: 'Access to international markets and global investment opportunities.',
    features: [
      'International diversification',
      'Currency hedging strategies',
      'Emerging markets access',
      'Global economic analysis'
    ]
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Accountancy',
    description: 'Professional accounting services to keep your finances organized and compliant.',
    features: [
      'Financial statement preparation',
      'Audit and assurance services',
      'Management accounting',
      'Financial analysis and reporting'
    ]
  },
  {
    icon: FaBook,
    title: 'Bookkeeping & Payroll',
    description: 'Comprehensive bookkeeping and payroll management for your business.',
    features: [
      'Daily transaction recording',
      'Payroll processing and compliance',
      'Employee benefits administration',
      'Monthly financial reconciliation'
    ]
  },
  {
    icon: FaReceipt,
    title: 'Taxation',
    description: 'Expert tax planning and preparation services to maximize your savings.',
    features: [
      'Tax return preparation',
      'Tax planning strategies',
      'IRS representation',
      'Tax compliance consulting'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <ServicesSection id="services">
      <Container>
        <SectionHeader>
          <SectionTitle>Our Financial Services</SectionTitle>
          <SectionSubtitle>
            Comprehensive financial solutions tailored to help you achieve your goals 
            and secure your financial future
          </SectionSubtitle>
        </SectionHeader>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>
                <service.icon aria-hidden="true" />
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, featureIndex) => (
                  <ServiceFeature key={featureIndex}>{feature}</ServiceFeature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;