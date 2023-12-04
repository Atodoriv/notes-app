


import fs from 'fs'
import chalk from 'chalk'

const getNotes = () => {
    return "Your Notes..."
}


export const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Listing out all notes'))
    console.log()
    
    notes.forEach((note) => {
        console.log(chalk.bgGreen(note.title))
       // console.log(note.body)
        console.log()
    })
}


// Create read note function

export const readNote = (title) => {
    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title)

    if(!findNote) {
        console.log(chalk.red('Error. No such note'))
    } else {

        console.log(chalk.blue(findNote.title))
        console.log(findNote.body)
    }
}

// Create add notes function

export const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

debugger

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    saveNotes(notes)
    console.log(chalk.green.inverse("New note added!"))
    } else {
        console.log(chalk.red.inverse("Note title taken!"))
    }
    
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch(e) {

        return[]
    }


}

export const removeNote = (title) => {

    const notes = loadNotes()

    const existingNotes = notes.filter((note) => note.title != title)

 
    if (notes.length != existingNotes.length) {
    saveNotes(existingNotes)
  
    console.log(chalk.bgGreen("Removed a note with title: "+ title))
    } else {
        console.log(chalk.bgRed("Such note doesn't exist"))
    }

}


