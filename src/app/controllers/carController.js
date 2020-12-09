const CarModel = require('../models/carModel');
const messages = require('../middleware/messages');
exports.add = (req, res, next) => {
    const car = new CarModel(req.body);
    car.save()
        .then(resp => {
            messages.success(res, 200, resp)
        })
        .catch(err => {
            messages.success(res, 500, err)
        })
}

exports.getList = (req, res, next) => {
    CarModel.find({})
        .then(resp => {
            messages.success(res, 200, resp)
        })
        .catch(err => {
            messages.success(res, 500, err)
        })
}

exports.getById = (req, res, next) => {
    CarModel.find({ _id: req.params.id })
        .then(resp => {
            messages.success(res, 200, resp)
        })
        .catch(err => {
            messages.success(res, 500, err)
        })
}

exports.update = (req, res, next) => {
    CarModel.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { "new": true, "upsert": true },
        (err, raw) => {
            if (err) messages.success(res, 500, err);
            messages.success(res, 200, raw)
        })
}

exports.remove = (req, res, next) => {
    CarModel.remove({ _id: req.params.id }, (err) => {
        if (err) messages.success(res, 500, err);
        messages.success(res, 200, null);

    })
}