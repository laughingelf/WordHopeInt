import React from "react";
import { motion } from "framer-motion";

/** ---------- shared motion ---------- */
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

/** ---------- data ---------- */
const TIMELINE = [
  {
    id: "tractor",
    title: "Tractor & Trailer Purchased",
    detail:
      "A tractor and trailer have been purchased to accelerate land prep and ongoing farm operations.",
    status: "complete",
  },
  {
    id: "land-cleared",
    title: "First 100 Acres Cleared & Plowed",
    detail:
      "The initial 100 acres have been completely cleared, plowed, and are ready for planting.",
    status: "complete",
  },
  {
    id: "donated-land",
    title: "Second 100 Acres Donated",
    detail:
      "The village has generously donated an additional 100 acres. Legal recognition is pending due to Tanzania’s national elections.",
    status: "blocked",
    note: "Next step: official recognition following election-related shutdowns.",
  },
  {
    id: "second-well",
    title: "2nd Irrigation Well — Fundraising",
    detail:
      "Once the second plot is official, we will raise funds and begin drilling the second well for irrigation.",
    status: "planned",
  },
  {
    id: "bricks",
    title: "50,000 Bricks Made & Fired",
    detail:
      "Local teams produced and fired 50,000 bricks for a multi-purpose community center (church, clinic, school, conference area, and worker housing).",
    status: "active",
  },
  {
    id: "stones",
    title: "Foundation Stones Being Gathered",
    detail:
      "Stones are being gathered locally to reduce concrete costs and stretch every donated dollar further.",
    status: "active",
  },
];

const FUNDRAISING = [
  {
    id: "well-2",
    project: "2nd Well Drilling",
    purpose: "Irrigation for the expanded 100-acre farm",
    goalUSD: 28000,
    donateHref: "/donate?campaign=second-well",
  },
  {
    id: "foundation",
    project: "Foundation Construction",
    purpose: "Base for the multi-purpose community center",
    goalUSD: 20000,
    donateHref: "/donate?campaign=foundation",
  },
  {
    id: "building",
    project: "Building Project",
    purpose: "Materials and labor for the full structure",
    goalUSD: 60000,
    donateHref: "/donate?campaign=building",
  },
];

/** ---------- small UI helpers ---------- */
function statusStyles(status) {
  switch (status) {
    case "complete":
      return {
        dot: "bg-green-600 border-green-700",
        ring: "ring-green-200",
        text: "text-green-800",
        badge: "bg-green-100 text-green-800 border-green-200",
        connector: "bg-green-200",
      };
    case "active":
      return {
        dot: "bg-amber-500 border-amber-600",
        ring: "ring-amber-200",
        text: "text-amber-800",
        badge: "bg-amber-100 text-amber-800 border-amber-200",
        connector: "bg-amber-200",
      };
    case "blocked":
      return {
        dot: "bg-red-600 border-red-700",
        ring: "ring-red-200",
        text: "text-red-800",
        badge: "bg-red-100 text-red-800 border-red-200",
        connector: "bg-red-200",
      };
    default:
      return {
        dot: "bg-slate-300 border-slate-400",
        ring: "ring-slate-200",
        text: "text-slate-700",
        badge: "bg-slate-100 text-slate-700 border-slate-200",
        connector: "bg-slate-200",
      };
  }
}

function currency(n) {
  return `$${n.toLocaleString("en-US")}`;
}

