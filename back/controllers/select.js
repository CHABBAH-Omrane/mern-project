const selectPartners = require('../models/selectSchema.js')




exports.selectPartners = (req, res) => {
    const { _id, date, him, her, select, desc } = req.body
    const newSelect = new selectPartners({ _id, date, him, her, select, desc })
    newSelect.save()
        .then((selectPartners) => res.send(selectPartners))
        .catch((err) => res.status(404).send({ msg: `we cannot add newSelect${err}` }))
}

