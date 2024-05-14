const express = require('express');
const router = express.Router();
const Tracking = require('../models/tracking');

// Create a new tracking
router.post('/', async (req, res) => {
  try {
    
    const { name, maccNo, blNo, selectivelyNo, noOfPackages, place, itemStatus, type, status, created_by, created_date, updated_date } = req.body;
    const newTracking = new Tracking({ 
      name, 
      maccNo,
      blNo,
      selectivelyNo, 
      noOfPackages, 
      place, 
      itemStatus,
      type, 
      status, 
      created_by, 
      created_date, 
      updated_by : created_by, // Initial creator is also the initial updater
      updated_date 
    });
    const savedTracking = await newTracking.save();
    res.status(201).send(savedTracking);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all trackings
router.get('/', async (req, res) => {
  try {
    const trackings = await Tracking.find({ status: 'active'});
    res.status(200).send(trackings);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a single tracking by ID
router.get('/:id', async (req, res) => {
  try {
    const tracking = await Tracking.findById(req.params.id);
    if (!tracking) return res.status(404).send();
    res.status(200).send(tracking);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update an tracking by ID
router.put('/:id', async (req, res) => {
  try {
    const { name, maccNo, blNo, selectivelyNo, noOfPackages, place, itemStatus, type, status, updated_by } = req.body;
    const updatedTracking = await Tracking.findByIdAndUpdate(
      req.params.id, 
      { name, maccNo, blNo, selectivelyNo, noOfPackages, place, itemStatus, type, status, updated_by },
      { new: true, runValidators: true }
    );
    if (!updatedTracking) return res.status(404).send();
    res.status(200).send(updatedTracking);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete an tracking by ID
router.delete('/:id', async (req, res) => {
  try {
    const { updated_by } = req.body;
    const deletedTracking = await Tracking.findByIdAndDelete(
      req.params.id,       
      { status: 'deleted', updated_by },
      { new: true}
    );
    if (!deletedTracking) return res.status(404).send();
    res.status(200).send(deletedTracking);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
