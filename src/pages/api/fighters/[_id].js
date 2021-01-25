import { createHandler } from '@/middleware';
import Fighter from '@/models/fighter';

const handler = createHandler();

handler.get(async (req, res) => {
  const fighter = await Fighter.findById(req.query._id).exec();

  res.status(fighter ? 200 : 404).json(fighter);
});

export default handler;
