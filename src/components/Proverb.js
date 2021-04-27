import React from 'react'
import proverbs from '../data/proverbs'

const Proverb = () => {
  const numberOfProverbs = proverbs.reduce(
    (max, proverb) => (proverb.id > max ? proverb.id : max),
    proverbs[0].id
  )
  const randomQuoteId = Math.floor(Math.random() * numberOfProverbs)

  return (
    <div className='proverb'>
      {proverbs[randomQuoteId].english
        ? proverbs[randomQuoteId].original +
          ' (' +
          proverbs[randomQuoteId].english +
          ')'
        : proverbs[randomQuoteId].original}
    </div>
  )
}

export default Proverb
