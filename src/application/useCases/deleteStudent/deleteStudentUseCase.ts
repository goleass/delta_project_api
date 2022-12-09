import { StudentRepository } from '../../repositories/StudentsRepository';

export type DeleteStudentRequest = {
  id: string;
}

export class DeleteStudentUseCase {
  constructor(
    private studentRepository: StudentRepository
  ) { }

  async execute({ id }: DeleteStudentRequest) {
    await this.studentRepository.delete(id);
  }
}
