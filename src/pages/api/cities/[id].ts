import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../db.json';

interface Data {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  text: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = Number(req.query.id);

  if (req.method === 'GET' && id) {
    const data = db.data as Data[];

    const item = data.find(i => i.id === id);
    if (item) {
      return res.status(200).json(item);
    } else {
      return res.status(404).end('Not found');
    }
  } else {
    return res.status(405).end('Method not allowed');
  }
};
