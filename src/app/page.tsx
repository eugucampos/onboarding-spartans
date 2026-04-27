export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-navy">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-navy-dark/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-lime">
              <span className="font-serif text-sm font-bold text-black">S</span>
            </div>
            <span className="font-serif text-lg font-semibold text-cream">Spartans</span>
          </div>
          <span className="text-xs text-muted-foreground">Influencer Briefing</span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Hero */}
        <section className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-lime/10 px-4 py-1.5">
            <span className="font-serif text-sm font-medium text-lime">Creator Program</span>
          </div>
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-cream sm:text-5xl">
            Influencer Briefing
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Welcome to the Spartans Creator Program. Our goal is to collaborate with you to drive high-quality traffic, deposits, and player engagement through your content.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Last update: 24.04.2026</p>
        </section>

        {/* Table of Contents */}
        <nav className="mb-16 rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 font-serif text-lg font-semibold text-lime">Table of Contents</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">1. Before the Start</p>
              <ul className="space-y-1.5 text-sm">
                <li><a href="#onboarding" className="text-cream hover:text-lime transition-colors">Onboarding & Setup</a></li>
                <li><a href="#tracking" className="text-cream hover:text-lime transition-colors">Tracking Requirements</a></li>
                <li><a href="#social" className="text-cream hover:text-lime transition-colors">Social Media</a></li>
                <li><a href="#discord" className="text-cream hover:text-lime transition-colors">Discord Communication</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">2. During the Campaign</p>
              <ul className="space-y-1.5 text-sm">
                <li><a href="#goals" className="text-cream hover:text-lime transition-colors">Campaign Goals</a></li>
                <li><a href="#cashrake" className="text-cream hover:text-lime transition-colors">CashRake System</a></li>
                <li><a href="#leaderboard" className="text-cream hover:text-lime transition-colors">Leaderboard</a></li>
                <li><a href="#vip" className="text-cream hover:text-lime transition-colors">VIP & High Roller</a></li>
                <li><a href="#giveaway" className="text-cream hover:text-lime transition-colors">Giveaway Campaign</a></li>
                <li><a href="#content" className="text-cream hover:text-lime transition-colors">Content Requirements</a></li>
                <li><a href="#guidelines" className="text-cream hover:text-lime transition-colors">Communication Guidelines</a></li>
                <li><a href="#faq" className="text-cream hover:text-lime transition-colors">FAQs</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* ═══ PART 1 ═══ */}
        <div className="mb-8">
          <div className="inline-block rounded-full bg-teal/20 px-3 py-1">
            <span className="text-xs font-medium text-teal">Part 1</span>
          </div>
        </div>
        <h2 className="mb-10 font-serif text-3xl font-bold text-cream">Before the Start</h2>

        {/* Onboarding */}
        <Section id="onboarding" title="Onboarding & Setup" icon="1">
          <p className="mb-4 text-muted-foreground">You will receive:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <InfoCard title="Referral Link" example="spartans.com/?c=PROMOCODE&affiliateid=000000" />
            <InfoCard title="Promo Code" example="PROMOCODE" />
            <InfoCard title="Demo Account" example="Credentials (if applicable)" />
            <InfoCard title="Stream Assets" example="Animated banner + Static panel" />
          </div>
        </Section>

        {/* Tracking */}
        <Section id="tracking" title="Tracking Requirements" icon="!" variant="warning">
          <p className="mb-4 text-muted-foreground">For proper tracking, users <strong className="text-cream">MUST</strong>:</p>
          <ul className="space-y-2">
            <CheckItem text="Register using your referral link" />
            <CheckItem text="Enter your promo code during signup" />
          </ul>
          <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/5 p-4">
            <p className="text-sm text-red-400">Missing either element = incorrect or lost tracking</p>
          </div>
        </Section>

        {/* Social Media */}
        <Section id="social" title="Social Media" icon="2">
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
        </Section>

        {/* Discord */}
        <Section id="discord" title="Discord Communication" icon="3">
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
        </Section>

        {/* ═══ PART 2 ═══ */}
        <div className="mb-8 mt-20">
          <div className="inline-block rounded-full bg-lime/20 px-3 py-1">
            <span className="text-xs font-medium text-lime">Part 2</span>
          </div>
        </div>
        <h2 className="mb-10 font-serif text-3xl font-bold text-cream">During the Campaign</h2>

        {/* Goals */}
        <Section id="goals" title="Campaign Goals" icon="🔥">
          <div className="grid gap-2 sm:grid-cols-2">
            <GoalCard text="Promote your referral link + promo code" />
            <GoalCard text="Drive deposits and player activity" />
            <GoalCard text="Attract high-value players (VIPs)" />
            <GoalCard text="Maintain strong and consistent engagement" />
          </div>
        </Section>

        {/* CashRake */}
        <Section id="cashrake" title="CashRake = Cashback + Rakeback" icon="💰">
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-lime/20 bg-lime/5 p-5">
              <p className="font-serif text-2xl font-bold text-lime">Up to 3%</p>
              <p className="text-sm text-muted-foreground">Instant cashback on every losing wager</p>
            </div>
            <div className="rounded-lg border border-teal/20 bg-teal/5 p-5">
              <p className="font-serif text-2xl font-bold text-teal">Up to 33%</p>
              <p className="text-sm text-muted-foreground">Rakeback of the House Edge to your wallet</p>
            </div>
          </div>
          <div className="rounded-lg border border-lime/30 bg-lime/5 p-4">
            <p className="font-serif text-sm font-semibold text-lime">Core message: &quot;You win even when you lose.&quot;</p>
          </div>
        </Section>

        {/* Leaderboard */}
        <Section id="leaderboard" title="Leaderboard System" icon="🏆">
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
        </Section>

        {/* VIP */}
        <Section id="vip" title="VIP & High Roller System" icon="💎">
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
            <p className="mb-2 text-sm font-medium text-lime">High Roller Funnel</p>
            <p className="mb-3 text-sm text-muted-foreground">If you have high-value players, create a group chat including you, the player, and the Spartans team:</p>
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="rounded-full bg-secondary px-3 py-1 text-cream">Telegram: @shibacanrage</span>
              <span className="rounded-full bg-secondary px-3 py-1 text-cream">Telegram: @SpartansHOC</span>
              <span className="rounded-full bg-secondary px-3 py-1 text-cream">Discord: Shiba0849</span>
              <span className="rounded-full bg-secondary px-3 py-1 text-cream">Discord: spartansl26</span>
            </div>
          </div>
        </Section>

        {/* Cashback System */}
        <Section id="cashback" title="Cashback System" icon="💸">
          <ul className="mb-4 space-y-2 text-muted-foreground">
            <li>Calculated weekly (Friday to Thursday)</li>
            <li>Paid every Friday</li>
          </ul>
          <div className="rounded-lg border border-border bg-secondary p-4">
            <p className="font-serif text-sm text-cream">Net Position = Deposits - Withdrawals - Current Balance</p>
            <p className="mt-2 text-xs text-muted-foreground">CashRake only applies if the player is in net loss</p>
          </div>
        </Section>

        {/* Giveaway */}
        <Section id="giveaway" title="Giveaway Campaign" icon="🎁">
          <div className="mb-4 rounded-lg border border-lime/20 bg-lime/5 p-5">
            <p className="font-serif text-lg font-bold text-lime">Mansory Koenigsegg Jesko</p>
            <p className="text-sm text-muted-foreground">Spartans Edition (1/1)</p>
          </div>
          <p className="mb-3 text-sm font-medium text-cream">Mechanics:</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {["1. Sign up", "2. Deposit", "3. Join challenge", "4. Play to win"].map((step) => (
              <div key={step} className="rounded-lg border border-border bg-secondary p-3 text-center">
                <p className="text-sm text-cream">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-lime">The more you play, the higher your chances.</p>
        </Section>

        {/* Content Requirements */}
        <Section id="content" title="Content Requirements" icon="📢">
          <div className="mb-6">
            <p className="mb-3 text-sm font-medium text-cream">Twitch / Kick:</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Show real gameplay (slots / betting)</li>
              <li>Stream panels</li>
              <li>Chat commands (!spartans)</li>
              <li>On-screen banners</li>
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
        </Section>

        {/* Guidelines */}
        <Section id="guidelines" title="Communication Guidelines" icon="🧠">
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
                <li>Show how CashRake works live (3-4 times per stream)</li>
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
        </Section>

        {/* Final Tips */}
        <Section id="tips" title="Final Tips" icon="✨">
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
        </Section>

        {/* FAQ */}
        <Section id="faq" title="FAQs" icon="💡">
          <div className="space-y-3">
            <FaqCard
              q="How does CashRake work?"
              url="https://spartans.com/en/how-cashrake-works"
            />
            <FaqCard
              q="How does the leaderboard work?"
              url="https://spartansleaderboards.com/faq"
            />
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-xs text-muted-foreground">SPARTANS.COM &copy; 2026 All rights reserved</p>
      </footer>
    </div>
  );
}

/* ═══ Components ═══ */

function Section({
  id,
  title,
  icon,
  variant,
  children,
}: {
  id: string;
  title: string;
  icon: string;
  variant?: "warning";
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <div className="mb-4 flex items-center gap-3">
        <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm ${variant === "warning" ? "bg-red-500/20 text-red-400" : "bg-lime/10 text-lime"}`}>
          {icon}
        </div>
        <h3 className="font-serif text-xl font-semibold text-cream">{title}</h3>
      </div>
      <div className="pl-11">{children}</div>
    </section>
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
