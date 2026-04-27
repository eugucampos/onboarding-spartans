"use client";

import Image from "next/image";
import { useState } from "react";

const menuGroups = [
  {
    label: "Before the Start",
    tag: "Part 1",
    tagColor: "bg-teal/20 text-teal",
    items: [
      { id: "onboarding", label: "Onboarding & Setup" },
      { id: "tracking", label: "Tracking Requirements" },
      { id: "required-info", label: "Required Information" },
      { id: "social", label: "Social Media" },
      { id: "discord", label: "Discord Communication" },
    ],
  },
  {
    label: "During the Campaign",
    tag: "Part 2",
    tagColor: "bg-lime/20 text-lime",
    items: [
      { id: "goals", label: "Campaign Goals" },
      { id: "cashrake", label: "CashRake System" },
      { id: "leaderboard", label: "Leaderboard" },
      { id: "vip", label: "VIP & High Roller" },
      { id: "giveaway", label: "Giveaway Campaign" },
      { id: "content", label: "Content Requirements" },
      { id: "guidelines", label: "Communication Guidelines" },
      { id: "tips", label: "Final Tips" },
      { id: "faq", label: "FAQs" },
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
    <div className="min-h-screen bg-navy">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-navy-dark/90 backdrop-blur-md">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary text-cream transition-colors hover:border-lime/30 lg:hidden"
              aria-label="Toggle menu"
            >
              {sidebarOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
              )}
            </button>
            <button onClick={() => selectSection("home")} className="flex items-center">
              <Image src="/images/logo-spartans.png" alt="Spartans" width={160} height={40} className="h-9 w-auto" />
            </button>
          </div>
          <span className="text-xs text-muted-foreground">Influencer Briefing</span>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar overlay for mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-30 bg-black/60 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed top-[57px] left-0 z-40 h-[calc(100vh-57px)] overflow-y-auto border-r border-border bg-navy-dark transition-all duration-300 lg:sticky lg:translate-x-0 lg:z-auto ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } ${sidebarCollapsed ? "w-16" : "w-72"}`}
        >
          {/* Collapse toggle (desktop only) */}
          <div className="hidden lg:flex items-center justify-end p-2">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-cream"
              aria-label={sidebarCollapsed ? "Expand menu" : "Collapse menu"}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {sidebarCollapsed ? (
                  <path d="M9 18l6-6-6-6" />
                ) : (
                  <path d="M15 18l-6-6 6-6" />
                )}
              </svg>
            </button>
          </div>

          {/* Collapsed state: helmet + icon dots */}
          {sidebarCollapsed ? (
            <div className="flex flex-col items-center gap-1 px-1 pt-2">
              <button
                onClick={() => selectSection("home")}
                className={`mb-2 flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                  activeSection === "home" ? "bg-lime/10 ring-1 ring-lime/30" : "hover:bg-secondary"
                }`}
                title="Home"
              >
                <Image src="/images/helmet-green.png" alt="Spartans" width={28} height={28} className="h-7 w-7" />
              </button>
              {menuGroups.map((group) =>
                group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => selectSection(item.id)}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs font-medium transition-colors ${
                      activeSection === item.id
                        ? "bg-lime/10 text-lime"
                        : "text-muted-foreground hover:bg-secondary hover:text-cream"
                    }`}
                    title={item.label}
                  >
                    {item.label.charAt(0)}
                  </button>
                ))
              )}
            </div>
          ) : (
            <>
              <nav className="p-4">
                {/* Home link */}
                <button
                  onClick={() => selectSection("home")}
                  className={`mb-4 flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors ${
                    activeSection === "home"
                      ? "bg-lime/10 text-lime"
                      : "text-muted-foreground hover:bg-secondary hover:text-cream"
                  }`}
                >
                  <Image src="/images/helmet-green.png" alt="" width={20} height={20} className="h-5 w-5" />
                  <span className="text-sm font-medium">Home</span>
                </button>

                <p className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Navigation</p>
                {menuGroups.map((group, gIdx) => (
                  <div key={group.label} className="mb-2">
                    <button
                      onClick={() => toggleGroup(gIdx)}
                      className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left transition-colors hover:bg-secondary"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${group.tagColor}`}>{group.tag}</span>
                        <span className="text-sm font-medium text-cream">{group.label}</span>
                      </div>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className={`text-muted-foreground transition-transform duration-200 ${expandedGroups[gIdx] ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    {expandedGroups[gIdx] && (
                      <div className="mt-1 ml-3 space-y-0.5 border-l border-border pl-3">
                        {group.items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => selectSection(item.id)}
                            className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                              activeSection === item.id
                                ? "bg-lime/10 font-medium text-lime"
                                : "text-muted-foreground hover:bg-secondary hover:text-cream"
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="border-t border-border p-4">
                <p className="text-[10px] text-muted-foreground">Last update: 24.04.2026</p>
              </div>
            </>
          )}
        </aside>

        {/* Main content */}
        <main className="min-h-[calc(100vh-57px)] flex-1 px-6 py-10 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <SectionContent id={activeSection} />
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-navy-dark">
        <div className="mx-auto max-w-4xl px-6 py-10">
          {/* Company Info */}
          <p className="mb-8 text-center text-xs leading-relaxed text-muted-foreground">
            Spartans.com is owned and operated by Nexus International Entertainment Ltd. registration number: 000043488, registered address: 9 Barrack Road, Belize City, Belize. Contact us{" "}
            <a href="mailto:support@spartans.com" className="text-teal underline hover:text-lime">support@spartans.com</a>.{" "}
            Spartans.com is licensed and regulated by the Government of the Autonomous Island of Anjouan, Union of Comoros and operates under License No. ALSI-202409038-F12. Spartans.com has passed all regulatory compliance and is legally authorized to conduct gaming operations for any and all games of chance and wagering.
          </p>

          {/* Responsible Gaming Logos */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
            <Image src="/images/footer/gameanon.png" alt="Gamblers Anonymous" width={36} height={37} className="h-9 w-auto opacity-60 hover:opacity-100 transition-opacity" />
            <Image src="/images/footer/responsible.png" alt="Responsible Gaming" width={93} height={30} className="h-7 w-auto opacity-60 hover:opacity-100 transition-opacity" />
            <Image src="/images/footer/18.png" alt="18+" width={33} height={32} className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" />
            <Image src="/images/footer/gambling-therapy.png" alt="Gambling Therapy" width={74} height={29} className="h-7 w-auto opacity-60 hover:opacity-100 transition-opacity" />
            <Image src="/images/footer/begamble.png" alt="BeGambleAware" width={151} height={20} className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity" />
          </div>

          {/* Copyright */}
          <p className="text-center text-xs text-muted-foreground">
            Copyright &copy; 2026 All Rights Reserved.
          </p>
        </div>
      </footer>
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
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-lime/20 bg-lime/5 p-5">
              <p className="font-serif text-2xl font-bold text-lime">Up to 3%</p>
              <p className="text-sm text-muted-foreground">Base return on every losing wager, no waiting</p>
            </div>
            <div className="rounded-lg border border-teal/20 bg-teal/5 p-5">
              <p className="font-serif text-2xl font-bold text-teal">Up to 33%</p>
              <p className="text-sm text-muted-foreground">Rakeback of the House Edge directly to your wallet</p>
            </div>
          </div>
          <p className="mb-6 text-sm text-muted-foreground">Rewards applied automatically on every spin.</p>
          <div className="mb-6 rounded-lg border border-lime/30 bg-lime/5 p-4">
            <p className="font-serif text-sm font-semibold text-lime">Core message: &quot;You win even when you lose.&quot;</p>
          </div>

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

          <div className="mt-6 rounded-lg border border-border bg-secondary p-4">
            <p className="mb-2 text-sm font-medium text-cream">How CashRake is calculated:</p>
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
        <ContentBlock title="FAQs" icon="💡">
          <div className="space-y-3">
            <FaqCard q="How does CashRake work?" url="https://spartans.com/en/how-cashrake-works" />
            <FaqCard q="How does the leaderboard work?" url="https://spartansleaderboards.com/faq" />
          </div>
        </ContentBlock>
      );

    default:
      return null;
  }
}

/* ═══ Components ═══ */

function ContentBlock({
  title,
  icon,
  variant,
  children,
}: {
  title: string;
  icon: string;
  variant?: "warning";
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-base ${variant === "warning" ? "bg-red-500/20 text-red-400" : "bg-lime/10 text-lime"}`}>
          {icon}
        </div>
        <h2 className="font-serif text-2xl font-bold text-cream">{title}</h2>
      </div>
      <div className="pl-[52px]">{children}</div>
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

function FaqCard({ q, url }: { q: string; url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-border bg-secondary p-4 transition-colors hover:border-teal/30">
      <p className="text-sm font-medium text-cream">{q}</p>
      <p className="mt-1 text-xs text-teal">{url.replace("https://", "")} &rarr;</p>
    </a>
  );
}
