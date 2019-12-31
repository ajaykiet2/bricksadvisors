const builderModel = require('../models/builder.model');
const HttpError = require('../errors/HttpError')

class BuilderController {

    constructor(model) {
        this.model = model
    }

    getAll(req, res, next) {
        const builders = this.model.find();
        if (!builders) {
            return next(new HttpError("No builder found!", 404));
        }

        res.json({
            status: true,
            message: "Successfully loaded.",
            builders
        });
    }

    get(req, res, next) {
        const seoUrl = req.params.seoUrl;

        const builder = this.model.find({seoUrl});

        if(!builder) {
            return next(new HttpError("Builder not found for this id"))
        }

        res.json({
            status: true,
            message: "Successfully loaded.",
            builder
        });
    }

    add(req, res, next) {
        const { title, description } = req.body;

        const builder = 
    }
}

module.exports = new BuilderController(builderModel);