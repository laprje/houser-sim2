module.exports = {
    getAllHouses: (req, res) => {
        const db = req.app.get('db');
        const { name, address, city, state, zip, price, image } = req.body;

        db.get_all_houses([name, address, city, state, zip, price, image])
            .then(houses => {
                res.status(200).send(houses)
            })
            .catch(err => {
                res.status(500).send("Something went wrong.")
                console.log(err)
            })
    },

    createHouse: (req, res) => {
        const db = req.app.get('db');
        const { name, address, city, state, zip, price, image } = req.body;

        db.create_house([name, address, city, state, zip, price, image])
            .then(() => {
                res.sendStatus(200)
            })
            .catch(err => {
                res.status(500).send("Something went wrong.")
                console.log(err)
            })
    }
}