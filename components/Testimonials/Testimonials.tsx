import React from 'react';
import styled from 'styled-components';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialsSection = styled.section`
  padding: 5rem 2rem;
  background: white;
  
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TestimonialCard = styled.article`
  background: #f8fafc;
  padding: 2rem;
  border-radius: 12px;
  position: relative;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -10px;
  left: 2rem;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
`;

const TestimonialText = styled.blockquote`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #374151;
  margin: 1.5rem 0 2rem 0;
  font-style: italic;
  
  &:before,
  &:after {
    content: '';
  }
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ClientAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
`;

const ClientDetails = styled.div`
  flex: 1;
`;

const ClientName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
`;

const ClientTitle = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 0.25rem;
`;

const ClientLocation = styled.p`
  font-size: 0.85rem;
  color: #94a3b8;
`;

const StarRating = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 1rem;
  color: #fbbf24;
`;

const testimonials = [
  {
    id: 1,
    text: "Working with Your Finance Business Partner has been transformative for our company's financial strategy. Their global expertise and personalized approach helped us navigate complex international markets and achieve a 40% increase in our portfolio value.",
    client: {
      name: "Sarah Johnson",
      title: "CEO, TechGlobal Solutions",
      location: "New York, USA",
      initials: "SJ"
    },
    rating: 5
  },
  {
    id: 2,
    text: "The retirement planning services exceeded our expectations. The team's thorough analysis and strategic recommendations gave us complete confidence in our financial future. Their attention to detail and client-focused approach is unmatched.",
    client: {
      name: "Michael Chen",
      title: "Managing Director, Chen Industries",
      location: "Singapore",
      initials: "MC"
    },
    rating: 5
  },
  {
    id: 3,
    text: "As a small business owner, I needed expert guidance to expand internationally. Their risk management strategies and investment advice helped me successfully enter three new markets while protecting my assets. Truly professional service.",
    client: {
      name: "Elena Rodriguez",
      title: "Founder, Rodriguez Consulting",
      location: "Madrid, Spain",
      initials: "ER"
    },
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <SectionHeader>
          <SectionTitle>What Our Clients Say</SectionTitle>
          <SectionSubtitle>
            Discover how we&apos;ve helped businesses and individuals worldwide 
            achieve their financial goals
          </SectionSubtitle>
        </SectionHeader>
        
        <TestimonialsGrid>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <QuoteIcon>
                <FaQuoteLeft aria-hidden="true" />
              </QuoteIcon>
              
              <TestimonialText>
                {testimonial.text}
              </TestimonialText>
              
              <ClientInfo>
                <ClientAvatar>
                  {testimonial.client.initials}
                </ClientAvatar>
                <ClientDetails>
                  <ClientName>{testimonial.client.name}</ClientName>
                  <ClientTitle>{testimonial.client.title}</ClientTitle>
                  <ClientLocation>{testimonial.client.location}</ClientLocation>
                </ClientDetails>
              </ClientInfo>
              
              <StarRating>
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar key={index} aria-hidden="true" />
                ))}
                <span className="sr-only">{testimonial.rating} out of 5 stars</span>
              </StarRating>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;