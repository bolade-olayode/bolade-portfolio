
import type { Metadata } from 'next';
import Image from 'next/image';
import heroPortrait from '@/public/portrait2.webp';
import Link from 'next/link';

import { Navigation, Contact, Footer, Arrow } from '@/components/site/Chrome';
import { PlatformProjects } from '@/components/site/PlatformProjects';
import { platformProjects } from '@/lib/platforms';
import { WebsiteGallery } from '@/components/site/WebsiteGallery';
import { portfolioSites } from '@/lib/portfolio';
import { AppShelf } from '@/components/site/AppShelf';
import { AboutPhotoStack } from '@/components/site/AboutPhotoStack';
import { EngineeringSection } from '@/components/site/EngineeringSection';
import { site, principles, experience, results, testimonials } from '@/lib/site';

export const metadata: Metadata = {
    alternates: {
        canonical: '/',
    },
    openGraph: {
        url: '/',
        images: [
            {
                url: '/opengraph-image',
                width: 1200,
                height: 630,
                alt: `${site.shortName} — ${site.role}`,
            },
        ],
        title: `${site.name} — Senior Full-Stack Engineer`,
        description:
            'Web platforms, mobile apps, and automation built by Bolade Olayode. Explore care management, logistics, and food distribution projects.',
    },
};

