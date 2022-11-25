import { NextApiRequest, NextApiResponse } from 'next'
import { services } from '../../data/skills'
export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log('API', services)
  res.status(200).json({ services })
}
