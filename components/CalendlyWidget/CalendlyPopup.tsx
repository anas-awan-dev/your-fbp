'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';

const ScheduleButton = styled.button`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  min-width: 200px;
  
  &:hover {
    background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

interface CalendlyButtonProps {
  calendlyUrl?: string;
  buttonText?: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
  utm?: {
    utmCampaign?: string;
    utmSource?: string;
    utmMedium?: string;
    utmContent?: string;
    utmTerm?: string;
  };
}

export const CalendlyButton: React.FC<CalendlyButtonProps> = ({
  calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/your-username/15-minute-demo',
  buttonText = 'Schedule Free Demo',
  prefill,
  utm
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      if (document.querySelector('script[src*="calendly"]')) {
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);

      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, [mounted]);

  const handleClick = () => {
    if (typeof window !== 'undefined') {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({
          url: calendlyUrl,
          prefill,
          utm
        });
      } else {
        window.open(calendlyUrl, '_blank', 'width=800,height=600');
      }
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <ScheduleButton onClick={handleClick}>
      <FaCalendarAlt aria-hidden="true" />
      {buttonText}
    </ScheduleButton>
  );
};