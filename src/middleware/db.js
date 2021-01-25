import mongoose from 'mongoose';

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(process.env.DB_CONN_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
}

export function jsonify(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const dbMiddleware = async (req, res, next) => {
  try {
    if (!global.mongoose) {
      global.mongoose = dbConnect();
    }
  } catch (ex) {
    console.error(ex);
  }

  return next();
};

export default dbMiddleware;
