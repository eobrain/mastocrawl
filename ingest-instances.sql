INSERT INTO
    instances (hostname, fediverse_observer_date)
VALUES
    (?, datetime ()) ON CONFLICT DO
UPDATE
SET
    fediverse_observer_date = datetime ();