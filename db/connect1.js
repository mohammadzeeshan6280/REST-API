const mongoose = require("mongoose")

// const uri = "mongodb+srv://zeeshanansari347:RM8MPEKiG97v6fit@ansariapi.tgiyqwu.mongodb.net/whitehat?retryWrites=true&w=majority&appName=AnsariAPI";

const connectDB = (uri) => {
    console.log("connect db")
    return mongoose.connect(uri)
}

module.exports = connectDB;





// const mongoose = require("mongoose")

// const uri = "mongodb+srv://zeeshanansari347:RM8MPEKiG97v6fit@ansariapi.tgiyqwu.mongodb.net/whitehat?retryWrites=true&w=majority&appName=AnsariAPI";

// const connDB = () => {
//     console.log("connect db")
//     return mongoose.connect(uri)
// }

// module.exports = connDB;

// mongodb+srv://zeeshanansari347:<password>@ansariapi.tgiyqwu.mongodb.net/?retryWrites=true&w=majority&appName=AnsariAPI

// mongodb+srv://zeeshanansari347:RM8MPEKiG97v6fit@ansariapi.tgiyqwu.mongodb.net/databaseName?retryWrites=true&w=majority&appName=AnsariAPI

// RM8MPEKiG97v6fit