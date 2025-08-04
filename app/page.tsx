'use client';

import React, { useRef } from 'react';
import Overview from '../components/Overview';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Your Finance Business Partner',
      url: 'https://yourfbp.com',
      logo: 'https://yourfbp.com/logo.png',
      description: 'Professional financial services with global expertise. Investment strategies, portfolio management, retirement planning, and risk management solutions.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+92-345-2170895',
        contactType: 'customer service',
        email: 'contact@yourfbp.com',
      },
      sameAs: [
        'https://linkedin.com/company/your-finance-business-profile',
        'https://twitter.com/yourfbp',
      ],
      foundingDate: '2008',
      numberOfEmployees: 75,
      industry: 'Financial Services',
      areaServed: 'Worldwide',
    },
    {
      '@type': 'WebSite',
      url: 'https://yourfbp.com',
      name: 'Your Finance Business Partner',
      description: 'Professional financial services with global expertise.',
      publisher: {
        '@type': 'Organization',
        name: 'Your Finance Business Partner',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://yourfbp.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main>
        <Overview onContactClick={scrollToContact} />
        <Services />
        <AboutUs />
        <Testimonials />
        <div ref={contactRef}>
          <ContactForm />
        </div>
      </main>
      
      <footer style={{ 
        textAlign: 'center', 
        padding: '2rem', 
        background: '#1e293b', 
        color: 'white' 
      }}>
        <p>&copy; 2025 Your Finance Business Partner. All rights reserved.</p>
        <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>
          Professional financial services with global expertise.
        </p>
      </footer>
    </>
  );
}
