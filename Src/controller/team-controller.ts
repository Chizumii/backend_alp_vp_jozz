import { Request, Response, NextFunction } from "express";
import { TeamService } from "../service/team-service";

export class TeamController {
  // Create a new team
  static async create(req: Request, res: Response, next: NextFunction) {
      try {
          const teamData = req.body;
          const request = {
              ...teamData,
              image: req.file,
          }
          const newTeam = await TeamService.createTeam(request);

          res.status(201).json({
              message: "Team created successfully",
              data: newTeam,
          });
      } catch (error) {
          next(error);
      }
  }