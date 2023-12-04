


//const notes = require('./notes.js')
import {addNote, removeNote, listNotes, readNote} from './notes.js'

// const yargs = require('yargs/yargs')
// const { hideBin } = require('yargs/helpers');
// const { string } = require('yargs');

import yargs from 'yargs/yargs'
import {hideBin} from "yargs/helpers"
import string from "yargs"

const y = yargs(hideBin(process.argv));
import chalk from 'chalk'

// Create listNotes command

y.command({
    command: "list",
    describe: "List all notes",
    handler() {
            listNotes()
    }
    
})

// Create add command

y.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Body description",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        addNote(argv.title, argv.body)
        console.log("title: " + argv.title)
        console.log("body: " + argv.body)
    }
})


//Create remove command

y.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        removeNote(argv.title)
    }
})

//Create read command

y.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"

        }},
    handler(argv) {
        readNote(argv.title)
    }
})


//y.version("2.0.0");
y.parse();
 
//console.log(yargs(hideBin(process.argv)).argv);




