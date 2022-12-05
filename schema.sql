CREATE TABLE IF NOT EXISTS
    instances (
        hostname VARCHAR PRIMARY KEY ASC NOT NULL,
        fediverse_observer_date VARCHAR NOT NULL
    );

CREATE TABLE IF NOT EXISTS
    hashtags_instances (
        hostname VARCHAR NOT NULL,
        hashtag VARCHAR NOT NULL,
        activity INTEGER
    )