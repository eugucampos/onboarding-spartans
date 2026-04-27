"use client";

import Image from "next/image";
import { useState } from "react";

const menuGroups = [
  {
    label: "Before the Start",
    tag: "Part 1",
    tagColor: "bg-teal/20 text-teal",
    items: [
      { id: "onboarding", label: "Onboarding & Setup", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
      { id: "tracking", label: "Tracking Requirements", icon: "M12 9v2m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" },
      { id: "required-info", label: "Required Information", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
      { id: "social", label: "Social Media", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
      { id: "discord", label: "Discord Communication", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
    ],
  },
  {
    label: "During the Campaign",
    tag: "Part 2",
    tagColor: "bg-lime/20 text-lime",
    items: [
      { id: "goals", label: "Campaign Goals", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
      { id: "cashrake", label: "CashRake System", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { id: "leaderboard", label: "Leaderboard", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
      { id: "vip", label: "VIP & High Roller", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
      { id: "giveaway", label: "Giveaway Campaign", icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" },
      { id: "content", label: "Content Requirements", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
      { id: "guidelines", label: "Guidelines", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
      { id: "tips", label: "Final Tips", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
      { id: "faq", label: "FAQs", icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    ],
  },
];

export default function OnboardingPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Record<number, boolean>>({ 0: true, 1: true });

  function toggleGroup(idx: number) {
    setExpandedGroups((prev) => ({ ...prev, [idx]: !prev[idx] }));
  }

  function selectSection(id: string) {
    setActiveSection(id);
    setSidebarOpen(false);
  }

  return (
    <div className="min-h-screen bg-navy flex">
      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/60 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 flex h-screen flex-col border-r border-border bg-navy-dark transition-all duration-300 lg:sticky lg:translate-x-0 lg:z-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${sidebarCollapsed ? "w-[68px]" : "w-64"}`}
      >
        {/* Logo area */}
        <div className={`flex items-center border-b border-border ${sidebarCollapsed ? "justify-center p-3" : "p-5"}`}>
          <button onClick={() => selectSection("home")} className="flex items-center">
            {sidebarCollapsed ? (
              <Image src="/images/helmet-green.png" alt="Spartans" width={32} height={32} className="h-8 w-8" />
            ) : (
              <Image src="/images/spartans-logo.png" alt="Spartans" width={150} height={38} className="h-8 w-auto" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3">
          {menuGroups.map((group, gIdx) => (
            <div key={group.label} className="mb-1">
              {!sidebarCollapsed && (
                <button
                  onClick={() => toggleGroup(gIdx)}
                  className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left transition-colors hover:bg-secondary"
                >
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${group.tagColor}`}>{group.tag}</span>
                    <span className="text-xs font-medium text-cream">{group.label}</span>
                  </div>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`text-muted-foreground transition-transform duration-200 ${expandedGroups[gIdx] ? "rotate-180" : ""}`}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              )}

              {(sidebarCollapsed || expandedGroups[gIdx]) && (
                <div className={sidebarCollapsed ? "space-y-1" : "mt-1 space-y-0.5"}>
                  {group.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => selectSection(item.id)}
                      className={`flex w-full items-center gap-3 rounded-lg transition-colors ${
                        sidebarCollapsed ? "justify-center px-0 py-2.5" : "px-3 py-2"
                      } ${
                        activeSection === item.id
                          ? "bg-lime/10 text-lime"
                          : "text-muted-foreground hover:bg-secondary hover:text-cream"
                      }`}
                      title={sidebarCollapsed ? item.label : undefined}
                    >
                      <svg className="h-[18px] w-[18px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                      {!sidebarCollapsed && <span className="text-sm">{item.label}</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Collapse toggle + version */}
        <div className="border-t border-border p-3">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className={`flex w-full items-center gap-3 rounded-lg px-2 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-cream ${sidebarCollapsed ? "justify-center" : ""}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {sidebarCollapsed ? <path d="M13 5l7 7-7 7M5 5l7 7-7 7" /> : <path d="M11 19l-7-7 7-7M19 19l-7-7 7-7" />}
            </svg>
            {!sidebarCollapsed && <span className="text-xs">Collapse</span>}
          </button>
          {!sidebarCollapsed && (
            <p className="mt-2 px-2 text-[10px] text-muted-foreground/50">Last update: 24.04.2026</p>
          )}
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Mobile header (only on small screens) */}
        <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-border bg-navy-dark/90 px-4 py-3 backdrop-blur-md lg:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary text-cream"
            aria-label="Toggle menu"
          >
            {sidebarOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
            )}
          </button>
          <Image src="/images/spartans-logo.png" alt="Spartans" width={120} height={30} className="h-7 w-auto" />
        </header>

        {/* Page content */}
        <main className="flex-1 px-6 py-10 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <SectionContent id={activeSection} />
          </div>
        </main>
      </div>
    </div>
  );
}

/* ═══ Section Content Router ═══ */

function SectionContent({ id }: { id: string }) {
  switch (id) {
    case "home":
      return (
        <div className="flex flex-col items-center text-center">
          <Image src="/images/helmet-green.png" alt="Spartans" width={120} height={120} className="mb-8 h-28 w-28" />
          <div className="mb-4 inline-block rounded-full bg-lime/10 px-4 py-1.5">
            <span className="font-serif text-sm font-medium text-lime">Creator Program</span>
          </div>
          <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-cream sm:text-5xl">
            Influencer Briefing
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Welcome to the Spartans Creator Program. We&apos;re here to partner with you in driving high-quality traffic, deposits, and real player engagement — all through your unique content, referral link, and promo code.
          </p>
          <div className="mx-auto max-w-md w-full">
            <p className="mb-4 text-sm font-medium text-cream">This briefing covers two key stages:</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-teal/20 bg-teal/5 p-5 text-left">
                <span className="mb-2 inline-block rounded-full bg-teal/20 px-2.5 py-0.5 text-[10px] font-semibold text-teal">Part 1</span>
                <p className="font-serif text-sm font-semibold text-cream">Onboarding &amp; Setup</p>
                <p className="mt-1 text-xs text-muted-foreground">Everything you need before going live</p>
              </div>
              <div className="rounded-xl border border-lime/20 bg-lime/5 p-5 text-left">
                <span className="mb-2 inline-block rounded-full bg-lime/20 px-2.5 py-0.5 text-[10px] font-semibold text-lime">Part 2</span>
                <p className="font-serif text-sm font-semibold text-cream">Running the Campaign</p>
                <p className="mt-1 text-xs text-muted-foreground">Goals, tools, and best practices</p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Please read each section carefully to ensure a smooth and successful collaboration.
          </p>
        </div>
      );

    case "onboarding":
      return (
        <ContentBlock title="Onboarding & Setup" icon="1">
          <p className="mb-4 text-muted-foreground">You will receive:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <InfoCard title="Referral Link (reflink)" example="spartans.com/?c=PROMOCODE&affiliateid=000000" />
            <InfoCard title="Promo Code" example="PROMOCODE" />
            <InfoCard title="Demo Account" example="Credentials (if applicable — if you use RAW, let us know)" />
            <InfoCard title="Dashboard Access" example="Clicks, Registrations, FTD, Volume, Net P&L" />
            <InfoCard title="Stream Assets" example="Animated banner (overlay) + Static panel (below stream)" />
          </div>
        </ContentBlock>
      );

    case "tracking":
      return (
        <ContentBlock title="Tracking Requirements" icon="!" variant="warning">
          <p className="mb-4 text-muted-foreground">For proper tracking, users <strong className="text-cream">MUST</strong>:</p>
          <ul className="space-y-2">
            <CheckItem text="Register using your referral link" />
            <CheckItem text="Enter your promo code during signup" />
          </ul>
          <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/5 p-4">
            <p className="text-sm text-red-400">Missing either element = incorrect or lost tracking</p>
          </div>
        </ContentBlock>
      );

    case "required-info":
      return (
        <ContentBlock title="Required Information" icon="2">
          <p className="mb-4 text-muted-foreground">To complete the onboarding process, please provide:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <InfoCard title="Full Name" example="Your legal full name" />
            <InfoCard title="Company Name" example="Your company or brand name" />
            <InfoCard title="Company Registration Number" example="Official registration number" />
            <InfoCard title="Address" example="Company or personal address" />
            <InfoCard title="Contact Email" example="For DocuSign contract signing" />
          </div>
        </ContentBlock>
      );

    case "social":
      return (
        <ContentBlock title="Social Media" icon="3">
          <p className="mb-4 text-muted-foreground">
            As part of onboarding, follow and tag Spartans on every deliverable:
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkCard label="Twitter / X" url="https://x.com/SpartansBet" />
            <LinkCard label="Instagram" url="https://www.instagram.com/spartans" />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Content shared by us also counts as a deliverable under the cooperation agreement.
          </p>
        </ContentBlock>
      );

    case "discord":
      return (
        <ContentBlock title="Discord Communication" icon="4">
          <p className="mb-4 text-muted-foreground">There are 3 main channels:</p>
          <div className="space-y-2">
            <ChannelCard emoji="📑" name="Deliverables Tracker" desc="Post completed content daily" />
            <ChannelCard emoji="💸" name="Balance Request" desc="Request campaign balance (autorefill ~8 AM Dubai)" />
            <ChannelCard emoji="✨" name="Influencer Channels" desc="Ongoing communication" />
          </div>
          <div className="mt-4 rounded-lg border border-border bg-secondary p-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-cream">Manager availability:</strong> Mon-Fri 08:00-22:00/24:00 CEST | Weekends: emergency only
            </p>
          </div>
        </ContentBlock>
      );

    case "goals":
      return (
        <ContentBlock title="Campaign Goals" icon="🔥">
          <div className="grid gap-2 sm:grid-cols-2">
            <GoalCard text="Promote your referral link + promo code" />
            <GoalCard text="Drive deposits and player activity" />
            <GoalCard text="Attract high-value players (VIPs)" />
            <GoalCard text="Maintain strong and consistent engagement" />
          </div>
        </ContentBlock>
      );

    case "cashrake":
      return (
        <ContentBlock title="CashRake = Cashback + Rakeback" icon="💰">
          {/* How it works */}
          <p className="mb-4 text-muted-foreground">
            CashRake is the world&apos;s first system that pays players win or lose. It&apos;s not a temporary promotion — it&apos;s the core infrastructure of the Spartans platform. Every bet triggers a return, no matter the outcome.
          </p>

          {/* Two streams */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-lime/20 bg-lime/5 p-5">
              <p className="font-serif text-2xl font-bold text-lime">Up to 3%</p>
              <p className="text-sm font-medium text-cream">Instant Cashback</p>
              <p className="mt-1 text-xs text-muted-foreground">Base return on every losing wager, no waiting. Goes straight to the player&apos;s main balance — no locked bonus wallet, no wagering requirements.</p>
            </div>
            <div className="rounded-lg border border-teal/20 bg-teal/5 p-5">
              <p className="font-serif text-2xl font-bold text-teal">Up to 33%</p>
              <p className="text-sm font-medium text-cream">Ongoing Rakeback</p>
              <p className="mt-1 text-xs text-muted-foreground">Of the House Edge returned progressively as players bet, regardless of outcome. Both streams feed into a single 33% cap based on total deposits.</p>
            </div>
          </div>

          <p className="mb-6 text-sm text-muted-foreground">Rewards applied automatically on every spin. Paid as real cash — withdraw or play again immediately.</p>

          {/* Deposit cap */}
          <div className="mb-6 rounded-lg border border-border bg-secondary p-5">
            <p className="mb-2 text-sm font-medium text-cream">How the Limit Works</p>
            <p className="text-sm text-muted-foreground">The CashRake cap = <strong className="text-cream">33% of total deposits</strong>.</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              <div className="rounded-lg bg-navy-light/50 p-3 text-center">
                <p className="font-serif text-lg font-bold text-lime">$100</p>
                <p className="text-[10px] text-muted-foreground">Deposit</p>
                <p className="text-xs text-cream">Cap: $33</p>
              </div>
              <div className="rounded-lg bg-navy-light/50 p-3 text-center">
                <p className="font-serif text-lg font-bold text-lime">$300</p>
                <p className="text-[10px] text-muted-foreground">Deposit</p>
                <p className="text-xs text-cream">Cap: $99</p>
              </div>
              <div className="rounded-lg bg-navy-light/50 p-3 text-center">
                <p className="font-serif text-lg font-bold text-lime">$1,000</p>
                <p className="text-[10px] text-muted-foreground">Deposit</p>
                <p className="text-xs text-cream">Cap: $330</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Once the cap is reached, CashRake pauses. Deposit more and the cap increases — earning resumes.</p>
          </div>

          {/* Game coverage */}
          <div className="mb-6 rounded-lg border border-lime/20 bg-lime/5 p-4">
            <p className="mb-1 text-sm font-medium text-cream">5,900+ games from 43+ providers</p>
            <p className="text-xs text-muted-foreground">Slots, live tables, crash games, blackjack, roulette, sportsbook — every single one feeds CashRake toward the same cap.</p>
          </div>

          <div className="mb-6 rounded-lg border border-lime/30 bg-lime/5 p-4">
            <p className="font-serif text-sm font-semibold text-lime">Core message: &quot;You win even when you lose.&quot;</p>
          </div>

          {/* RTP Table */}
          <p className="mb-3 text-sm font-medium text-cream">CashRake Rates by RTP:</p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  <th className="px-4 py-2.5 text-left font-medium text-cream">RTP</th>
                  <th className="px-4 py-2.5 text-left font-medium text-cream">Cashback %</th>
                  <th className="px-4 py-2.5 text-left font-medium text-cream">Rakeback %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { rtp: "94", cashback: "3", rakeback: "33" },
                  { rtp: "94.5", cashback: "2.7", rakeback: "33" },
                  { rtp: "95", cashback: "2.30", rakeback: "33" },
                  { rtp: "95.5", cashback: "1.95", rakeback: "33" },
                  { rtp: "96", cashback: "1.56", rakeback: "33" },
                  { rtp: "96.5", cashback: "1.25", rakeback: "33" },
                  { rtp: "97", cashback: "0.84", rakeback: "25" },
                  { rtp: "97.5", cashback: "0.00", rakeback: "20" },
                  { rtp: "98", cashback: "0.00", rakeback: "15" },
                  { rtp: "98.5", cashback: "0.00", rakeback: "10" },
                  { rtp: "99", cashback: "0.00", rakeback: "5" },
                  { rtp: "99.5", cashback: "0.00", rakeback: "3" },
                ].map((row) => (
                  <tr key={row.rtp} className="transition-colors hover:bg-secondary/50">
                    <td className="px-4 py-2 text-cream">{row.rtp}</td>
                    <td className="px-4 py-2 text-lime">{row.cashback}%</td>
                    <td className="px-4 py-2 text-teal">{row.rakeback}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Sports bets are calculated from 97% RTP</p>

          {/* Important rules */}
          <div className="mt-6 rounded-lg border border-red-500/20 bg-red-500/5 p-4">
            <p className="mb-2 text-sm font-medium text-red-400">Important Rules</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li><strong className="text-cream">24-hour claim window:</strong> Players must claim CashRake within 24 hours of their last claim, or the balance resets</li>
              <li>Cashed-out or refunded sports bets do not count</li>
              <li>Only bets with real cash qualify — bonus totals are excluded</li>
              <li>Any fraud, abuse, or low-risk farming tricks can result in a ban</li>
            </ul>
          </div>

          {/* Weekly calculation */}
          <div className="mt-6 rounded-lg border border-border bg-secondary p-4">
            <p className="mb-2 text-sm font-medium text-cream">Weekly CashRake Calculation:</p>
            <ul className="mb-3 space-y-1.5 text-sm text-muted-foreground">
              <li>Calculated weekly (Friday to Thursday)</li>
              <li>Paid every Friday</li>
            </ul>
            <p className="font-serif text-sm text-cream">Net Position = Deposits - Withdrawals - Current Balance</p>
            <p className="mt-2 text-xs text-muted-foreground">CashRake only applies if the player is in net loss</p>
          </div>
        </ContentBlock>
      );

    case "leaderboard":
      return (
        <ContentBlock title="Leaderboard System" icon="🏆">
          <ul className="mb-6 space-y-2 text-muted-foreground">
            <li>Top 10 players receive rewards (by default)</li>
            <li>Updated hourly</li>
            <li>Prize pool is typically ~10% of total campaign value</li>
          </ul>
          <p className="mb-3 text-sm font-medium text-cream">Example distribution:</p>
          <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
            {[
              { place: "1st", pct: "38.36%" },
              { place: "2nd", pct: "22.00%" },
              { place: "3rd", pct: "14.73%" },
              { place: "4th", pct: "9.27%" },
              { place: "5th", pct: "5.63%" },
              { place: "6th", pct: "3.82%" },
              { place: "7th", pct: "2.00%" },
              { place: "8th", pct: "1.54%" },
              { place: "9th", pct: "1.54%" },
              { place: "10th", pct: "1.09%" },
            ].map((r) => (
              <div key={r.place} className="rounded-lg border border-border bg-secondary p-2 text-center">
                <p className="font-serif text-xs font-bold text-lime">{r.place}</p>
                <p className="text-[10px] text-muted-foreground">{r.pct}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Leaderboards can be adjusted during setup. Once created, no changes can be made.
          </p>

          {/* Leaderboard FAQs */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-medium text-cream">Frequently Asked Questions</p>
            <div className="space-y-3">
              <FaqAccordion q="How do I participate in the leaderboard?" a="When registering, add the specific referral code of the leaderboard you want to join. Your gaming activities will be automatically tracked and counted toward your progress once registered with the correct code." />
              <FaqAccordion q="What are Spartans Points (SP)?" a="SP are the scoring currency of the leaderboard. You earn SP based on the house edge of games you bet on. Casino games generate SP equivalent to the house edge (e.g., 3.5% house edge = 3.5 SP per dollar wagered). Sports betting generates 2 SP per dollar wagered. Typical slots generate 3.5–4 SP per dollar wagered." />
              <FaqAccordion q="How are Spartans Points calculated?" a="SP = House Edge % × Amount Wagered (for casino). Sports betting: fixed 2 SP per dollar wagered. The more SP you accumulate, the higher your ranking." />
              <FaqAccordion q="When do leaderboard competitions happen?" a="Each leaderboard has a specific competition period which may vary. Start/end dates and schedules are communicated on the leaderboard page." />
              <FaqAccordion q="How are prizes distributed?" a="Prizes are distributed automatically at the end of each competition based on your final SP ranking. Processing may take up to 7 days. To be eligible for withdrawal, rewards must be wagered at least once at minimum odds of 1.30 (Decimal) / -333 (American) / 3/10 (Fractional). This also applies to Casino Crash games." />
              <FaqAccordion q="What is considered prohibited behavior?" a="Prohibited behavior includes data manipulation, exploitation of technical glitches, collusion to inflate SP, low-risk gaming only to accumulate SP, or any fraud/system abuse. Players may be disqualified and banned." />
              <FaqAccordion q="Can I transfer SP between leaderboards?" a="No. Spartans Points are specific to each leaderboard and cannot be transferred. Each leaderboard has its own independent SP accumulator." />
              <FaqAccordion q="Which game gives me the most SP?" a="Games with higher house edges generate more SP per dollar wagered. Check the RTP and house edge for each game on Spartans.com to determine which games earn the most SP." />
              <FaqAccordion q="How do I contact support?" a={<>Questions about the leaderboard? Contact support via live chat on Spartans.com or email <a href="mailto:support@spartans.com" className="text-teal underline hover:text-lime">support@spartans.com</a>.</>} />
            </div>
          </div>
        </ContentBlock>
      );

    case "vip":
      return (
        <ContentBlock title="VIP & High Roller System" icon="💎">
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-medium text-cream">VIP Requirements:</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>Minimum $20,000 weekly deposits</li>
                <li>Active gameplay required</li>
                <li>Approval based on internal review</li>
              </ul>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-cream">Benefits:</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>Starting 10% weekly lossback</li>
                <li>Up to 20% lossback (VIP tier)</li>
                <li>Personalized account management</li>
              </ul>
            </div>
          </div>
          <div className="mb-6 rounded-lg border border-border bg-secondary p-4">
            <p className="mb-2 text-sm font-medium text-cream">VIP Rules:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>No activity = No VIP</li>
              <li>No activity = No limit increase</li>
              <li>Limit increases handled internally (not on request)</li>
              <li>VIP access requires full verification</li>
            </ul>
          </div>
          <div className="rounded-lg border border-lime/20 bg-lime/5 p-4">
            <p className="mb-3 text-sm font-medium text-lime">High Roller Funnel</p>
            <div className="mb-4 grid gap-2 sm:grid-cols-3">
              <div className="rounded-lg bg-secondary px-3 py-2 text-center text-sm text-cream">Dedicated 1-on-1 VIP managers</div>
              <div className="rounded-lg bg-secondary px-3 py-2 text-center text-sm text-cream">Higher betting limits</div>
              <div className="rounded-lg bg-secondary px-3 py-2 text-center text-sm text-cream">Custom setups</div>
            </div>
            <p className="mb-3 text-sm text-muted-foreground">If you have high-value players, create a group chat including you, the player, and the Spartans team:</p>
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="rounded-full bg-secondary px-3 py-1 text-cream">Telegram: @shibacanrage</span>
              <span className="rounded-full bg-secondary px-3 py-1 text-cream">Telegram: @SpartansHOC</span>
              <span className="rounded-full bg-secondary px-3 py-1 text-cream">Discord: Shiba0849</span>
              <span className="rounded-full bg-secondary px-3 py-1 text-cream">Discord: spartansl26</span>
            </div>
          </div>
        </ContentBlock>
      );

    case "giveaway":
      return (
        <ContentBlock title="Giveaway Campaign" icon="🎁">
          <div className="mb-4 rounded-lg border border-lime/20 bg-lime/5 p-5">
            <p className="font-serif text-lg font-bold text-lime">Mansory Koenigsegg Jesko</p>
            <p className="text-sm text-muted-foreground">Spartans Edition (1/1)</p>
          </div>
          <p className="mb-3 text-sm font-medium text-cream">Mechanics:</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {["1. Sign up", "2. Deposit", "3. Join challenge", "4. Play to increase chances"].map((step) => (
              <div key={step} className="rounded-lg border border-border bg-secondary p-3 text-center">
                <p className="text-sm text-cream">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-lime">The more you play, the higher your chances.</p>
        </ContentBlock>
      );

    case "content":
      return (
        <ContentBlock title="Content Requirements" icon="📢">
          <div className="mb-6">
            <p className="mb-3 text-sm font-medium text-cream">Twitch / Kick:</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Show real gameplay (slots / betting)</li>
              <li>Integrate promo:
                <ul className="mt-1 ml-4 space-y-1">
                  <li>Stream panels</li>
                  <li>Chat commands (!spartans)</li>
                  <li>On-screen banners</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-medium text-cream">Content Focus:</p>
            <div className="grid grid-cols-2 gap-2">
              {["Slot gameplay + CashRake", "Leaderboard competition", "VIP / high roller mentions", "Giveaway promotion"].map((item) => (
                <div key={item} className="rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-cream">{item}</div>
              ))}
            </div>
          </div>
        </ContentBlock>
      );

    case "guidelines":
      return (
        <ContentBlock title="Communication Guidelines" icon="🧠">
          <div className="mb-6">
            <p className="mb-3 text-sm font-medium text-cream">Tone:</p>
            <div className="flex flex-wrap gap-2">
              {["Exciting", "Aspirational", "Direct", "Confident"].map((t) => (
                <span key={t} className="rounded-full bg-lime/10 px-4 py-1.5 text-sm font-medium text-lime">{t}</span>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <p className="mb-3 text-sm font-medium text-cream">Key Messages:</p>
            <div className="space-y-2">
              {[
                "CashRake on every spin",
                "You win even when you lose",
                "The more you play, the more you get back",
                "This is not a typical casino experience",
              ].map((msg) => (
                <div key={msg} className="rounded-lg border border-lime/20 bg-lime/5 px-4 py-2">
                  <p className="text-sm text-lime">&quot;{msg}&quot;</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-teal/30 bg-teal/5 p-5">
              <p className="mb-3 font-serif text-sm font-semibold text-teal">DO&apos;s</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>Always promote both reflink and promo code</li>
                <li>Show how CashRake works live (at least 3-4 times during your stream)</li>
                <li>Present it as a &quot;world first&quot; exclusive to Spartans</li>
                <li>Educate your audience on CashRake</li>
                <li>Highlight leaderboard competition</li>
                <li>Identify and refer high rollers</li>
              </ul>
            </div>
            <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-5">
              <p className="mb-3 font-serif text-sm font-semibold text-red-400">DON&apos;Ts</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>Do not skip promo code promotion</li>
                <li>Do not mislead about winnings</li>
                <li>Do not rely on only link or only code</li>
                <li>Do not ignore tracking setup</li>
              </ul>
            </div>
          </div>
        </ContentBlock>
      );

    case "tips":
      return (
        <ContentBlock title="Final Tips" icon="✨">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Your promo code = your business",
              "High rollers generate the most value",
              "CashRake is your main selling point",
              "Leaderboards drive retention and competition",
            ].map((tip) => (
              <div key={tip} className="rounded-lg border border-lime/20 bg-lime/5 p-4">
                <p className="text-sm text-cream">{tip}</p>
              </div>
            ))}
          </div>
        </ContentBlock>
      );

    case "faq":
      return (
        <ContentBlock title="FAQs">
          <p className="text-sm text-muted-foreground">Coming soon.</p>
        </ContentBlock>
      );

    default:
      return null;
  }
}

/* ═══ Components ═══ */

function ContentBlock({
  title,
  children,
}: {
  title: string;
  icon?: string;
  variant?: "warning";
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-6 font-serif text-2xl font-bold text-cream">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

function InfoCard({ title, example }: { title: string; example: string }) {
  return (
    <div className="rounded-lg border border-border bg-secondary p-4">
      <p className="text-sm font-medium text-cream">{title}</p>
      <p className="mt-1 font-mono text-xs text-muted-foreground">{example}</p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-sm text-cream">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime/20 text-xs text-lime">&#10003;</span>
      {text}
    </li>
  );
}

function LinkCard({ label, url }: { label: string; url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-lg border border-border bg-secondary p-4 text-center transition-colors hover:border-lime/30">
      <p className="text-sm font-medium text-cream">{label}</p>
      <p className="mt-1 text-xs text-teal">{url.replace("https://", "")}</p>
    </a>
  );
}

function ChannelCard({ emoji, name, desc }: { emoji: string; name: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-border bg-secondary p-3">
      <span className="text-lg">{emoji}</span>
      <div>
        <p className="text-sm font-medium text-cream">{name}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function GoalCard({ text }: { text: string }) {
  return (
    <div className="rounded-lg border border-border bg-secondary p-3">
      <p className="text-sm text-cream">{text}</p>
    </div>
  );
}

function FaqAccordion({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg border border-border bg-secondary">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-navy-light/30"
      >
        <p className="text-sm font-medium text-cream">{q}</p>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`shrink-0 ml-3 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="border-t border-border px-4 py-3">
          <div className="text-sm leading-relaxed text-muted-foreground">{a}</div>
        </div>
      )}
    </div>
  );
}
