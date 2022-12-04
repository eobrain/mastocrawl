import { WritableStream } from 'htmlparser2/lib/WritableStream'
import * as fs from 'node:fs'
import { db, thrower } from './db.js'
import { sql } from './cached.js'

if (process.argv.length !== 3) {
  throw new Error(
    `Got ${process.argv.length} arguments, expected 3. ${process.argv}`
  )
}

let textIsInstanceName = false
const parserStream = new WritableStream({
  onopentag (tagname, attributes) {
    textIsInstanceName = tagname === 'a' && attributes.class === 'url'
  },
  ontext (text) {
    if (!textIsInstanceName) {
      return
    }
    text = text.trim()
    if (!text || text === '') {
      return
    }
    db.run(sql('ingest-instances'), text, thrower)
  },
  onclosetag (tagname) {}
})

db.serialize(() => {
  const htmlStream = fs.createReadStream(process.argv[2])
  htmlStream.pipe(parserStream).on('finish', () => db.close(thrower))
})
