const express = require('express');
const Ajv = require('ajv');
const sqlite = require('better-sqlite3');
const { query } = require('express');

const sleep = (ms) => new Promise((res) => { setTimeout(res, ms) })

// set up express
const app = express();
app.use(express.json());
app.use(express.static('public'));

// ajv request validator
const ajv = new Ajv();
const schema = {
    type: 'object',
    properties: {
        query: { type: 'string' },
    },
    required: ['query'],
    additionalProperties: false
};
const validate = ajv.compile(schema);

// database
const db = sqlite('db.sqlite3');

// search route
app.search('/search', async (req, res) => {
    if (!validate(req.body)) {
        return res.json({
            success: false,
            msg: 'Invalid search query',
            results: [],
        });
    }
    
    const query = `SELECT * FROM veggies WHERE name LIKE '%${req.body.query}%';`;

    await sleep(5000);
    const results = db.prepare(query).all();

    return res.json({
        success: true,
        msg: `${results.length} result(s)`,
        results,
    });
});

app.listen(3000, () => {
    console.log('Server started');
});