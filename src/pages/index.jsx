import { dbConnect, jsonify } from '@/middleware/db';
import Fighter from '@/models/fighter';

export async function getServerSideProps(context) {
  await dbConnect();
  const fighters = await Fighter.find({}).exec();

  return {
    props: {
      fighters: jsonify(fighters),
    },
  };
}

export default function Home({ fighters }) {
  return (
    <div>
      <h1>Some fighters from the MongoDB</h1>
      {fighters.map((fighter) => {
        return (
          <li>
            {fighter.lastName}, {fighter.firstName}
          </li>
        );
      })}
    </div>
  );
}
