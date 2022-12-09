require ('./db/connection');
const yargs = require('yargs');
const mongoose = require('mongoose'); //node --trace-deprecation ...
const {createMovie, readMovies , updateActor, deleteTitle, updateDirector} = require('./movies/function');
const MovieCollection = require('./movies/model');


async function app(yargsinput) {
    if (yargsinput.create) {
        // put code here for create
        console.table();
        await createMovie(
            {title: yargsinput.title,
                actor: yargsinput.actor, 
                director: yargsinput.director,
                rating: yargsinput.rating});
    
    } else if (yargsinput.read) {
        // code for list all movies
        console.table('Reading database');
        await readMovies();
    
    } else if (yargsinput.updateActor) {
        //code here for updating actor
        console.table('Updating actor');
        await updateActor(yargsinput.title , yargsinput.actor)
        
    } else if (yargsinput.updateDirector) {
        //code here for updating actor
        console.table('Updating director');
        await updateDirector(yargsinput.title , yargsinput.director)
        
    } else if (yargsinput.updateRating) {
        //code here for updating actor
        console.table('Updating rating');
        await updateActor(yargsinput.title , yargsinput.rating)
        
    } else if (yargsinput.delete) {
        //code for deleting a movie
        console.log('deleting movie')
        await deleteTitle (yargsinput.title )
    } else {
        console.log("Unrecognised option")
    }
    await mongoose.disconnect(); //node --trace-deprecation ...
}

app(yargs.argv);