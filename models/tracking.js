const mongoose = require('mongoose');

const trackingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  maccNo: { type: Number, required: true },
  blNo: { type: Number, required: true },
  selectivelyNo: { type: Number, required: true},
  noOfPackages: { type: Number, required: true},
  place: { type: String, required: true},
  itemStatus: { type: Number, required: true},
  status: { type: String, enum: ['active', 'deleted'], default: 'active' },
  created_by: { type: String, required: true},
  created_date: { type: Date, default: Date.now},
  updated_by: { type: String},
  updated_date: { type: Date}
});

// Middleware to update `updated_date` and `updated_by` fields on update
trackingSchema.pre('save', function (next) {
  if (this.isNew) {
    this.created_date = Date.now();
  }
  this.updated_date = Date.now();
  next();
});

trackingSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updated_date: Date.now() });
  next();
});

trackingSchema.pre('updateMany', function (next) {
  this.set({ updated_date: Date.now() });
  next();
});

module.exports = mongoose.model('Tracking', trackingSchema);