export default function Home() {
    return (
        <>
            <Navigation />

            <main id="main-content" className="homepage">

                {/* ==================== HERO SECTION ==================== */}

                <section
                    className="hero container"
                    aria-labelledby="hero-title"
                >
                    <div className="hero-topline">
                        <p className="eyebrow">
                            <span className="accent-line" />
                            {' '}SENIOR FULL-STACK ENGINEER
                        </p>
                    </div>

                    <div className="hero-grid">
                        <div className="hero-copy">
                            <p className="hero-intro">
                                Hi, I’m Bolade Olayode Emmanuel.
                            </p>

                            <h1 id="hero-title">
                                I build web applications for{' '}
                                <em>everyday work.</em>
                            </h1>

                            <p className="hero-description">
                                I’m a senior full-stack engineer with 4+ years
                                of experience building production web and mobile
                                applications across healthcare, fintech,
                                e-commerce, logistics, and SaaS.
                            </p>

                            {site.available && (
                                <p className="hero-availability">
                                    <span aria-hidden="true" />
                                    {site.availability}
                                </p>
                            )}

                            <div className="hero-actions">
                                <Link
                                    href="#work"
                                    className="button button-primary"
                                >
                                    See my work{' '}
                                    <span aria-hidden="true">↓</span>
                                </Link>

                                <a
                                    href={site.resume}
                                    className="button button-secondary"
                                >
                                    View résumé <Arrow />
                                </a>

                                <Link
                                    href="#contact"
                                    className="text-link"
                                >
                                    Get in touch <Arrow />
                                </Link>
                            </div>
                        </div>

                        <div className="hero-aside">
                            <div className="portrait-frame">
                                <Image
                                    src={heroPortrait}
                                    placeholder="blur"
                                    alt="Olayode Bolade Emmanuel"
                                    width={520}
                                    height={650}
                                    priority
                                    sizes="(max-width: 600px) 70vw, (max-width: 800px) 36vw, 400px"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================== RESULTS SECTION ====================

                <section
                    className="results-section container"
                    aria-label="Results from selected projects"
                >
                    <dl className="results-grid">
                        {results.map(result => (
                            <div key={result.label}>
                                <dt>{result.label}</dt>

                                <dd>
                                    <Link href={result.href}>
                                        {result.value}
                                        <span className="sr-only">
                                            {' '}— {result.label}
                                        </span>
                                    </Link>
                                </dd>

                                <dd className="result-detail">
                                    {result.detail}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </section> */}

                {/* ==================== SELECTED WORK ==================== */}

                <section id="work" className="work-section section">
                    <div className="container">
                        <div className="section-heading">
                            <div>
                                <p className="eyebrow">
                                    SELECTED WORK
                                </p>

                                <h2>Selected projects.</h2>
                            </div>

                            <p>
                                Three operational platforms and an online store.
                            </p>
                        </div>

                        <PlatformProjects projects={platformProjects} />

                        <WebsiteGallery
                            sites={portfolioSites.filter(
                                project => project.slug === 'aura-by-nimi'
                            )}
                            id="featured-website"
                            showControl={false}
                        />

                        <div className="portfolio-more">
                            <p>
                                More websites and projects I’ve worked on.
                            </p>

                            <Link
                                href="/portfolio"
                                className="text-link"
                            >
                                View full portfolio <Arrow />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ==================== APP SHELF ==================== */}

                <AppShelf />

                {/* ==================== ENGINEERING SECTION ==================== */}

                <EngineeringSection />

                {/* ==================== ENGINEERING PHILOSOPHY ==================== */}

                <section className="philosophy-section section">
                    <div className="philosophy container">
                        <div className="philosophy-intro">
                            <p className="eyebrow">
                                ENGINEERING PHILOSOPHY
                            </p>

                            <h2>How I approach engineering.</h2>

                            <p>
                                These are the habits I bring to a project,
                                shaped by building, revisiting, and maintaining
                                the work.
                            </p>
                        </div>

                        <div className="principles">
                            {principles.map((p, i) => (
                                <article key={p.title}>
                                    <span>0{i + 1}</span>

                                    <div>
                                        <h3>{p.title}</h3>
                                        <p>{p.text}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ==================== ABOUT SECTION ==================== */}

                <section
                    id="about"
                    className="about-section"
                    aria-label="About me"
                >
                    <div className="container about-grid">

                        {/* About Heading & Photos */}

                        <div className="about-heading">
                            <p className="eyebrow">
                                A LITTLE ABOUT ME
                            </p>

                            <h2>
                                A bit about
                                <br />
                                <span>the person.</span>
                            </h2>

                            <AboutPhotoStack />
                        </div>

                        {/* About Content */}

                        <div className="about-copy">
                            <p className="about-lead">
                                I’m Olayode Bolade Emmanuel, a senior
                                full-stack engineer based in Lagos, Nigeria,
                                working remotely and in hybrid teams.
                            </p>

                            <p>
                                I own the architecture and engineering of
                                Twale’s multi-application logistics ecosystem,
                                connecting administrative, web, customer,
                                and driver platforms. My work spans API design,
                                relational databases, cloud infrastructure,
                                and deployment automation.
                            </p>

                            <p>
                                The systems I build support 60+ care clients,
                                enable ₦3–5M in monthly e-commerce revenue,
                                and cut manual document processing by up to
                                80%. I’ve worked on projects in Nigeria and
                                globally, sometimes extending an existing
                                system and sometimes rebuilding it when the
                                original approach stopped fitting.
                            </p>

                            <p>
                                I also build smaller tools around the work:
                                a legal-document pipeline, Claude-powered
                                job and finance tools, and custom WordPress
                                plugins written in PHP.
                            </p>

                            <p>
                                I like working closely with the people who
                                use the software. Their feedback usually
                                tells me more than a feature list does.
                            </p>

                            {/* Running & Personal Interests */}

                            <div className="about-running">
                                <p>
                                    Outside work, I’m an ultrarunner and have
                                    completed three marathons. Running is a
                                    big part of my life. I like having
                                    something difficult to work towards,
                                    putting in the hours, and seeing it
                                    through. That dedication carries into
                                    how I approach my work, too.
                                </p>

                                <a
                                    href={site.strava}
                                    className="text-link strava-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Follow my runs on Strava <Arrow />

                                    <span className="sr-only">
                                        {' '}(opens in a new tab)
                                    </span>
                                </a>
                            </div>

                            {/* Experience Timeline */}

                            <div className="experience-list">
                                {experience.map(e => (
                                    <div key={e.title}>
                                        <span>{e.period}</span>

                                        <div>
                                            <h3>{e.title}</h3>

                                            <p>
                                                {e.org} · {e.detail}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a
                                className="text-link"
                                href={site.resume}
                            >
                                More about my experience <Arrow />
                            </a>
                        </div>
                    </div>
                </section>

                {/* ==================== TESTIMONIALS ==================== */}

                {testimonials.length > 0 && (
                    <section className="container section">
                        <p className="eyebrow">
                            WORKING TOGETHER
                        </p>

                        {testimonials.map(t => (
                            <figure key={t.name}>
                                <blockquote>
                                    {t.quote}
                                </blockquote>

                                <figcaption>
                                    {t.name} · {t.role}
                                </figcaption>
                            </figure>
                        ))}
                    </section>
                )}

                {/* ==================== CONTACT SECTION ==================== */}

                <Contact />

            </main>

            <Footer />
        </>
    );
}
