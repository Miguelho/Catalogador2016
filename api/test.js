 var tableBaseEntitySet;
 var tableName= 'BaseEntitySet';

module.exports = {
    "get": function (req, res, next) {
        res.status(200).send("API Llamada");
        console.log("Resultados tabla "+ tableName);
        tableBaseEntitySet = req.service.tables.getTable('BaseEntitySet');
    }
};

