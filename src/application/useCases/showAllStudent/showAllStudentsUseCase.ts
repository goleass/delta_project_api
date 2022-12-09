import { StudentRepository } from '../../repositories/StudentsRepository';

export class ShowAllStudentsUseCase {
  constructor(
    private studentRepository: StudentRepository
  ) { }

  async execute() {
    const students = await this.studentRepository.findAll();

    return students ?? [];
  }
}
