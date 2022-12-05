import sqlite3 from 'sqlite3'

sqlite3.verbose()
const MODE = sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE | sqlite3.OPEN_FULLMUTEX

export const thrower = err => { if (err) throw (err) }

export const db = new sqlite3.Database('allmasto.sqlite', MODE, thrower)

db.on('trace', sql => console.log(sql))
