import { StudentRepository } from '../../repositories/StudentsRepository';

export class FindStudentByIdUseCase {
  constructor(
    private studentRepository: StudentRepository
  ) { }

  async execute(id: string) {
    const student = await this.studentRepository.findById(id);

    return student;
  }
}
