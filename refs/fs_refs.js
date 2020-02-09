const fs = require('fs')
const path = require('path')
//file System
// fs.mkdir(path.join(__dirname, 'notes'), error => {
//   if (error) throw error
  
//   console.log('directory has been made')
// })

// fs.writeFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   'Hello world',
//   error => {
//     if (error) throw error

//     console.log('file has been made')

//     fs.appendFile(
//       path.join(__dirname, 'notes', 'mynotes.txt'),
//       ' add from appendFile',
//       error => {
//         if (error) throw error

//         console.log('append was made')

//         fs.readFile(
//           path.join(__dirname, 'notes', 'mynotes.txt'),
//           'utf-8',
//           (error, data) => {
//             if (error) throw error
        
//             console.log(data)
//           }
//         )
//       }
//     )
//   }
// )

fs.rename(
  path.join(__dirname, 'notes/mynotes.txt'),
  path.join(__dirname, 'notes/mynotes-renamed.txt'),
  error => {
    if (error) throw error
    console.log('file renamed') 
  }
)

