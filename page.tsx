"use client";

import { useState, useEffect } from "react";
import type { CSSProperties } from "react";

const colors = {
  bg: "var(--bg, #0a0a0f)",
  panel: "var(--panel, #15151f)",
  border: "var(--border, #2a2a3a)",
  text: "var(--text, #e8e8f0)",
  muted: "var(--muted, #888899)",
  accent: "var(--accent, #6ee7ff)",
  accent2: "var(--accent-2, #ffd166)",
  ok: "var(--ok, #4ade80)",
  warn: "var(--warn, #fbbf24)",
  pending: "var(--pending, #555566)",
} as const;

type Milestone = {
  label: string;
  status: string;
  percent: number;
  pillClass: "pill-warn" | "pill-pending";
};

const milestones: Milestone[] = [
  {
    label: "M1 Brain + Self-Improvement",
    status: "~63% — in progress",
    percent: 63,
    pillClass: "pill-warn",
  },
  {
    label: "M2 Voice I/O",
    status: "not started",
    percent: 0,
    pillClass: "pill-pending",
  },
  {
    label: "M3 3D Humanoid",
    status: "not started",
    percent: 0,
    pillClass: "pill-pending",
  },
];

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: colors.bg,
    color: colors.text,
    direction: "rtl",
    fontFamily: '"Segoe UI", "Heebo", Arial, sans-serif',
    lineHeight: 1.65,
  },
  wrap: {
    width: "min(100%, 960px)",
    margin: "0 auto",
    padding: "1.5rem 1.5rem 4rem",
  },
  hero: {
    border: `1px solid ${colors.border}`,
    borderRadius: "10px",
    background: colors.panel,
    padding: "1.25rem",
    margin: "1.5rem 0 1rem",
  },
  eyebrow: {
    color: colors.accent2,
    fontSize: "0.82rem",
    fontWeight: 600,
    margin: "0 0 0.3rem",
  },
  title: {
    color: colors.text,
    fontSize: "clamp(2rem, 8vw, 4.6rem)",
    lineHeight: 1,
    letterSpacing: 0,
    margin: "0 0 0.85rem",
  },
  vision: {
    color: colors.muted,
    fontSize: "clamp(1rem, 3.6vw, 1.18rem)",
    maxWidth: "720px",
    margin: 0,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: "1.25rem",
    borderRight: `4px solid ${colors.accent}`,
    paddingRight: "0.75rem",
    margin: "2.5rem 0 1rem",
    letterSpacing: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
  },
  panel: {
    border: `1px solid ${colors.border}`,
    borderRadius: "10px",
    background: colors.panel,
    padding: "1.25rem",
  },
  milestoneHead: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "1rem",
    marginBottom: "1rem",
  },
  milestoneLabel: {
    color: colors.accent2,
    fontSize: "1.05rem",
    fontWeight: 700,
    margin: 0,
  },
  statusText: {
    color: colors.muted,
    fontSize: "0.9rem",
    margin: "0.3rem 0 0",
    direction: "ltr",
    textAlign: "right",
  },
  pill: {
    display: "inline-block",
    borderRadius: "999px",
    fontSize: "0.75rem",
    fontWeight: 700,
    padding: "2px 10px",
    whiteSpace: "nowrap",
  },
  progress: {
    background: colors.bg,
    border: `1px solid ${colors.border}`,
    borderRadius: "7px",
    height: "14px",
    overflow: "hidden",
    margin: "0.25rem 0",
  },
  progressFill: {
    background: `linear-gradient(90deg, ${colors.accent}, ${colors.ok})`,
    height: "100%",
  },
  form: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto",
    gap: "0.75rem",
    alignItems: "center",
  },
  input: {
    width: "100%",
    minHeight: "44px",
    border: `1px solid ${colors.border}`,
    borderRadius: "10px",
    background: colors.bg,
    color: colors.text,
    font: "inherit",
    padding: "0.7rem 0.9rem",
    outlineColor: colors.accent,
    direction: "rtl",
  },
  button: {
    minHeight: "44px",
    border: `1px solid ${colors.accent}`,
    borderRadius: "10px",
    background: colors.accent,
    color: colors.bg,
    cursor: "pointer",
    font: "inherit",
    fontWeight: 700,
    padding: "0.7rem 1.05rem",
    whiteSpace: "nowrap",
  },
  note: {
    color: colors.muted,
    fontSize: "0.85rem",
    margin: "0.75rem 0 0",
  },
};

function pillStyle(pillClass: Milestone["pillClass"]): CSSProperties {
  if (pillClass === "pill-warn") {
    return {
      ...styles.pill,
      background: `color-mix(in srgb, ${colors.warn} 15%, transparent)`,
      color: colors.warn,
    };
  }

  return {
    ...styles.pill,
    background: `color-mix(in srgb, ${colors.pending} 30%, transparent)`,
    color: colors.muted,
  };
}

export default function ComingSoonPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main dir="rtl" style={styles.page}>
      <div style={styles.wrap}>
        <section style={styles.hero} aria-labelledby="coming-soon-title">
          <p style={styles.eyebrow}>בקרוב</p>
          <h1 id="coming-soon-title" style={styles.title}>
            DebateAI
          </h1>
          <p style={styles.vision}>
            DebateAI נבנה כדי להפוך ויכוח אנושי-מכונה למרחב חשיבה שמזהה
            הנחות, בונה אנטיתזה, ומייצר סינתזה משתפרת.
          </p>
        </section>

        <section aria-labelledby="milestones-title">
          <h2 id="milestones-title" style={styles.sectionTitle}>
            התקדמות אבני דרך
          </h2>

          <div style={styles.grid}>
            {milestones.map((milestone) => (
              <article key={milestone.label} style={styles.panel}>
                <div style={styles.milestoneHead}>
                  <div>
                    <h3 style={styles.milestoneLabel}>{milestone.label}</h3>
                    <p style={styles.statusText}>{milestone.status}</p>
                  </div>
                  <span
                    className={`pill ${milestone.pillClass}`}
                    style={pillStyle(milestone.pillClass)}
                  >
                    {milestone.pillClass === "pill-warn" ? "בתהליך" : "ממתין"}
                  </span>
                </div>

                <div
                  className="progress"
                  style={styles.progress}
                  aria-label={`${milestone.label}: ${milestone.percent}%`}
                >
                  <div
                    className="progress-fill"
                    style={{
                      ...styles.progressFill,
                      width: mounted ? `${milestone.percent}%` : "0%",
                      transition: "width 1.2s ease-out",
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section style={{ ...styles.panel, marginTop: "2.5rem" }}>
          <h2 style={{ ...styles.sectionTitle, marginTop: 0 }}>רשימת המתנה</h2>
          <form
            action="https://formspree.io/f/mbdwqjqw"
            method="POST"
            style={styles.form}
          >
            <label htmlFor="email" style={{ position: "absolute", left: "-9999px" }}>
              אימייל
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="האימייל שלך"
              autoComplete="email"
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              עדכנו אותי
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
