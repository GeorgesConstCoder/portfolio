import type { Metadata } from "next";
import Link from "next/link";
import StraightLineExample from "./StraightLineExample";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Depreciation — Finance for Construction",
    description:
        "Explore why depreciation matters in construction: financial statements, ownership cost allocation and tax reporting.",
};

const portfolioUrl = "/portfolio/jorge-correa#knowledge";

export default function DepreciationPage() {
    return (
        <main className={styles.modulePage}>
            <div
                className={styles.notebookMargin}
                aria-hidden="true"
            />

            <header className={styles.header}>
                <Link
                    href={portfolioUrl}
                    className={styles.identity}
                    aria-label="Return to Knowledge Studio"
                >
                    <span className={styles.logo}>JC</span>

                    <span>
                        <strong>KNOWLEDGE STUDIO</strong>
                        <small>Finance for Construction</small>
                    </span>
                </Link>

                <nav
                    className={styles.navigation}
                    aria-label="Module navigation"
                >
                    <a href="#importance">Importance</a>
                </nav>
            </header>

            <section
                id="importance"
                className={styles.importanceSection}
                aria-labelledby="importance-title"
            >
                <div className={styles.importanceIntro}>
                    <div className={styles.sectionLabel}>
                        <span>01</span>
                        <p>Depreciation / Importance</p>
                    </div>

                    <h1 id="importance-title">
                        Why is depreciation important?
                    </h1>

                    <p className={styles.introduction}>
                        Construction companies own assets such as equipment,
                        vehicles and buildings that support their work over
                        several years. Estimating depreciation is important
                        for three main reasons.
                    </p>
                </div>
                <ol className={styles.reasonList}>
                    <li>
                        <span className={styles.reasonNumber} aria-hidden="true">
                            01
                        </span>

                        <div>
                            <h2>Prepare financial statements</h2>

                            <p>
                                Depreciation helps companies report the
                                book value of their assets. This value
                                reflects the asset&apos;s recorded cost
                                less its accumulated depreciation.
                            </p>

                            <p className={styles.formula}>
                                Book value = Asset cost − Accumulated depreciation
                            </p>
                        </div>
                    </li>

                    <li>
                        <span className={styles.reasonNumber} aria-hidden="true">
                            02
                        </span>

                        <div>
                            <h2>Allocate ownership costs</h2>

                            <p>
                                Depreciation is a significant part of
                                the cost of owning construction equipment.
                                Estimating it helps companies determine
                                annual ownership costs and allocate them
                                to construction projects and supporting
                                operations.
                            </p>
                        </div>
                    </li>

                    <li>
                        <span className={styles.reasonNumber} aria-hidden="true">
                            03
                        </span>

                        <div>
                            <h2>Determine depreciation for tax purposes</h2>

                            <p>
                                Companies also calculate depreciation
                                for tax reporting. Tax rules govern how
                                asset costs are recovered, so the method
                                and recovery period may differ from those
                                used for financial statements or project
                                cost allocation.
                            </p>
                        </div>
                    </li>
                </ol>
            </section>

            <section
                id="variables"
                className={styles.variablesSection}
                aria-labelledby="variables-title"
            >
                <div>
                    <div className={styles.sectionLabel}>
                        <span>02</span>
                        <p>Depreciation / Notation</p>
                    </div>

                    <h2 id="variables-title" className={styles.variablesTitle}>
                        Variables and notation
                    </h2>

                    <p className={styles.introduction}>
                        These symbols describe the asset, its depreciation
                        period and the amounts calculated for each year.
                        We will use them throughout the three depreciation
                        methods.
                    </p>
                </div>

                <div>
                    <dl className={styles.variableList}>
                        <div>
                            <dt>
                                <span className={styles.variableSymbol}>P</span>
                                <span>Purchase price</span>
                            </dt>
                            <dd>
                                The purchase price of the asset.
                            </dd>
                        </div>

                        <div>
                            <dt>
                                <span className={styles.variableSymbol}>F</span>
                                <span>Salvage value</span>
                            </dt>
                            <dd>
                                The estimated resale value of the asset
                                at the end of the depreciation period. For tax purposes the salvage value is assumed to be zero.
                            </dd>
                        </div>

                        <div>
                            <dt>
                                <span className={styles.variableSymbol}>N</span>
                                <span>Recovery period</span>
                            </dt>
                            <dd>
                                The number of years over which the asset
                                is depreciated. For purposes other than
                                tax reporting, this often corresponds
                                to its estimated useful life.
                            </dd>
                        </div>

                        <div>
                            <dt>
                                <span className={styles.variableSymbol}>
                                    R<sub>m</sub>
                                </span>
                                <span>Depreciation rate</span>
                            </dt>
                            <dd>
                                The depreciation rate for year m,
                                expressed as a decimal or percentage.
                                The method determines the amount to
                                which this rate is applied.
                            </dd>
                        </div>

                        <div>
                            <dt>
                                <span className={styles.variableSymbol}>
                                    D<sub>m</sub>
                                </span>
                                <span>Annual depreciation</span>
                            </dt>
                            <dd>
                                The depreciation expense allocated
                                to year m.
                            </dd>
                        </div>

                        <div>
                            <dt>
                                <span className={styles.variableSymbol}>
                                    BV<sub>m</sub>
                                </span>
                                <span>Book value</span>
                            </dt>
                            <dd>
                                The value recorded on the accounting
                                books at the end of year m. It equals
                                the purchase price less depreciation
                                accumulated through that year.
                            </dd>
                        </div>
                    </dl>

                    <p className={styles.notationNote}>
                        <strong>What does m mean?</strong>
                        {" "}It identifies the year being calculated:
                        m = 1, 2, …, N. Before any depreciation is
                        recorded, BV<sub>0</sub> = P.
                    </p>
                </div>
            </section>

            <section
                id="methods"
                className={styles.methodsSection}
                aria-labelledby="methods-title"
            >
                <div>
                    <div className={styles.sectionLabel}>
                        <span>03</span>
                        <p>Depreciation / Methods</p>
                    </div>

                    <h2 id="methods-title" className={styles.methodsTitle}>
                        Three depreciation methods
                    </h2>

                    <p className={styles.introduction}>
                        Each method distributes an asset&apos;s depreciable
                        cost differently over time. The choice depends on
                        how the asset&apos;s economic benefits are expected
                        to be consumed.
                    </p>
                </div>

                <div className={styles.methodCards}>
                    <article>
                        <span className={styles.methodTag}>
                            01 / UNIFORM
                        </span>

                        <h3>Straight-Line Method</h3>

                        <p>
                            Allocates the same depreciation expense to
                            each full year of the asset&apos;s recovery
                            period.
                        </p>

                        <h4>When is it used?</h4>

                        <p>
                            When the asset is expected to provide benefits
                            relatively evenly over time. For example,
                            a construction company might use it for an
                            office building or equipment with a stable
                            pattern of service.
                        </p>
                    </article>

                    <article>
                        <span className={styles.methodTag}>
                            02 / ACCELERATED
                        </span>

                        <h3>Sum-of-the-Years</h3>

                        <p>
                            Allocates more depreciation to the early
                            years and progressively less to later years,
                            using a fraction based on the remaining life.
                        </p>

                        <h4>When is it used?</h4>

                        <p>
                            When greater benefits are expected in the
                            early years and a steadily decreasing annual
                            depreciation charge reflects that pattern.
                            It may suit equipment expected to be more
                            productive when new.
                        </p>
                    </article>

                    <article>
                        <span className={styles.methodTag}>
                            03 / ACCELERATED
                        </span>

                        <h3>Declining-Balance Method</h3>

                        <p>
                            Applies a fixed depreciation rate to the
                            beginning book value each year. As book value
                            decreases, the depreciation charge generally
                            decreases too.
                        </p>

                        <h4>When is it used?</h4>

                        <p>
                            When benefits are consumed more rapidly in
                            the early years. It may suit technology or
                            equipment whose usefulness declines quickly
                            because of obsolescence or reduced efficiency.
                        </p>
                    </article>

                    <p className={styles.methodNote}>
                        <strong>Choosing a method:</strong>
                        {" "}These are illustrative applications, not fixed
                        rules for each asset type. Depreciation allocates
                        cost; it does not predict resale value. Tax
                        depreciation may follow separately prescribed rules.
                    </p>
                </div>
            </section>

            <section
                id="straight-line"
                className={styles.methodsSection}
                aria-labelledby="straight-line-title"
            >
                <div>
                    <div className={styles.sectionLabel}>
                        <span>04</span>
                        <p>Depreciation / Interactive example</p>
                    </div>

                    <h2
                        id="straight-line-title"
                        className={styles.methodsTitle}
                    >
                        Straight-Line Method
                    </h2>
                </div>

                <StraightLineExample />
            </section>

            <footer className={styles.footer}>
                <span>Jorge Israel Correa</span>
                <span>Finance for Construction · Module 01</span>
                <Link href={portfolioUrl}>
                    ← Knowledge Studio
                </Link>
            </footer>
        </main>
    );
}