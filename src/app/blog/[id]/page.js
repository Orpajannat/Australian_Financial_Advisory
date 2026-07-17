import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, ShieldCheck } from 'lucide-react'
import { articles } from '@/components/blog/LatestArticle'

const articleSections = {
  'building-a-strong-financial-foundation': [
    ['Start with a clear picture', 'A strong financial foundation begins with understanding your income, essential expenses, debts, assets, and existing commitments. Bringing these details together creates a reliable starting point for every decision that follows.'],
    ['Build resilience before pursuing growth', 'An accessible emergency reserve can help absorb unexpected costs without disrupting longer-term plans. The appropriate amount depends on your household, employment stability, insurance position, and regular commitments.'],
    ['Turn priorities into a practical plan', 'Clear goals, realistic timeframes, and regular reviews help transform good intentions into consistent progress. Your strategy should remain flexible enough to respond as your circumstances and priorities change.'],
  ],
  'investment-strategies-for-beginners': [
    ['Define the purpose of investing', 'Before selecting an investment, clarify what the money is intended to achieve and when it may be needed. Your timeframe, objectives, and ability to tolerate market movement should guide the strategy.'],
    ['Diversify deliberately', 'Spreading investments across different asset classes, industries, and regions can reduce reliance on any single outcome. Diversification does not remove risk, but it can help create a more balanced portfolio.'],
    ['Stay focused on the long term', 'Markets will move through strong and weak periods. A disciplined plan, sensible costs, and periodic rebalancing can be more useful than reacting to every short-term headline.'],
  ],
  'preparing-for-a-comfortable-retirement': [
    ['Picture the retirement you want', 'Estimate the lifestyle, activities, location, and support you would like in retirement. A specific vision makes it easier to assess the income and capital that may be required.'],
    ['Understand your income sources', 'Superannuation, personal savings, investments, and potential government benefits may all contribute. Reviewing how these sources work together can reveal gaps and opportunities well before retirement.'],
    ['Review the plan regularly', 'Retirement planning is not a one-time calculation. Contributions, investment settings, insurance, tax considerations, and estate plans should be reviewed as legislation and personal circumstances evolve.'],
  ],
  'protecting-wealth-through-risk-management': [
    ['Identify the risks that matter', 'Consider how illness, injury, loss of income, market changes, or an unexpected death could affect your household and financial commitments. Prioritise risks by their likelihood and potential impact.'],
    ['Combine insurance with financial buffers', 'Personal insurance can be important, but it works best alongside emergency savings, manageable debt, diversified investments, and clear legal arrangements.'],
    ['Keep protection aligned with your life', 'Cover that suited you several years ago may no longer reflect your income, family, debts, or business interests. Review protection after major life events and at regular intervals.'],
  ],
  'managing-cash-flow-for-financial-success': [
    ['Know where the money goes', 'Review several months of transactions and separate essential commitments from flexible spending. Accurate information makes it easier to identify patterns without relying on guesswork.'],
    ['Give each surplus dollar a purpose', 'Directing money automatically toward bills, reserves, debt reduction, and long-term goals can reduce decision fatigue and help progress continue consistently.'],
    ['Create room for real life', 'A sustainable cash-flow plan includes flexibility for enjoyment and irregular expenses. Overly restrictive budgets are difficult to maintain and can undermine otherwise sound intentions.'],
  ],
  'financial-planning-mistakes-to-avoid': [
    ['Waiting for the perfect time', 'Delaying until income, markets, or life feel completely settled can mean missing years of useful progress. Starting with manageable actions is often more valuable than waiting for perfect conditions.'],
    ['Treating each decision in isolation', 'Debt, superannuation, investments, insurance, tax, and estate planning affect one another. Considering them together can reduce gaps and conflicting choices.'],
    ['Failing to review', 'Even a well-designed strategy can become outdated. Regular reviews help keep assumptions, beneficiaries, protection, investments, and goals aligned with your current circumstances.'],
  ],
  'how-inflation-impacts-investments': [
    ['Focus on purchasing power', 'Inflation reduces what a dollar can buy over time. An investment return should therefore be considered after inflation, fees, and tax—not only as a headline percentage.'],
    ['Different assets respond differently', 'Cash, fixed interest, shares, property, and other assets can react differently as inflation and interest rates change. A diversified strategy can help manage these varied effects.'],
    ['Keep the response proportionate', 'Inflation matters, but abrupt portfolio changes based on a single economic reading can introduce new risks. Decisions should remain connected to your timeframe and long-term plan.'],
  ],
  'estate-planning-made-simple': [
    ['Document your intentions', 'A valid will is central, but a complete estate plan may also include powers of attorney, medical decision arrangements, superannuation nominations, and trust or company considerations.'],
    ['Check how assets are owned', 'Not every asset is automatically controlled by a will. Ownership structures, superannuation rules, joint assets, and beneficiary nominations can affect how wealth is transferred.'],
    ['Communicate and review', 'Clear conversations can reduce uncertainty for family and appointed decision-makers. Review documents after relationships, dependants, assets, or legislation change.'],
  ],
  'business-financial-planning-essentials': [
    ['Separate business and personal priorities', 'Owners often have much of their wealth and income tied to one enterprise. A clear view of personal goals can guide how profits, remuneration, superannuation, and investments are managed.'],
    ['Protect operations and key people', 'Cash reserves, appropriate insurance, documented processes, and contingency plans can help a business continue through disruption or the loss of a key contributor.'],
    ['Plan for transition early', 'Succession and exit planning are most effective when started well before a sale or handover. Building transferable value and clarifying ownership outcomes takes time.'],
  ],
}

