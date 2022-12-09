import { Request, Response } from 'express';
import { CreateStudentUseCase } from './createStudentUseCase';

export class CreateStudentController {
  constructor(
    private createStudent: CreateStudentUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, address, phoneNumber, avatarUrl } = request.body;

      if (!name) {
        return response.status(400).json({
          message: 'Preencha os campos requeridos.'
        });
      }

      const student = await this.createStudent.execute({ name, address, phoneNumber, avatarUrl });

      return response.status(200).json(student);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: 'Um erro inesperado aconteceu.'
      });
    }
  }
}
