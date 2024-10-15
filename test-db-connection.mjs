import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

async function main() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Conexión exitosa a MongoDB');
    const db = client.db();
    const collections = await db.listCollections().toArray();
    console.log('Colecciones en la base de datos:');
    collections.forEach(collection => {
      console.log(collection.name);
    });
  } catch (e) {
    console.error('Error de conexión a MongoDB:', e);
  } finally {
    await client.close();
  }
}

main();