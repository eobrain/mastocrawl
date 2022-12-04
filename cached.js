import fs from 'fs'

const cache = {}
export const sql = (sqlName) =>
  sqlName in cache ? cache[sqlName] : fs.readFileSync(sqlName + '.sql', 'utf8')
