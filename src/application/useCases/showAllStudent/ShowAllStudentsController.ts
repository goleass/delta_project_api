import { Request, Response } from 'express';
import { ShowAllStudentsUseCase } from './showAllStudentsUseCase';

export class ShowAllStudentsController {
  constructor(
    private showAllStudents: ShowAllStudentsUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const students = await this.showAllStudents.execute();

      return response.status(200).json(students);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: 'Um erro inesperado aconteceu.'
      });
    }
  }
}
