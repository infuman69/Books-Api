const dotenv = require('dotenv');
const app = require('./app');
const dbConnect = require('./db/connect')

dotenv.config({path:'./config.env'})

const port = process.env.PORT || 3000;

const dbstr = process.env.DATABASE.replace('<password>',process.env.PASSWORD)

const start = async () => {
    try{
        const db = await dbConnect(dbstr)
        if(db.connection.readyState === 1)
            console.log('database connected')
        app.listen(port,() => {
            console.log(`Server is listening port ${port}`)
        })
    }catch(err){
        console.log(err)
    }
}

start()