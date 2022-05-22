const mongoose = require('mongoose')

const dbConnect = async (url) => {
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}
module.exports = dbConnect
