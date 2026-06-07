import React from 'react';
import styled from 'styled-components';
import { Section, Container, ButtonLink } from '../Common';
import { FaArrowRight } from 'react-icons/fa';

const TestiHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 3rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const HeadContent = styled.div`
  .label {
    font-family: 'Courier New', monospace;
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold-light);
    margin-bottom: 0.5rem;
    display: block;
  }

  h2 {
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    color: var(--white);
    max-width: 400px;
  }
`;

const TestiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TestiCard = styled.article`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(201, 168, 76, 0.15);
  padding: 2rem 2rem 1.75rem;
  transition: border-color 0.3s, background 0.3s;

  &:hover {
    border-color: rgba(201, 168, 76, 0.45);
    background: rgba(255, 255, 255, 0.07);
  }
`;

const TestiStars = styled.div`
  color: var(--gold);
  font-size: 0.8rem;
  margin-bottom: 1.25rem;
  letter-spacing: 0.1em;
`;

const TestiQuote = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 1.75rem;
`;

const TestiAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TestiAvatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), var(--navy3));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--white);
  font-size: 0.9rem;
  flex-shrink: 0;
`;

const TestiInfo = styled.div`
  .name {
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--white);
  }

  .role {
    font-size: 0.75rem;
    color: var(--slate);
    margin-top: 1px;
  }
`;

const testimonials = [
  {
    stars: 5,
    quote: "Working with YourFBP has been transformative. Their global expertise and personal approach helped us navigate complex international markets and achieve a 40% increase in portfolio value within 18 months.",
    name: "Sarah Johnson",
    initials: "SJ",
    role: "CEO, TechGlobal Solutions — New York"
  },
  {
    stars: 5,
    quote: "The retirement planning service exceeded all expectations. Their thorough analysis gave us complete confidence in our financial future. The attention to detail and UK regulatory knowledge is unmatched.",
    name: "Michael Chen",
    initials: "MC",
    role: "Managing Director, Chen Industries — Singapore"
  },
  {
    stars: 5,
    quote: "As a founder scaling into European markets, I needed a partner who understood both tax compliance and growth strategy. YourFBP delivered on both fronts. Truly professional, truly invested in our success.",
    name: "Elena Rodriguez",
    initials: "ER",
    role: "Founder, Rodriguez Consulting — Madrid"
  }
];

const Testimonials: React.FC = () => {
  return (
    <Section variant="dark" id="testimonials">
      <Container>
        <TestiHead className="reveal">
          <HeadContent>
            <span className="label">Client Voices</span>
            <h2>What Our Clients Say</h2>
          </HeadContent>
          <ButtonLink variant="outline" href="#contact">
            Join Our Clients <FaArrowRight />
          </ButtonLink>
        </TestiHead>

        <TestiGrid>
          {testimonials.map((testimonial, index) => (
            <TestiCard key={index} className={`reveal ${index > 0 ? `reveal-delay-${index}` : ''}`}>
              <TestiStars>{'★'.repeat(testimonial.stars)}</TestiStars>
              <TestiQuote>&ldquo;{testimonial.quote}&rdquo;</TestiQuote>
              <TestiAuthor>
                <TestiAvatar>{testimonial.initials}</TestiAvatar>
                <TestiInfo>
                  <div className="name">{testimonial.name}</div>
                  <div className="role">{testimonial.role}</div>
                </TestiInfo>
              </TestiAuthor>
            </TestiCard>
          ))}
        </TestiGrid>
      </Container>
    </Section>
  );
};

export default Testimonials;
