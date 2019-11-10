
CREATE TABLE houses (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR (255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(50) NOT NULL,
    "ST" VARCHAR(2) NOT NULL,
    zip NUMERIC NOT NULL,
    price FLOAT NOT NULL,
    image TEXT NOT NULL
);


-- DUMMY DATA --
INSERT INTO houses (name,  address, city, state, zip, price, image)
VALUES ('house1', 'address1', 'city1', 'UT', 11111, 11111111, 'https://imagez.tmz.com/image/e7/4by3/2019/10/09/e79c6d9690ed403ebca905cc2923ee04_md.jpg'),
('house2', 'address2', 'city2', 'UT', 22222, 22222222, 'https://imagez.tmz.com/image/e7/4by3/2019/10/09/e79c6d9690ed403ebca905cc2923ee04_md.jpg'),
('house3', 'address3', 'city3', 'UT', 33333, 33333333, 'https://imagez.tmz.com/image/e7/4by3/2019/10/09/e79c6d9690ed403ebca905cc2923ee04_md.jpg');


-- INSERT INTO houses (name,  address, city, state, zip, price, image)
-- VALUES ('house1', 'address1', 'city1', 'UT', 11111, 11111111, 'https://imagez.tmz.com/image/e7/4by3/2019/10/09/e79c6d9690ed403ebca905cc2923ee04_md.jpg'),
-- ('house2', 'address2', 'city2', 'UT', 22222, 22222222, 'https://imagez.tmz.com/image/e7/4by3/2019/10/09/e79c6d9690ed403ebca905cc2923ee04_md.jpg'),
-- ('house3', 'address3', 'city3', 'UT', 33333, 33333333, 'https://imagez.tmz.com/image/e7/4by3/2019/10/09/e79c6d9690ed403ebca905cc2923ee04_md.jpg')

-- SELECT * FROM houses
-- DELETE FROM houses
-- WHERE id IN (35, 36, 37)


ALTER TABLE houses ADD COLUMN
mortgage NUMERIC;


ALTER TABLE houses ADD COLUMN
rent NUMERIC;

