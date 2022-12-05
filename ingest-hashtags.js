// import PQueue from 'p-queue'
// import smoothish from 'smoothish'
import { db, thrower } from './db.js'
import { sql } from './cached.js'

// db.serialize(async () => {
db.each(sql('instances'), (err, { hostname }) => {
  thrower(err)
  hostname = hostname.trim()
  console.log(hostname)
}, (err, n) => {
  thrower(err)
  console.log(`Read ${n} instances.`)
  db.close(thrower)
})
// })
