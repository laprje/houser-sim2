module.exports = {
    getAllHouses: (req, res) => {
        const db = req.app.get('db');
        const { name, address, city, ST, zip, image, price, mortgage, rent } = req.body;

        db.get_all_houses([name, address, city, ST, zip, image, price, mortgage, rent ])
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
        const { name, address, city, ST, zip, image, price, mortgage, rent } = req.body;

        db.create_house([name, address, city, ST, zip, image, price, mortgage, rent ])
            .then(() => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.status(500).send("Something went wrong.")
                console.log(err);
            })
    },

    deleteHouse: (req, res) => {
        const db = req.app.get('db');
        // console.log(req.params)
        const { id } = req.params;

        db.delete_house(id) 
            .then(() => {
                res.sendStatus(200)
            })
            .catch(err => {
                res.status(500).send("Something went wrong.")
                console.log(err);
            })
    }
}