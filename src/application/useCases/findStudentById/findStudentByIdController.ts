import { Request, Response } from 'express';
import { FindStudentByIdUseCase } from './findStudentByIdUseCase';

export class FindStudentByIsController {
  constructor(
    private findStudentById: FindStudentByIdUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const id = request.query.id;

      if ((!id || typeof (id) !== 'string')) {
        return response.status(400).json({
          message: 'Preencha os campos requeridos.'
        });
      }

      const student = await this.findStudentById.execute(id);

      return response.status(200).json(student);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: 'Um erro inesperado aconteceu.'
      });
    }
  }
}
