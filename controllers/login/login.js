import mongoose from 'mongoose';
import Player from '../../models/player.js';


export const login = async (req, res) => {

const userName= "gustav"
const password ="gedenGeden"

Player.findOne({ name: userName, password:password}, async (err, doc) => { 
    if (err) res.send(err);
    if (doc) {
        console.log("lyckades logga in");
    }
});



}