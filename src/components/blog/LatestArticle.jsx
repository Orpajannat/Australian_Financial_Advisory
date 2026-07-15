import Link from 'next/link'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Clock3,
  DollarSign,
  FileText,
  GraduationCap,
  Landmark,
  ShieldCheck,
  TrendingUp,
  WalletCards,
} from 'lucide-react'

const articles = [
  {
    title: 'How to Build a Strong Financial Foundation',
    excerpt: 'The essential building blocks for creating clarity, resilience, and lasting financial confidence.',
    category: 'Financial Planning',
    readTime: '5 min read',
    slug: 'building-a-strong-financial-foundation',
    icon: GraduationCap,
    cover: 'from-[#dcecff] via-[#eef6ff] to-[#c8e1ff]',
    ink: 'text-[#086bd7]',
    badge: 'bg-[#0875ec] text-white',
  },
  {
    title: 'Investment Strategies Every Beginner Should Know',
    excerpt: 'Practical principles to help new investors make considered decisions and stay focused long term.',
    category: 'Investment',
    readTime: '6 min read',
    slug: 'investment-strategies-for-beginners',
    icon: TrendingUp,
    cover: 'from-[#dff5e9] via-[#f0faf4] to-[#c9ead8]',
    ink: 'text-[#168455]',
    badge: 'bg-[#18885b] text-white',
  },
  {
    title: 'Preparing for a Comfortable Retirement',
    excerpt: 'Key considerations for turning retirement ambitions into a practical, sustainable financial plan.',
    category: 'Retirement',
    readTime: '5 min read',
    slug: 'preparing-for-a-comfortable-retirement',
    icon: Landmark,
    cover: 'from-[#ece5ff] via-[#f7f4ff] to-[#ded1ff]',
    ink: 'text-[#7650dc]',
    badge: 'bg-[#7650dc] text-white',
  },
  {
    title: 'Protecting Your Wealth Through Smart Risk Management',
    excerpt: 'A considered approach to protecting your income, assets, family, and wider financial strategy.',
    category: 'Risk Management',
    readTime: '5 min read',
    slug: 'protecting-wealth-through-risk-management',
    icon: ShieldCheck,
    cover: 'from-[#ffeadc] via-[#fff7f0] to-[#ffddc7]',
    ink: 'text-[#e46d20]',
    badge: 'bg-[#ed7628] text-white',
  },
  {
    title: 'Managing Cash Flow for Financial Success',
    excerpt: 'Simple ways to understand where your money goes and direct more of it toward meaningful goals.',
    category: 'Financial Planning',
    readTime: '6 min read',
    slug: 'managing-cash-flow-for-financial-success',
    icon: WalletCards,
    cover: 'from-[#dff4f7] via-[#f0fbfc] to-[#cae9ee]',
    ink: 'text-[#168697]',
    badge: 'bg-[#168697] text-white',
  },
  {
    title: 'Common Financial Planning Mistakes to Avoid',
    excerpt: 'Recognise the decisions and habits that can quietly disrupt an otherwise sound financial plan.',
    category: 'Planning Tips',
    readTime: '6 min read',
    slug: 'financial-planning-mistakes-to-avoid',
    icon: FileText,
    cover: 'from-[#e4ebf5] via-[#f5f8fc] to-[#d6e1ef]',
    ink: 'text-[#345a89]',
    badge: 'bg-[#345a89] text-white',
  },
  {
    title: 'How Inflation Impacts Your Investments',
    excerpt: 'Understand how rising prices affect purchasing power, portfolio returns, and long-term objectives.',
    category: 'Market Perspectives',
    readTime: '5 min read',
    slug: 'how-inflation-impacts-investments',
    icon: DollarSign,
    cover: 'from-[#fff0cf] via-[#fff9eb] to-[#f5dfaa]',
    ink: 'text-[#b77a0a]',
    badge: 'bg-[#b77a0a] text-white',
  },
  {
    title: 'Estate Planning Made Simple',
    excerpt: 'The core documents and conversations that help protect your wishes, family, and financial legacy.',
    category: 'Estate Planning',
    readTime: '5 min read',
    slug: 'estate-planning-made-simple',
    icon: FileText,
    cover: 'from-[#e3f2e8] via-[#f4faf6] to-[#cfe6d7]',
    ink: 'text-[#367b4d]',
    badge: 'bg-[#367b4d] text-white',
  },
  {
    title: 'Business Financial Planning Essentials',
    excerpt: 'A practical overview of cash flow, protection, growth, and succession considerations for owners.',
    category: 'Business',
    readTime: '6 min read',
    slug: 'business-financial-planning-essentials',
    icon: BriefcaseBusiness,
    cover: 'from-[#dfe7ff] via-[#f2f5ff] to-[#ccd8fa]',
    ink: 'text-[#385bb7]',
    badge: 'bg-[#385bb7] text-white',
  },
]

