import mongoose from 'mongoose' 

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, 
        })

        console.log(`MongoDB connecter :${connect.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(error)
    }
}

export default connectDB