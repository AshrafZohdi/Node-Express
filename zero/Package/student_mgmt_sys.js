var students = [
    {
        'id': 1234,
        'firstName': 'Obama',
        'lastName': 'swag',
        'email': 'luisfonte@bruh.com',
        'class': 'B001',
    },
    {
        'id': 34,
        'firstName': 'john',
        'lastName': 'bongg',
        'email': 'hongkong@bruh.com',
        'class': 'MB01',
    }
]

const express = require('express')
const app = express()
const port = 3000

app.get('/students', (req, res) => {
  res.send(students)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/students', (req, res) => {
    students.push(req.body)
}
)