function ArticleCard ({ article, index }) {
  const Icon = article.icon

  return (
    <article className='group flex min-h-[31rem] flex-col overflow-hidden rounded-[1.6rem] border border-[#dce6f3] bg-white shadow-[0_14px_40px_rgba(8,48,105,0.06)] transition duration-500 hover:-translate-y-2 hover:border-[#93c5f8] hover:shadow-[0_26px_60px_rgba(8,72,155,0.14)]'>
      <div className={`relative aspect-[16/9] overflow-hidden bg-linear-to-br ${article.cover}`}>
        <div className='pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full border border-current opacity-[0.07] transition duration-700 group-hover:scale-125' aria-hidden='true' />
        <div className='pointer-events-none absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-white/35 blur-xl transition duration-700 group-hover:scale-125' aria-hidden='true' />
        <span className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.13em] shadow-sm ${article.badge}`}>{article.category}</span>
        <span className='absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-white/55 bg-white/60 px-2.5 py-1.5 text-[0.68rem] font-semibold text-[#485970] backdrop-blur-sm'>
          <Clock3 size={12} aria-hidden='true' />
          {article.readTime}
        </span>
        <div className='absolute inset-0 grid place-items-center'>
          <span className={`grid h-24 w-24 place-items-center rounded-[2rem] border border-white/65 bg-white/45 ${article.ink} shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_18px_40px_rgba(20,58,105,0.12)] backdrop-blur-sm transition duration-700 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-white/70`}>
            <Icon size={44} strokeWidth={1.5} aria-hidden='true' />
          </span>
        </div>
        <span className='absolute bottom-4 right-4 text-5xl font-bold tracking-[-0.09em] text-[#0a214d]/[0.055]' aria-hidden='true'>{String(index + 1).padStart(2, '0')}</span>
      </div>

      <div className='flex flex-1 flex-col p-6 sm:p-7'>
        <h3 className='text-xl font-bold leading-snug tracking-[-0.03em] text-[#071a43] transition-colors duration-300 group-hover:text-[#0875ec] sm:text-[1.35rem]'>{article.title}</h3>
        <p className='mt-3 text-sm leading-7 text-[#637088]'>{article.excerpt}</p>

        <Link href={`/blog/${article.slug}`} className='group/link mt-auto flex items-center justify-between border-t border-[#e2eaf4] pt-5 text-sm font-bold text-[#0875ec] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0875ec]' aria-label={`Read ${article.title}`}>
          Read article
          <span className='grid h-9 w-9 place-items-center rounded-full bg-[#edf5ff] transition duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-1 group-hover/link:bg-[#0875ec] group-hover/link:text-white' aria-hidden='true'>
            <ArrowUpRight size={17} />
          </span>
        </Link>
      </div>
    </article>
  )
}

export default function LatestArticle () {
  return (
    <section className='relative overflow-hidden bg-[#f7faff] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28'>
      <div className='pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#e1eeff]/70 blur-3xl' aria-hidden='true' />
      <div className='pointer-events-none absolute -right-40 bottom-52 h-96 w-96 rounded-full bg-[#e6f1ff] blur-3xl' aria-hidden='true' />

      <div className='relative mx-auto max-w-7xl'>
        <div className='max-w-3xl'>
          <p className='flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0875ec] sm:text-sm'>
            <span className='h-px w-9 bg-[#0875ec]' aria-hidden='true' />
            Latest Articles
          </p>
          <h2 className='mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.05em] text-[#06183f] sm:text-5xl lg:text-6xl'>
            Ideas to help you make <span className='text-[#0875ec]'>informed decisions.</span>
          </h2>
          <p className='mt-5 max-w-2xl text-sm leading-7 text-[#5d6980] sm:text-base sm:leading-8'>
            Practical perspectives and clear explanations across the financial topics that matter throughout life.
          </p>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3'>
          {articles.map((article, index) => (
            <ArticleCard key={article.title} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
