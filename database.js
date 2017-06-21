const pg = require('pg');
//const connectionString = process.env.DATABASE_URL || 'postgres://postgres:mystuff@localhost:5432/person';

const client = new pg.Client('postgres://postgres:mystuff@localhost:5432/person');
client.connect();
const query = client.query( 'INSERT INTO persons(text, complete) values($1, $2, $3)', ['Thomas', 'Burton', '1878-08-28']);
/client.connect();
query.on('end', () => { client.end(); });
