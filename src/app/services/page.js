import React from 'react'
import PlanningProcess from '@/components/services/PlanningProcess'
import Questions from '@/components/services/Questions'
import ServiceHero from '@/components/services/ServiceHero'
import TrustUs from '@/components/services/TrustUs'
import WhatWeOffer from '@/components/services/WhatWeOffer'

export default function page () {
  return (
    <div>
        <ServiceHero/>
        <WhatWeOffer/>
        <PlanningProcess/>
        <TrustUs/>
        <Questions/>
    </div>
  )
}
