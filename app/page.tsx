'use client';

import React, { useRef, useEffect } from 'react';
import Overview from '../components/Overview';
import Ticker from '../components/Ticker';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import StatsBand from '../components/StatsBand';
import Process from '../components/Process';
import Industries from '../components/Industries';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

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
        telephone: '+92-309-8402154',
        contactType: 'customer service',
        email: 'info@yourfbp.com',
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

  // Reveal on scroll animation
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((r) => observer.observe(r));

    return () => {
      reveals.forEach((r) => observer.unobserve(r));
    };
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main>
        <Overview onContactClick={scrollToContact} />
        <Ticker />
        <Services />
        <AboutUs />
        <StatsBand />
        <Process />
        <Industries />
        <Testimonials />
        <div ref={contactRef}>
          <ContactForm />
        </div>
      </main>

      <Footer />
    </>
  );
}
