const { request } = require('express')
const knex = require('../database/knex')

class MovieTagsController {
  async index(request, response) {
    const { user_id } = request.params

    const movieTags = await knex('tags').where({ user_id })

    return response.json(movieTags)
  }
}

module.exports = MovieTagsController
