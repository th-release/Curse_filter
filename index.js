const knex = require('knex')

const db = knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'cth'
  }
})

async function filter(str) {
  let result = str
  const words = await db.select('*').from('filters')
  for(let word of words) {
    if (word.word === str) {
      result = word.result
    }
  }
  return result
}