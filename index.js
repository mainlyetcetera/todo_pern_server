const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const pool = require('./db.js')

// middleware
app.use(cors())
app.use(express.json()) // => allows us access req.body

// routes

// get all Todos
app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo')
    // SELECT naturally returns data, which is why we don't need RETURNING

    res.json(allTodos.rows)
  } catch (err) {
    console.error(err.message)
  }
})

// get a todo
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params 
    const currTodo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id])

    res.json(currTodo.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

// create a todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body
    const newTodo = await pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [description])

    res.json(newTodo.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

// update a todo

app.put('/todos/:id', async (req, res) => {
  try {
    // need req.body and req.params
    const { id } = req.params
    const { description } = req.body
    const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [
      description,
      id
    ])

    res.json('Todo was updated')
  } catch (err) {
    console.error(err.message)
  }
})

// delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleteTodo = pool.query('DELETE FROM todo WHERE todo_id = $1', [id]) 

    res.json('Todo was successfully deleted')
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(port, () => {
  console.log(`Server is starting on port ${port}`)
})
