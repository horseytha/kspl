const { Client } = require('pg');
const connectionString = "postgresql://postgres:12345@127.0.0.1:5432/evershop";

const client = new Client({
    connectionString,
});

async function test() {
    try {
        console.log('Attempting to connect to database...');
        await client.connect();
        console.log('SUCCESS: Connected to database successfully!');
        const res = await client.query('SELECT NOW()');
        console.log('Query result:', res.rows[0]);
        await client.end();
    } catch (err) {
        console.error('FAILURE: Could not connect to database.');
        console.error('Error detail:', err.message);
        if (err.stack) console.error(err.stack);
        process.exit(1);
    }
}

test();
