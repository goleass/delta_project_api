import { Student } from '../../domain/entities/student';
import { StudentRepository } from '../repositories/StudentsRepository';

export type CreateStudentRequest = {
  name: string;
  address: string | null;
  avatarUrl: string | null;
  phoneNumber: string | null;
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
      avatarUrl,
      createdAt: new Date()
    });

    await this.studentRepository.save(student);

    return student;
  }
}
