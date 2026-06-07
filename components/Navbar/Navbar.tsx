'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ButtonLink } from '../Common';

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: ${props => props.$scrolled ? '0.9rem 0' : '1.25rem 0'};
  transition: background 0.4s, box-shadow 0.4s, padding 0.4s;
  background: ${props => props.$scrolled ? 'rgba(11, 22, 40, 0.97)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(12px)' : 'none'};
  box-shadow: ${props => props.$scrolled ? '0 1px 0 rgba(201, 168, 76, 0.2)' : 'none'};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;
`;

const LogoTop = styled.span`
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--white);
  letter-spacing: 0.01em;
  line-height: 1;
`;

const LogoSub = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  color: var(--gold);
  text-transform: uppercase;
  margin-top: 2px;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled.a<{ $active?: boolean }>`
  font-size: 0.83rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: ${props => props.$active ? 'var(--gold)' : 'rgba(255, 255, 255, 0.75)'};
  text-decoration: none;
  transition: color 0.25s;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--gold);
    transform: ${props => props.$active ? 'scaleX(1)' : 'scaleX(0)'};
    transition: transform 0.3s var(--ease);
    transform-origin: left;
  }

  &:hover,
  &:focus {
    color: var(--white);
    outline: none;

    &::after {
      transform: scaleX(1);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--gold);
    outline-offset: 4px;
    border-radius: 2px;
  }
`;

const NavCTA = styled.div`
  margin-left: 1rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Hamburger = styled.div<{ $open: boolean }>`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 4px;
  position: relative;
  z-index: 101;

  @media (max-width: 900px) {
    display: flex;
  }

  span {
    display: block;
    width: 22px;
    height: 1.5px;
    background: var(--white);
    transition: all 0.3s;

    ${props => props.$open && `
      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
      }
    `}
  }
`;

const MobileMenuOverlay = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => props.$open ? 'block' : 'none'};
  z-index: 98;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (min-width: 901px) {
    display: none;
  }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background: rgba(11, 22, 40, 0.98);
  backdrop-filter: blur(12px);
  padding: 2rem;
  display: ${props => props.$open ? 'flex' : 'none'};
  flex-direction: column;
  gap: 1.5rem;
  border-top: 1px solid rgba(201, 168, 76, 0.2);
  z-index: 99;
  max-height: calc(100vh - 64px);
  overflow-y: auto;
  animation: slideDown 0.3s ease;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 901px) {
    display: none;
  }
`;

const MobileNavLink = styled.a<{ $active?: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.$active ? 'var(--gold)' : 'rgba(255, 255, 255, 0.75)'};
  text-decoration: none;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.25s;
  border-radius: 4px;
  ${props => props.$active && `
    font-weight: 600;
  `}

  &:hover,
  &:focus {
    color: var(--gold);
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid var(--gold);
    outline-offset: 2px;
    background: rgba(201, 168, 76, 0.1);
  }
`;

interface NavbarProps {
  onContactClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Determine active section based on scroll position
      const sections = ['services', 'about', 'process', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }

      // If scrolled to very top, clear active section
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click/touch to close mobile menu
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('[data-hamburger]')
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setActiveSection(sectionId); // Set active immediately on click
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    } else {
      handleNavClick(e, 'contact');
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Nav $scrolled={scrolled}>
        <Container>
          <NavInner>
            <Logo href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <LogoTop>YourFBP</LogoTop>
              <LogoSub>Finance Business Partner</LogoSub>
            </Logo>

            <NavLinks>
              <li><NavLink href="#services" onClick={(e) => handleNavClick(e, 'services')} $active={activeSection === 'services'}>Services</NavLink></li>
              <li><NavLink href="#about" onClick={(e) => handleNavClick(e, 'about')} $active={activeSection === 'about'}>About</NavLink></li>
              <li><NavLink href="#process" onClick={(e) => handleNavClick(e, 'process')} $active={activeSection === 'process'}>Our Process</NavLink></li>
              <li><NavLink href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} $active={activeSection === 'testimonials'}>Clients</NavLink></li>
              <li><NavLink href="#contact" onClick={handleContactClick} $active={activeSection === 'contact'}>Contact</NavLink></li>
            </NavLinks>

            <NavCTA>
              <ButtonLink variant="gold" href="#contact" onClick={handleContactClick}>
                Get Consultation
              </ButtonLink>
            </NavCTA>

            <Hamburger
              $open={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-hamburger
            >
              <span /><span /><span />
            </Hamburger>
          </NavInner>
        </Container>
      </Nav>

      <MobileMenuOverlay $open={mobileMenuOpen} onClick={() => setMobileMenuOpen(false)} />

      <MobileMenu $open={mobileMenuOpen} ref={mobileMenuRef}>
        <MobileNavLink href="#services" onClick={(e) => handleNavClick(e, 'services')} $active={activeSection === 'services'}>Services</MobileNavLink>
        <MobileNavLink href="#about" onClick={(e) => handleNavClick(e, 'about')} $active={activeSection === 'about'}>About</MobileNavLink>
        <MobileNavLink href="#process" onClick={(e) => handleNavClick(e, 'process')} $active={activeSection === 'process'}>Our Process</MobileNavLink>
        <MobileNavLink href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} $active={activeSection === 'testimonials'}>Clients</MobileNavLink>
        <MobileNavLink href="#contact" onClick={handleContactClick} $active={activeSection === 'contact'}>Contact</MobileNavLink>
      </MobileMenu>
    </>
  );
};

export default Navbar;
