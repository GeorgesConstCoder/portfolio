import type { Metadata } from "next"
import Link from "next/link"

import { members } from "../data/members"
import styles from "./members.module.css"

export const metadata: Metadata = {
    title: "Team Members",
    description:
        "Meet our engineering and research team working with advanced technologies.",
}

export default function MembersPage() {
    return (
        <main className={styles.page}>
            <section className={styles.container}>
                <header className={styles.header}>
                    <span className={styles.eyebrow}>
                        Our team
                    </span>

                    <h1>Engineering, research and technology</h1>

                    <p>
                        Meet the professionals combining engineering knowledge,
                        research and advanced technology to solve real-world
                        industry problems.
                    </p>
                </header>

                <div className={styles.grid}>
                    {members.map((member, index) => (
                        <article
                            className={styles.card}
                            key={member.slug}
                        >
                            <div className={styles.cardTop}>
                                <span className={styles.number}>
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className={styles.location}>
                                    {member.location}
                                </span>
                            </div>

                            <div className={styles.cardContent}>
                                <h2>{member.shortName}</h2>

                                <p className={styles.title}>
                                    {member.title}
                                </p>

                                <p className={styles.summary}>
                                    {member.summary}
                                </p>

                                <div className={styles.tags}>
                                    {member.interests
                                        .slice(0, 4)
                                        .map((interest) => (
                                            <span key={interest}>
                                                {interest}
                                            </span>
                                        ))}
                                </div>
                            </div>

                            <div className={styles.cardActions}>
                                <Link
                                    className={styles.profileLink}
                                    href={`/members/${member.slug}`}
                                >
                                    View profile
                                    <span aria-hidden="true">→</span>
                                </Link>

                                {member.personalPage && (
                                    <Link
                                        className={styles.pageLink}
                                        href={member.personalPage}
                                    >
                                        View page
                                        <span aria-hidden="true">↗</span>
                                    </Link>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}