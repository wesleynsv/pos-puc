exports.post = (req, res, next) => {
    res.status(201).send('Acessando a rota POST!');
};

exports.put = (req, res, next) => {
    console.log(req.body)
    let id = req.body.id;
    res.status(201).send(`route PUT with ID! --> ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`route DELETE with ID! --> ${id}`);
};

exports.get = (req, res, next) => {
    res.status(200).send('ESTA É UMA ROTA GET!');
};

exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`route GET with ID! ${id}`);
};
