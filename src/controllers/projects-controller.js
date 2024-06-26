/**
 * Projects controller.
 *
 * @author Maria Fredriksson
 * @version 1.0.0
 */

import { Project } from '../models/project.js'

/**
 * Encapsulates a controller.
 */
export class ProjectsController {
  /**
   * Gets all projects.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async index (req, res, next) {
    try {
      // Get the projects from the database and turn them into plain javascript objects, and store them in the data object
      const data = {
        projects: (await Project.find()).map(project => project.toObject())
      }

      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Gets one project.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async getOneProject (req, res, next) {
    try {
      // Get the id from the request
      const projectID = req.params.id

      // Find the project with the id
      const project = await Project.findOne({ id: projectID })

      // If the project is not found, send a 404 response
      if (!project) {
        res.status(404).json({ error: `Project with id ${projectID} not found.` })
      } else {
        // If the project is found, send the project
        res.status(200).json(project)
      }
    } catch (error) {
      next(error)
    }
  }
}