/** ---------- component ---------- */
export default function ProjectUpdates({ lastUpdated }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 px-6 md:px-12">
        <motion.div className="max-w-4xl mx-auto" {...fadeInUp}>
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-3">
            🌍 Word Hope International — Project Updates
          </h1>
          <p className="text-green-700 text-lg font-medium mb-2">
            Progress in Chemba, Tanzania
          </p>
          <p className="text-green-800 text-lg leading-relaxed">
            We’re excited to share tangible progress across our farmland and
            community-building initiatives. Track the journey below, step by
            step, and see how your support is turning vision into reality.
          </p>
          {lastUpdated && (
            <p className="mt-3 text-sm text-green-700/80">
              Last updated: <span className="font-semibold">{lastUpdated}</span>
            </p>
          )}
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="bg-green-50 py-12 px-6 md:px-12">
        <motion.div className="max-w-5xl mx-auto" {...fadeInUp}>
          <h2 className="text-2xl font-bold text-green-900 mb-6">
            📅 Timeline of Progress
          </h2>

          <ol className="relative ml-4 md:ml-6">
            {/* vertical line */}
            <span
              aria-hidden
              className="absolute left-[-1px] md:left-[-1px] top-0 h-full w-1 bg-green-100 rounded"
            />

            {TIMELINE.map((item, idx) => {
              const s = statusStyles(item.status);
              const isLast = idx === TIMELINE.length - 1;
              return (
                <li key={item.id} className="relative pl-8 md:pl-10 py-6">
                  {/* connector to next */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className={`absolute left-0 top-8 -ml-[2px] h-[calc(100%-2rem)] w-1 ${s.connector}`}
                    />
                  )}

                  {/* dot */}
                  <span
                    aria-hidden
                    className={`absolute left-0 -ml-[10px] top-2 h-5 w-5 rounded-full border ${s.dot} ring-4 ${s.ring}`}
                  />

                  {/* content */}
                  <div className="bg-white rounded-lg shadow-sm border border-green-100 p-4 md:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg md:text-xl font-semibold text-green-900">
                        {item.title}
                      </h3>
                      <span
                        className={`inline-flex shrink-0 items-center rounded-md border px-2 py-1 text-xs font-medium ${s.badge}`}
                        aria-label={`Status: ${item.status}`}
                        title={`Status: ${item.status}`}
                      >
                        {item.status === "complete" && "Completed"}
                        {item.status === "active" && "In Progress"}
                        {item.status === "blocked" && "Pending"}
                        {item.status === "planned" && "Planned"}
                      </span>
                    </div>
                    <p className="mt-2 text-green-800">{item.detail}</p>
                    {item.note && (
                      <p className="mt-2 text-sm text-green-700/80">
                        {item.note}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </motion.div>
      </section>

      {/* Fundraising */}
      <section className="bg-white py-16 px-6 md:px-12">
        <motion.div className="max-w-5xl mx-auto" {...fadeInUp}>
          <h2 className="text-2xl font-bold text-green-900 mb-6">
            💝 Current Fundraising Projects
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FUNDRAISING.map((f) => (
              <div
                key={f.id}
                className="rounded-lg border border-green-100 bg-green-50 p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-green-900">
                  {f.project}
                </h3>
                <p className="mt-1 text-green-800">{f.purpose}</p>

                <div className="mt-4 flex items-baseline justify-between">
                  <span className="text-sm text-green-700/90">Goal</span>
                  <span className="text-xl font-extrabold text-green-900">
                    {currency(f.goalUSD)}
                  </span>
                </div>

                <div className="mt-5">
                  <a
                    href={f.donateHref || "/donate"}
                    className="inline-flex w-full items-center justify-center rounded-md bg-[#e01b24] px-4 py-2.5 font-semibold text-white hover:opacity-90"
                    aria-label={`Donate to ${f.project}`}
                  >
                    Donate
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Optional table view for accessibility / copy-paste */}
          <div className="sr-only">
            <table>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Purpose</th>
                  <th>Goal (USD)</th>
                </tr>
              </thead>
              <tbody>
                {FUNDRAISING.map((f) => (
                  <tr key={`sr-${f.id}`}>
                    <td>{f.project}</td>
                    <td>{f.purpose}</td>
                    <td>{currency(f.goalUSD)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-green-50 py-16 px-6 md:px-12 text-center">
        <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
          <p className="text-green-900 text-xl font-semibold mb-6">
            “Every seed, every brick, every prayer moves this vision forward.”
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/donate"
              className="bg-[#e01b24] text-white font-semibold px-6 py-3 rounded-md hover:opacity-90"
            >
              Donate to the Project
            </a>
            <a
              href="/contact"
              className="border border-[#e01b24] text-[#e01b24] font-semibold px-6 py-3 rounded-md hover:bg-[#e01b24]/10"
            >
              Partner or Sponsor
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
