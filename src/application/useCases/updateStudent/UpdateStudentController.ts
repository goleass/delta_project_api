import { Request, Response } from 'express';
import { UpdateStudentUseCase } from './updateStudentUseCase';

export class UpdateStudentController {
  constructor(
    private updateStudent: UpdateStudentUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const id = request.query.id;
      const { name, address, phoneNumber, avatarUrl } = request.body;

      if ((name === null || name === '') ||(!id || typeof (id) !== 'string')) {
        return response.status(400).json({
          message: 'Preencha os campos requeridos.'
        });
      }

      await this.updateStudent.execute({
        name,
        address,
        phoneNumber,
        avatarUrl
      }, id);

      return response.status(204).send();
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: 'Um erro inesperado aconteceu.'
      });
    }
  }
}
