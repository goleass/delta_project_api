import { Student } from '../../domain/entities/student';
import { StudentRepository } from '../repositories/StudentsRepository';

export type CreateStudentRequest = {
  name: string;
  address: string;
  avatarUrl?: string;
  phoneNumber: string;
}

export class CreateStudent {
  constructor(
    private studentRepository: StudentRepository
  ) { }

  async execute({
    name,
    address,
    phoneNumber,
    avatarUrl
  }: CreateStudentRequest) {

    const student = Student.create({
      name,
      address,
      phoneNumber,
      avatarUrl
    });

    await this.studentRepository.save(student);

    return student;
  }
}
