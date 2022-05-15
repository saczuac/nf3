import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    results: [
      {
        id: 1,
        title: 'CryptoPunk #11123',
        link: 'https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/9462'
      },
      {
        id: 1,
        title: 'CryptoPunk #11123',
        link: 'https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/9462'
      }
      , {
        id: 1,
        title: 'CryptoPunk #11123',
        link: 'https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/9462'
      },
      {
        id: 1,
        title: 'CryptoPunk #11123',
        link: 'https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/9462'
      }
    ]
  })
}
