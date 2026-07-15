import AboutHero from '@/components/about/AboutHero'
import AboutCTA from '@/components/about/AboutCTA'
import OurCommitment from '@/components/about/OurCommitment'
import OurImpact from '@/components/about/OurImpact'
import OurStory from '@/components/about/OurStory'
import OurTeam from '@/components/about/OurTeam'
import OurValues from '@/components/about/OurValues'
import React from 'react'

export default function page () {
  return (
    <div>
        <AboutHero/>
        <OurStory/>
        <OurValues/>
        <OurImpact/>
        <OurTeam/>
        <OurCommitment/>
        <AboutCTA/>
    </div>
  )
}
