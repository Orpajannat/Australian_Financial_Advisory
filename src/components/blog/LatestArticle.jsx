import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  Clock3,
} from 'lucide-react'

const articles = [
  {
    title: 'How to Build a Strong Financial Foundation',
    excerpt: 'The essential building blocks for creating clarity, resilience, and lasting financial confidence.',
    category: 'Financial Planning',
    readTime: '5 min read',
    slug: 'building-a-strong-financial-foundation',
    image: '/images/Blog1.jpg',
    badge: 'bg-[#0875ec] text-white',
  },
  {
    title: 'Investment Strategies Every Beginner Should Know',
    excerpt: 'Practical principles to help new investors make considered decisions and stay focused long term.',
    category: 'Investment',
    readTime: '6 min read',
    slug: 'investment-strategies-for-beginners',
    image: '/images/Blog2.jpg',
    badge: 'bg-[#18885b] text-white',
  },
  {
    title: 'Preparing for a Comfortable Retirement',
    excerpt: 'Key considerations for turning retirement ambitions into a practical, sustainable financial plan.',
    category: 'Retirement',
    readTime: '5 min read',
    slug: 'preparing-for-a-comfortable-retirement',
    image: '/images/Blog3.jpg',
    badge: 'bg-[#7650dc] text-white',
  },
  {
    title: 'Protecting Your Wealth Through Smart Risk Management',
    excerpt: 'A considered approach to protecting your income, assets, family, and wider financial strategy.',
    category: 'Risk Management',
    readTime: '5 min read',
    slug: 'protecting-wealth-through-risk-management',
    image: '/images/Blog4.jpg',
    badge: 'bg-[#ed7628] text-white',
  },
  {
    title: 'Managing Cash Flow for Financial Success',
    excerpt: 'Simple ways to understand where your money goes and direct more of it toward meaningful goals.',
    category: 'Financial Planning',
    readTime: '6 min read',
    slug: 'managing-cash-flow-for-financial-success',
    image: '/images/Blog5.jpg',
    badge: 'bg-[#168697] text-white',
  },
  {
    title: 'Common Financial Planning Mistakes to Avoid',
    excerpt: 'Recognise the decisions and habits that can quietly disrupt an otherwise sound financial plan.',
    category: 'Planning Tips',
    readTime: '6 min read',
    slug: 'financial-planning-mistakes-to-avoid',
    image: '/images/Blog6.jpg',
    badge: 'bg-[#345a89] text-white',
  },
  {
    title: 'How Inflation Impacts Your Investments',
    excerpt: 'Understand how rising prices affect purchasing power, portfolio returns, and long-term objectives.',
    category: 'Market Perspectives',
    readTime: '5 min read',
    slug: 'how-inflation-impacts-investments',
    image: '/images/Blog7.jpg',
    badge: 'bg-[#b77a0a] text-white',
  },
  {
    title: 'Estate Planning Made Simple',
    excerpt: 'The core documents and conversations that help protect your wishes, family, and financial legacy.',
    category: 'Estate Planning',
    readTime: '5 min read',
    slug: 'estate-planning-made-simple',
    image: '/images/Blog8.png',
    badge: 'bg-[#367b4d] text-white',
  },
  {
    title: 'Business Financial Planning Essentials',
    excerpt: 'A practical overview of cash flow, protection, growth, and succession considerations for owners.',
    category: 'Business',
    readTime: '6 min read',
    slug: 'business-financial-planning-essentials',
    image: '/images/Blog9.jpg',
    badge: 'bg-[#385bb7] text-white',
  },
]

function ArticleCard ({ article, index }) {
  return (
    <article className='group flex min-h-[31rem] flex-col overflow-hidden rounded-[1.6rem] border border-[#dce6f3] bg-white shadow-[0_14px_40px_rgba(8,48,105,0.06)] transition duration-500 hover:-translate-y-2 hover:border-[#93c5f8] hover:shadow-[0_26px_60px_rgba(8,72,155,0.14)]'>
      <div className='relative aspect-[16/9] overflow-hidden bg-[#dce6f3]'>
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes='(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(50vw - 36px), 400px'
          className='object-cover transition-transform duration-700 group-hover:scale-105'
        />
        <div className='pointer-events-none absolute inset-0 bg-linear-to-b from-black/15 via-transparent to-black/20' aria-hidden='true' />
        <span className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.13em] shadow-sm ${article.badge}`}>{article.category}</span>
        <span className='absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-white/60 bg-white/80 px-2.5 py-1.5 text-[0.68rem] font-semibold text-[#485970] shadow-sm backdrop-blur-sm'>
          <Clock3 size={12} aria-hidden='true' />
          {article.readTime}
        </span>
        <span className='absolute bottom-4 right-4 text-5xl font-bold tracking-[-0.09em] text-white/25 drop-shadow-sm' aria-hidden='true'>{String(index + 1).padStart(2, '0')}</span>
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
