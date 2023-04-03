const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://om-amonkar:FvanFJizZA7hz0lw@newtest.2zxjlpl.mongodb.net/test")
        console.log(`Mongo DB Connected : ${conn.connection.host}`)
    } catch (e) { 
        console.log(e.message)
        process.exit(1)
    }
}

module.exports = connectDB