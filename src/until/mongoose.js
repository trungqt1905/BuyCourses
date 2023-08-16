module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    mongooseTObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
