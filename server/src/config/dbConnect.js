const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://rudra:qSAyzUo4szZV4NE3@expense-tracker.6exhbw7.mongodb.net/?retryWrites=true&w=majority&appName=expense-tracker',{
            // useCreateIndex: true,
            // useFindAndModify: false,
            // useUnifiedTopology: true,
            // useNewUrlPrser: true,
        });
        console.log(`DB connected guyss`)
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

// usrname : rudra  pswd: qSAyzUo4szZV4NE3

// mongodb+srv://rudra:qSAyzUo4szZV4NE3@expense-tracker.6exhbw7.mongodb.net/?retryWrites=true&w=majority&appName=expense-tracker // ***-->db -url //
module.exports= dbConnect;