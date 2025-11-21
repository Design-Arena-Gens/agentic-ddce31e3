"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const features = [
  {
    title: "Interactive Lessons",
    description:
      "Train with adaptive holodeck drills, pronunciation coaches, and battle-ready dialogues that react to your voice and decisions in real time.",
    icon: "/assets/icon-lessons.svg",
    alt: "Icon depicting guided Klingon lesson glyphs",
  },
  {
    title: "Cultural Immersion",
    description:
      "Unlock chronicles of Klingon history, rituals, and honor codes. Each completed lesson reveals new lore, artifacts, and ceremonial music.",
    icon: "/assets/icon-culture.svg",
    alt: "Icon showing a Klingon emblem surrounded by energy rings",
  },
  {
    title: "Phrasebook & Translator",
    description:
      "Summon instant translations, phonetic guidance, and situational phrases. Switch between Federation Standard and High Klingon in a breath.",
    icon: "/assets/icon-translator.svg",
    alt: "Icon showing twin hexagonal panels with translation arrows",
  },
];

const testimonials = [
  {
    name: "Scholar Kor",
    title: "Keeper of the Great Hall Archives",
    quote:
      "“The honorific drills are uncompromising. At last, a Federation tool worthy of Klingon throats.”",
    portrait: "/assets/testimonial-kor.svg",
    alt: "Stylized portrait of Scholar Kor wearing ceremonial armor",
  },
  {
    name: "Strategist Lursa",
    title: "Fleet Linguistics Commander",
    quote:
      "“My cadets doubled their combat call response speed. This app forges precision through relentless feedback.”",
    portrait: "/assets/testimonial-lursa.svg",
    alt: "Stylized portrait of Strategist Lursa with braided armor",
  },
  {
    name: "Captain Martor",
    title: "IKS Hegh'ta Captain",
    quote:
      "“During negotiations, I spoke with flawless guttural cadence. The council applauded. Glory was mine.”",
    portrait: "/assets/testimonial-martor.svg",
    alt: "Stylized portrait of Captain Martor with a tactical visor",
  },
];

const showcaseHighlights = [
  {
    label: "Honor Track",
    detail: "Earn ranks, unlock bat'leth forms, and compete in global warrior leaderboards.",
  },
  {
    label: "Real-Time Analyzer",
    detail: "Waveform visualizer grades every glottal strike and uvular trill for perfect fidelity.",
  },
  {
    label: "Mission Scenarios",
    detail: "Negotiate treaties, command crews, and recite victory oaths under simulated pressure.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.page}>
      <a className={styles.srOnly} href="#main-content">
        Skip to main content
      </a>

      <header>
        <nav className={styles.nav} aria-label="Primary">
          <div className={styles.brand}>
            <span className={styles.brandLogo} aria-hidden="true" />
            <span className={styles.brandName}>Learn Klingon</span>
          </div>

          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={handleToggleMenu}
          >
            Menu
          </button>

          <div
            id="primary-navigation"
            className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}
          >
            <Link href="#features" onClick={handleCloseMenu}>
              Features
            </Link>
            <Link href="#showcase" onClick={handleCloseMenu}>
              App
            </Link>
            <Link href="#testimonials" onClick={handleCloseMenu}>
              Honor
            </Link>
          </div>

          <Link className={styles.navCta} href="#download" onClick={handleCloseMenu}>
            Begin
          </Link>
        </nav>
      </header>

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Honor Your Words</span>
            <h1 id="hero-heading" className={styles.heroTitle}>
              Qapla&apos;! Master the Klingon Tongue.
            </h1>
            <p className={styles.heroSubtitle}>
              Unlock the secrets of Klingon culture through language. Train your voice, honor your
              lineage, and command respect across the quadrant.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="#features">
                Begin Your Training
              </Link>
            </div>
          </div>

          <div className={styles.heroImageWrapper}>
            <span className={styles.logoBadge}>Honor Grade AI</span>
            <Image
              src="/assets/hero-warrior.svg"
              alt="Stylized Klingon warrior with the Learn Klingon emblem"
              width={640}
              height={640}
              priority
            />
          </div>
        </section>

        <section id="features" className={styles.section} aria-labelledby="features-heading">
          <div className={styles.sectionHeading}>
            <span>Command Core</span>
            <h2 id="features-heading">Weapons of Linguistic Mastery</h2>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <article key={feature.title} className={styles.featureCard}>
                <Image
                  className={styles.featureIcon}
                  src={feature.icon}
                  alt={feature.alt}
                  width={120}
                  height={120}
                />
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="showcase" className={styles.section} aria-labelledby="showcase-heading">
          <div className={styles.sectionHeading}>
            <span>PADD Interface</span>
            <h2 id="showcase-heading">Designed for Warriors, Forged for Precision</h2>
          </div>
          <div className={styles.showcase}>
            <div className={styles.showcaseText}>
              <p>
                The Learn Klingon PADD interface delivers layered mission briefings, dialect trees,
                and biometric feedback in one battle-ready console. Navigate lessons, track honor
                ranks, and command instant translation with a single tap.
              </p>
              <div className={styles.showcaseHighlights}>
                {showcaseHighlights.map((highlight) => (
                  <div key={highlight.label} className={styles.highlight}>
                    <strong>{highlight.label}</strong>
                    <span>{highlight.detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="/assets/padd-showcase.svg"
              alt="Mockup of the Learn Klingon app displayed on a Klingon PADD"
              width={960}
              height={640}
              loading="lazy"
            />
          </div>
        </section>

        <section
          id="testimonials"
          className={styles.section}
          aria-labelledby="testimonials-heading"
        >
          <div className={styles.sectionHeading}>
            <span>Honor Guard</span>
            <h2 id="testimonials-heading">Voices From the Empire</h2>
          </div>

          <div className={styles.testimonials}>
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className={styles.testimonialCard}>
                <div className={styles.testimonialPortrait}>
                  <Image
                    src={testimonial.portrait}
                    alt={testimonial.alt}
                    width={200}
                    height={200}
                  />
                </div>
                <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                <div>
                  <p className={styles.testimonialName}>{testimonial.name}</p>
                  <p className={styles.testimonialTitle}>{testimonial.title}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="download" className={`${styles.section} ${styles.ctaBanner}`} aria-label="Call to action">
          <div className={styles.ctaContent}>
            <span className={styles.eyebrow}>Final Directive</span>
            <h2 className={styles.ctaTitle}>Seize Your Destiny. Download Learn Klingon Today!</h2>
            <p className={styles.heroSubtitle}>
              Harness the discipline of the Empire across every device. Your command of the tongue
              begins where pride meets precision.
            </p>
          </div>
          <div className={styles.downloadButtons}>
            <Link className={styles.downloadButton} href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              App Store
            </Link>
            <Link className={styles.downloadButton} href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              Google Play
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer} aria-label="Footer">
        <div className={styles.footerInner}>
          <Image
            className={styles.footerEmblem}
            src="/assets/klingon-emblem.svg"
            alt="Klingon emblem for Learn Klingon"
            width={96}
            height={96}
          />
          <div className={styles.footerMeta}>
            <p>© {new Date().getFullYear()} Learn Klingon: Honor Your Words. All rights reserved.</p>
            <div className={styles.footerNav}>
              <Link href="#features">Features</Link>
              <Link href="#showcase">Showcase</Link>
              <Link href="#testimonials">Testimonials</Link>
              <Link href="#">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
