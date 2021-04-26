import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../db.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return res.status(200).json(db.data);
  }

  return res.status(405);
};
