"use client";

import { useId, useState } from "react";
import styles from "./page.module.css";

const money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
});

const compactNumber = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
});

const fieldStyle = {
    width: "100%",
    marginTop: 8,
    padding: "12px 14px",
    border: "1px solid var(--border)",
    borderRadius: 0,
    background: "var(--paper)",
    color: "var(--ink)",
    font: "inherit",
};

const cellStyle = {
    padding: "12px 16px",
    borderBottom: "1px solid var(--border)",
    whiteSpace: "nowrap" as const,
};

export default function StraightLineExample() {
    const id = useId();

    const [purchase, setPurchase] = useState("100000");
    const [salvage, setSalvage] = useState("20000");
    const [period, setPeriod] = useState("5");

    const P = Number(purchase);
    const F = Number(salvage);
    const N = Number(period);

    const valid =
        purchase.trim() !== "" &&
        salvage.trim() !== "" &&
        period.trim() !== "" &&
        Number.isFinite(P) &&
        Number.isFinite(F) &&
        Number.isInteger(N) &&
        P > 0 &&
        F >= 0 &&
        F <= P &&
        N >= 1 &&
        N <= 50;

    const annual = valid ? (P - F) / N : 0;

    const rows = valid
        ? Array.from({ length: N + 1 }, (_, year) => ({
            year,
            depreciation: year === 0 ? 0 : annual,
            accumulated: year * annual,
            bookValue: year === N ? F : P - year * annual,
        }))
        : [];

    const graph = {
        width: 720,
        height: 360,
        left: 85,
        right: 30,
        top: 30,
        bottom: 55,
    };

    const plotWidth = graph.width - graph.left - graph.right;
    const plotHeight = graph.height - graph.top - graph.bottom;

    function x(year: number) {
        return graph.left + (year / N) * plotWidth;
    }

    function y(value: number) {
        return graph.top + (1 - value / P) * plotHeight;
    }

    const points = rows
        .map((row) => `${x(row.year)},${y(row.bookValue)}`)
        .join(" ");

    const labeledYears = rows.filter(
        (row) =>
            row.year === 0 ||
            row.year === N ||
            row.year % Math.ceil(N / 5) === 0
    );

    return (
        <div>
            <p style={{ color: "var(--gray)", lineHeight: 1.7 }}>
                Change the asset values to explore straight-line
                depreciation. This example assumes full years,
                unchanged estimates and no additional asset costs.
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: 20,
                    marginBlock: 28,
                }}
            >
                <label htmlFor={`${id}-purchase`}>
                    <strong>P — Purchase price ($)</strong>

                    <input
                        id={`${id}-purchase`}
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={purchase}
                        onChange={(event) =>
                            setPurchase(event.target.value)
                        }
                        style={fieldStyle}
                        aria-describedby={`${id}-help`}
                    />
                </label>

                <label htmlFor={`${id}-salvage`}>
                    <strong>F — Salvage value ($)</strong>

                    <input
                        id={`${id}-salvage`}
                        type="number"
                        min="0"
                        step="0.01"
                        value={salvage}
                        onChange={(event) =>
                            setSalvage(event.target.value)
                        }
                        style={fieldStyle}
                        aria-describedby={`${id}-help`}
                    />
                </label>

                <label htmlFor={`${id}-period`}>
                    <strong>N — Recovery period (years)</strong>

                    <input
                        id={`${id}-period`}
                        type="number"
                        min="1"
                        max="50"
                        step="1"
                        value={period}
                        onChange={(event) =>
                            setPeriod(event.target.value)
                        }
                        style={fieldStyle}
                        aria-describedby={`${id}-help`}
                    />
                </label>
            </div>

            <p
                id={`${id}-help`}
                style={{
                    color: "var(--gray)",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                }}
            >
                Enter a positive purchase price, a salvage value
                between zero and the purchase price, and a whole
                number of years from 1 to 50.
            </p>

            <div aria-live="polite" aria-atomic="true">
                {!valid ? (
                    <p style={{ color: "var(--red)" }}>
                        Complete the inputs with valid values to
                        display the calculation.
                    </p>
                ) : (
                    <p style={{ color: "var(--blue)" }}>
                        Annual depreciation:{" "}
                        <strong>{money.format(annual)}</strong>.
                    </p>
                )}
            </div>

            {valid && (
                <>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(240px, 1fr))",
                            gap: 20,
                            marginBlock: 28,
                        }}
                    >
                        <div
                            style={{
                                padding: 24,
                                background:
                                    "rgba(244, 220, 117, 0.3)",
                                border: "1px solid var(--border)",
                            }}
                        >
                            <h3 style={{ margin: "0 0 16px" }}>
                                Annual depreciation
                            </h3>

                            <p>
                                D<sub>m</sub> = (P − F) / N
                            </p>

                            <p>
                                ({money.format(P)} −{" "}
                                {money.format(F)}) ÷ {N}
                            </p>

                            <strong
                                style={{
                                    color: "var(--blue)",
                                    fontSize: "1.5rem",
                                }}
                            >
                                {money.format(annual)} / year
                            </strong>
                        </div>

                        <div
                            style={{
                                padding: 24,
                                border: "1px solid var(--border)",
                            }}
                        >
                            <h3 style={{ margin: "0 0 16px" }}>
                                Rate and book value
                            </h3>

                            <p>
                                R<sub>m</sub> = 1 / N ={" "}
                                {(100 / N).toFixed(2)}%
                            </p>

                            <p>The rate applies to P − F.</p>

                            <p>
                                BV<sub>m</sub> = P − m × D<sub>m</sub>
                            </p>

                            <p>
                                Ending book value after {N} years:{" "}
                                <strong>{money.format(F)}</strong>
                            </p>
                        </div>
                    </div>

                    <div className={styles.resultsGrid}>
                        <figure className={styles.chartPanel}>
                            <figcaption
                                style={{
                                    fontWeight: 700,
                                    paddingBlock: 16,
                                }}
                            >
                                Book value over time
                            </figcaption>

                            <div style={{ overflowX: "auto" }}>
                                <svg
                                    viewBox={`0 0 ${graph.width} ${graph.height}`}
                                    role="img"
                                    aria-labelledby={`${id}-chart-title`}
                                    style={{
                                        display: "block",
                                        width: "100%",
                                        minWidth: 400,
                                        fontFamily: "Arial, sans-serif",
                                        fontSize: 14,
                                    }}
                                >
                                    <title id={`${id}-chart-title`}>
                                        {`Book value changes from ${money.format(P)} to ${money.format(F)} over ${N} years at a constant annual depreciation of ${money.format(annual)}. Exact values appear in the depreciation schedule.`}
                                    </title>

                                    {[0, 0.25, 0.5, 0.75, 1].map(
                                        (fraction) => {
                                            const value = P * fraction;

                                            return (
                                                <g key={fraction}>
                                                    <line
                                                        x1={graph.left}
                                                        x2={
                                                            graph.width -
                                                            graph.right
                                                        }
                                                        y1={y(value)}
                                                        y2={y(value)}
                                                        stroke="var(--border)"
                                                        strokeDasharray="4 4"
                                                    />

                                                    <text
                                                        x={graph.left - 12}
                                                        y={y(value) + 4}
                                                        textAnchor="end"
                                                        fill="var(--gray)"
                                                    >
                                                        {compactNumber.format(
                                                            value
                                                        )}
                                                    </text>
                                                </g>
                                            );
                                        }
                                    )}

                                    <text
                                        x={graph.left}
                                        y={16}
                                        fill="var(--gray)"
                                    >
                                        USD
                                    </text>

                                    <polyline
                                        points={points}
                                        fill="none"
                                        stroke="var(--blue)"
                                        strokeWidth="3"
                                        strokeLinejoin="round"
                                    />

                                    {rows.map((row) => (
                                        <circle
                                            key={row.year}
                                            cx={x(row.year)}
                                            cy={y(row.bookValue)}
                                            r={N <= 15 ? 4 : 2}
                                            fill="var(--blue)"
                                        />
                                    ))}

                                    {labeledYears.map((row) => (
                                        <text
                                            key={row.year}
                                            x={x(row.year)}
                                            y={graph.height - 28}
                                            textAnchor="middle"
                                            fill="var(--gray)"
                                        >
                                            {row.year}
                                        </text>
                                    ))}

                                    <text
                                        x={graph.left + plotWidth / 2}
                                        y={graph.height - 5}
                                        textAnchor="middle"
                                        fill="var(--gray)"
                                    >
                                        Year
                                    </text>
                                </svg>
                            </div>
                        </figure>

                        <div className={styles.schedulePanel}>
                            <table
                                style={{
                                    width: "100%",
                                    borderCollapse: "collapse",
                                    textAlign: "right",
                                    fontVariantNumeric: "tabular-nums",
                                }}
                            >
                                <caption
                                    style={{
                                        padding: "16px 0",
                                        textAlign: "left",
                                        fontWeight: 700,
                                    }}
                                >
                                    Straight-line depreciation schedule
                                </caption>

                                <thead>
                                    <tr style={{ color: "var(--blue)" }}>
                                        <th scope="col" style={cellStyle}>
                                            Year
                                        </th>
                                        <th scope="col" style={cellStyle}>
                                            Depreciation
                                        </th>
                                        <th scope="col" style={cellStyle}>
                                            Accumulated
                                        </th>
                                        <th scope="col" style={cellStyle}>
                                            Book value
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {rows.map((row) => (
                                        <tr key={row.year}>
                                            <th
                                                scope="row"
                                                style={cellStyle}
                                            >
                                                {row.year}
                                            </th>

                                            <td style={cellStyle}>
                                                {row.year === 0
                                                    ? "—"
                                                    : money.format(
                                                        row.depreciation
                                                    )}
                                            </td>

                                            <td style={cellStyle}>
                                                {money.format(
                                                    row.accumulated
                                                )}
                                            </td>

                                            <td style={cellStyle}>
                                                {money.format(
                                                    row.bookValue
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p
                        style={{
                            marginTop: 16,
                            color: "var(--gray)",
                            fontSize: "0.875rem",
                            lineHeight: 1.7,
                        }}
                    >
                        Year 0 represents the asset before depreciation.
                        Book values are measured at year-end.
                        Calculations use unrounded values; displayed
                        amounts are rounded to cents.
                    </p>
                </>
            )}
        </div>
    );
}