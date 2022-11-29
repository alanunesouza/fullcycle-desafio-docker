const express = require('express');
const { runQuery } = require('./repository');
const app = express();

app.get('/', async (_, res) => {
  const selectSql = `SELECT * FROM people`;
  const people = await runQuery(selectSql);

  const title = '<h1>Full Cycle Rocks!</h1>';
  const list = `
    <ul>
      ${people.map(p => `<li>${p.name}</li>`).join('')}
    </ul>
  `;

  res.send(title + list);
});

app.listen(3000, () => {
  console.log('Running on port 3000');

  const createTableSql = `
    CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50), PRIMARY KEY (id));
  `;
  runQuery(createTableSql);

  const insertSql = `
    INSERT INTO people (name) values ('Alan'), ('João'), ('Maria'), ('Renato'), ('Stephanie'), ('Gilberto');
  `;
  runQuery(insertSql);
});