export function generateStaticParams() {
  return articles.map((article) => ({ id: article.slug }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const article = articles.find((item) => item.slug === id)
  if (!article) return { title: 'Article not found' }
  return { title: `${article.title} | Australian Financial Advisory`, description: article.excerpt }
}

export default async function ArticlePage({ params }) {
  const { id } = await params
  const article = articles.find((item) => item.slug === id)
  if (!article) notFound()

  const sections = articleSections[article.slug]
  const relatedArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 2)

  return (
    <main className="bg-[#f7faff] pt-28 sm:pt-32 lg:pt-36">
      <article>
        <header className="px-5 pb-10 sm:px-8 sm:pb-14 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#0875ec] transition hover:-translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0875ec]"><ArrowLeft size={17} /> Back to all articles</Link>
            <div className="mt-8 grid items-center gap-9 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
              <div>
                <span className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] ${article.badge}`}>{article.category}</span>
                <h1 className="mt-5 text-3xl font-bold leading-[1.08] tracking-[-0.045em] text-[#06183f] sm:text-4xl md:text-5xl lg:text-[3.5rem]">{article.title}</h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#5d6980] sm:text-lg">{article.excerpt}</p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#637088]"><span className="flex items-center gap-2"><CalendarDays size={16} className="text-[#0875ec]" /> 17 July 2026</span><span className="flex items-center gap-2"><Clock3 size={16} className="text-[#0875ec]" /> {article.readTime}</span></div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-[#dce6f3] bg-[#dce6f3] shadow-[0_24px_65px_rgba(8,72,155,0.16)] sm:rounded-[2.25rem]"><Image src={article.image} alt={article.title} fill priority sizes="(max-width: 1023px) 100vw, 48vw" className="object-cover" /><div className="absolute inset-0 bg-linear-to-t from-[#031947]/30 via-transparent to-transparent" /></div>
            </div>
          </div>
        </header>

        <div className="border-y border-[#dce6f3] bg-white px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <div className="min-w-0">
              <p className="text-lg leading-8 text-[#34445e] sm:text-xl sm:leading-9">Financial decisions are strongest when they are informed, connected to clear objectives, and reviewed as life changes. The following principles provide a practical place to begin.</p>
              <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">{sections.map(([heading, body], index) => <section key={heading}><div className="flex items-start gap-4"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#edf5ff] text-xs font-bold text-[#0875ec]">0{index + 1}</span><div className="min-w-0"><h2 className="text-xl font-bold tracking-[-0.025em] text-[#06183f] sm:text-2xl">{heading}</h2><p className="mt-3 text-base leading-8 text-[#5d6980]">{body}</p></div></div></section>)}</div>
              <div className="mt-12 rounded-2xl border border-[#cfe2f8] bg-[#f2f7fe] p-5 sm:p-7"><p className="flex items-start gap-3 text-sm leading-7 text-[#4f5f76]"><ShieldCheck size={20} className="mt-1 shrink-0 text-[#0875ec]" /><span><strong className="text-[#06183f]">General information only.</strong> This article does not consider your personal objectives, financial situation, or needs. Consider seeking professional advice before acting.</span></p></div>
            </div>
            <aside className="rounded-2xl bg-[#031642] p-6 text-white shadow-[0_22px_55px_rgba(3,22,66,0.2)] lg:sticky lg:top-28"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#55b4ff]">Need personal guidance?</p><h2 className="mt-3 text-2xl font-bold tracking-[-0.03em]">Make your next decision with clarity.</h2><p className="mt-4 text-sm leading-7 text-white/65">Speak with an adviser about a strategy shaped around your circumstances and goals.</p><Link href="/contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0875ec] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#168cff]">Book a consultation <ArrowRight size={17} /></Link></aside>
          </div>
        </div>
      </article>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10"><div className="mx-auto max-w-6xl"><h2 className="text-2xl font-bold tracking-[-0.035em] text-[#06183f] sm:text-3xl">Continue reading</h2><div className="mt-7 grid gap-5 md:grid-cols-2">{relatedArticles.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className="group flex items-center gap-4 rounded-2xl border border-[#dce6f3] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#93c5f8] hover:shadow-lg"><div className="relative size-20 shrink-0 overflow-hidden rounded-xl sm:size-24"><Image src={item.image} alt="" fill sizes="96px" className="object-cover transition group-hover:scale-105" /></div><div className="min-w-0"><p className="text-xs font-bold uppercase tracking-[0.1em] text-[#0875ec]">{item.category}</p><h3 className="mt-2 font-bold leading-snug text-[#06183f] sm:text-lg">{item.title}</h3></div><ArrowRight className="ml-auto shrink-0 text-[#0875ec]" size={19} /></Link>)}</div></div></section>
    </main>
  )
}
