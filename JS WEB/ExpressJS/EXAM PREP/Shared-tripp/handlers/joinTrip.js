const Trip = require('../models/trip');

module.exports = async (req, res) => {
    const id = req.params.id;

    const trip = await Trip.findById(id).lean();
    trip.seats--;
    trip.buddies.push(res.email);

    Trip.findByIdAndUpdate(id, { $set: trip }, { upsert: true })
        .then((trip) => console.log('Joined Successfully!'))
        .catch(console.error)

    return res.redirect(`/details/${id}`);
}