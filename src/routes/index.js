const { Router } = require('express')

const usersRouter = require('./movieUsers.routes')
const movieNotesRouter = require('./movieNotes.routes')
const movieTagRouter = require('./movieTags.routes')

const routes = Router()
routes.use('/movieUsers', usersRouter)
routes.use('/movieNotes', movieNotesRouter)
routes.use('/movieTags', movieTagRouter)

module.exports = routes
