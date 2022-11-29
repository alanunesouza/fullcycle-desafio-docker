const mysql = require('mysql')

async function runQuery(sql) {
  const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
  })

  const queryPromise = new Promise((resolve, reject) => {
    connection.query(sql, function (error, results) {
      if (error) reject(error);

      resolve(results)
    })
  })

  const queryResults = await queryPromise;

  connection.end();
  return queryResults;
}

module.exports = { runQuery }
