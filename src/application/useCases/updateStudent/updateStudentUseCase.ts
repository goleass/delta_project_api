import { Student } from '../../../domain/entities/student';
import { StudentRepository } from '../../repositories/StudentsRepository';

export type UpdateStudentRequest = {
  name: string;
  address: string | null;
  avatarUrl: string | null;
  phoneNumber: string | null;
}

export class UpdateStudentUseCase {
  constructor(
    private studentRepository: StudentRepository
  ) { }

  async execute({
    name,
    address,
    phoneNumber,
    avatarUrl
  }: UpdateStudentRequest, id: string) {

    const student = Student.create({
      name,
      address,
      phoneNumber,
      avatarUrl
    }, id);

    await this.studentRepository.update(student);
  }
}
