import mongoose from 'mongoose';

const guestSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: Integer,
    address: String,
    email: String,
    identification: Integer,
    licensePlate: String
});

export default mongoose.model('glist', guestSchema);