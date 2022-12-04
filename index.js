import { db, thrower } from './db.js'
import { sql } from './cached.js'
// import { pp } from 'passprint'

const tableExists = table => new Promise((resolve, reject) => {
  db.get(sql('tableexists'), 'instances', (err, row) => {
    if (err) {
      reject(err)
      return
    }
    resolve(row['COUNT(*) > 0'])
  })
})

db.serialize(async () => {
  if (await tableExists('instances')) {
    console.log('instances table already exists')
  } else {
    console.log('instances table does not exists, creating...')

    db.run(sql('schema'), [], thrower)
  }
  db.close(thrower)
})
