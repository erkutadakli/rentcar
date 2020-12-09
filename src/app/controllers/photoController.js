const Model = require('../models/photoModel');
const messages = require('../middleware/messages');
const fs = require('fs');
const path = require('path');
exports.add = (req, res, next) => {
    const operation = new Model({
        key: req.body.key,
        path: req.file.filename,
        title: req.file.title,
        order: req.file.order,
        size: req.file.size,
        mimetype: req.mimetype
    });
    operation.save()
        .then(resp => {
            messages.success(res, 200, resp)
        })
        .catch(err => {
            messages.success(res, 500, err)
        })
}

exports.getList = (req, res, next) => {
    Model.find({})
        .then(resp => {
            messages.success(res, 200, resp)
        })
        .catch(err => {
            messages.success(res, 500, err)
        })
}

exports.getById = (req, res, next) => {
    Model.find({ _id: req.params.id })
        .then(resp => {
            messages.success(res, 200, resp)
        })
        .catch(err => {
            messages.success(res, 500, err)
        })
}

exports.update = (req, res, next) => {
    Model.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { "new": true, "upsert": true },
        (err, raw) => {
            if (err) messages.success(res, 500, err);
            messages.success(res, 200, raw)
        })
}

exports.remove = (req, res, next) => {

    Model.findById({ _id: req.params.id })
    .then(img => {
        const fileName = img.path;
        const filePath = path.join(__dirname,".",'../../assets/uploads/cars/'+fileName);
        fs.unlink(filePath, (err) => {
            if (err) {
                
                messages.error(res, 500, err)
            }
            Model.remove({ _id: req.params.id }, (err) => {
                if (err) messages.error(res, 500, err);
                messages.success(res, 200, null);
            })
          })
    })
    .catch(err => {
        messages.error(res, 500, err);
    })
}