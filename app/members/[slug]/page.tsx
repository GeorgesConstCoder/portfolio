import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { members } from "../../data/members"
import { getMemberBySlug } from "../../lib/members"
import styles from "./profile.module.css"

type MemberProfilePageProps = {
    params: Promise<{
        slug: string
    }>
}

export function generateStaticParams() {
    return members.map((member) => ({
        slug: member.slug,
    }))
}

export async function generateMetadata({
    params,
}: MemberProfilePageProps): Promise<Metadata> {
    const { slug } = await params
    const member = getMemberBySlug(slug)

    if (!member) {
        return {
            title: "Member not found",
        }
    }

    return {
        title: `${member.shortName} | Team`,
        description: member.summary,
    }
}

export default async function MemberProfilePage({
    params,
}: MemberProfilePageProps) {
    const { slug } = await params
    const member = getMemberBySlug(slug)

    if (!member) {
        notFound()
    }

    const initials = member.shortName
        .split(" ")
        .map((name) => name.charAt(0))
        .slice(0, 2)
        .join("")

    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <Link
                    className={styles.backLink}
                    href="/members"
                >
                    <span aria-hidden="true">←</span>
                    Back to team
                </Link>

                <header className={styles.hero}>
                    <div className={styles.identity}>
                        <div
                            className={styles.avatar}
                            aria-hidden="true"
                        >
                            {initials}
                        </div>

                        <div className={styles.heading}>
                            <span className={styles.eyebrow}>
                                Team member
                            </span>

                            <h1>{member.name}</h1>

                            <p className={styles.title}>
                                {member.title}
                            </p>

                            <p className={styles.location}>
                                {member.location}
                            </p>
                        </div>
                    </div>

                    <div className={styles.contact}>
                        <a href={`mailto:${member.email}`}>
                            Email
                            <span aria-hidden="true">↗</span>
                        </a>

                        {member.linkedin && (
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                                <span aria-hidden="true">↗</span>
                            </a>
                        )}
                    </div>
                </header>

                <div className={styles.layout}>
                    <article className={styles.mainContent}>
                        <section className={styles.section}>
                            <span className={styles.sectionNumber}>
                                01
                            </span>

                            <div>
                                <h2>Profile</h2>
                                <p className={styles.summary}>
                                    {member.summary}
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <span className={styles.sectionNumber}>
                                02
                            </span>

                            <div>
                                <h2>Experience</h2>

                                <div className={styles.timeline}>
                                    {member.experience.map(
                                        (experience, index) => (
                                            <article
                                                className={styles.timelineItem}
                                                key={`${experience.position}-${index}`}
                                            >
                                                <div
                                                    className={
                                                        styles.timelineHeader
                                                    }
                                                >
                                                    <div>
                                                        <h3>
                                                            {
                                                                experience.position
                                                            }
                                                        </h3>

                                                        {experience.organization && (
                                                            <p>
                                                                {
                                                                    experience.organization
                                                                }
                                                            </p>
                                                        )}
                                                    </div>

                                                    {experience.period && (
                                                        <span>
                                                            {
                                                                experience.period
                                                            }
                                                        </span>
                                                    )}
                                                </div>

                                                {experience.description && (
                                                    <p
                                                        className={
                                                            styles.description
                                                        }
                                                    >
                                                        {
                                                            experience.description
                                                        }
                                                    </p>
                                                )}
                                            </article>
                                        ),
                                    )}
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <span className={styles.sectionNumber}>
                                03
                            </span>

                            <div>
                                <h2>Education</h2>

                                <div className={styles.timeline}>
                                    {member.education.map(
                                        (education, index) => (
                                            <article
                                                className={styles.timelineItem}
                                                key={`${education.degree}-${index}`}
                                            >
                                                <div
                                                    className={
                                                        styles.timelineHeader
                                                    }
                                                >
                                                    <div>
                                                        <h3>
                                                            {education.degree}
                                                        </h3>

                                                        <p>
                                                            {
                                                                education.institution
                                                            }
                                                        </p>
                                                    </div>

                                                    {education.period && (
                                                        <span>
                                                            {education.period}
                                                        </span>
                                                    )}
                                                </div>

                                                {education.details && (
                                                    <p
                                                        className={
                                                            styles.description
                                                        }
                                                    >
                                                        {education.details}
                                                    </p>
                                                )}
                                            </article>
                                        ),
                                    )}
                                </div>
                            </div>
                        </section>

                        {member.certifications &&
                            member.certifications.length > 0 && (
                                <section className={styles.section}>
                                    <span
                                        className={styles.sectionNumber}
                                    >
                                        04
                                    </span>

                                    <div>
                                        <h2>
                                            Certifications and recognition
                                        </h2>

                                        <ul
                                            className={
                                                styles.certificationList
                                            }
                                        >
                                            {member.certifications.map(
                                                (certification) => (
                                                    <li key={certification}>
                                                        {certification}
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </section>
                            )}
                    </article>

                    <aside className={styles.sidebar}>
                        <section className={styles.sidebarSection}>
                            <h2>Areas of interest</h2>

                            <div className={styles.tags}>
                                {member.interests.map((interest) => (
                                    <span key={interest}>
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section className={styles.sidebarSection}>
                            <h2>Skills and technologies</h2>

                            <ul className={styles.skillList}>
                                {member.skills.map((skill) => (
                                    <li key={skill}>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </aside>
                </div>
            </div>
        </main>
    )
}