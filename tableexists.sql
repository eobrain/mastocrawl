SELECT
    COUNT(*) > 0
FROM
    sqlite_schema
WHERE
    type = 'table'
    AND name = ?;