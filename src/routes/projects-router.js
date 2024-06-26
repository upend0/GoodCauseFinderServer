/**
 * Projects routes.
 *
 * @author Maria Fredriksson
 * @version 1.0.0
 */

import express from 'express'
import { ProjectsController } from '../controllers/projects-controller.js'

// Creates an instance of the express router. The router is used to define the routes in the application
export const router = express.Router()

const controller = new ProjectsController()

// Defines a route that will handle GET responses
// / is the first argument passed to get(), and it's the root path
// (req, res, next) is the second argument passed to get(), and it's a callback function that will execute when a GET request is made to the root
// The last part of the callback function calls on the index method of the controller and sends 3 arguments. The controller will then handle all the logic of the home site
router.get('/', (req, res, next) => controller.index(req, res, next))

router.get('/:id', (req, res, next) => controller.getOneProject(req, res, next))
