const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 6000 },
        videoId: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);
// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});
// Course.plugin(mongooseDelete);

module.exports = mongoose.model('Course', Course);


