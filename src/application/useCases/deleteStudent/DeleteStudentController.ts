import { Request, Response } from 'express';
import { DeleteStudentUseCase } from './deleteStudentUseCase';

export class DeleteStudentController {
  constructor(
    private deleteStudent: DeleteStudentUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const id = request.query.id;

      if (!id || typeof (id) !== 'string') {
        return response.status(400).json({
          message: 'Preencha os campos requeridos.'
        });
      }

      await this.deleteStudent.execute({ id });

      return response.status(204).send();
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: 'Um erro inesperado aconteceu.'
      });
    }
  }
}
