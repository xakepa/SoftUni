const Play = require('../models/play');

module.exports = async (req, res) => {
    const id = req.params.id;
    const play = await Play.findById(id).lean();

    play.usersLiked.push(res.user);

    Play.findByIdAndUpdate(id, { $set: play }, { upsert: true })
        .then((play) => res.redirect(302, `/`))
        .catch(console.error)
}