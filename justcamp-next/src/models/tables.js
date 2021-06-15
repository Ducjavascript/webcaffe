import mongoose from 'mongoose'

const TablesScheme = new mongoose.Schema({
    id:{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    isBook: Boolean,
    number: Number,
    appointment_schedule:{ 
        info_user: {
         sdt: String,
        name: String
    },
    startTime: String,
    endTime: String
}
},{
    timestamps: true
})

let Dataset = mongoose.models.tables || mongoose.model('tables', TablesScheme)

export default Dataset