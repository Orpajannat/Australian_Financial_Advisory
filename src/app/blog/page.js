import BlogHero from '@/components/blog/BlogHero'
import Decision from '@/components/blog/Decision'
import LatestArticle from '@/components/blog/LatestArticle'
import React from 'react'

export default function page () {
  return (
    <div>
      <BlogHero/>
      <LatestArticle/>
      <Decision/>
    </div>
  )
}
