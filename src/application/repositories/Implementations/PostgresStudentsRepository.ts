import { Student } from '../../../domain/entities/student';
import { prisma } from '../../../lib/PrismaClient';
import { StudentRepository } from '../StudentsRepository';

export class PostgresStudentsRepository implements StudentRepository {
  async findById(id: string): Promise<Student | null> {
    const student = await prisma.student.findUnique({
      where: {
        id
      }
    });

    if (student) {
      return Student.create({
        name: student.name,
        address: student.address,
        phoneNumber: student.phone_number,
        avatarUrl: student.avatar_url,
        createdAt: student.created_at
      }, student.id);
    }

    return null;
  }

  async save(student: Student): Promise<void> {
    await prisma.student.create({
      data: {
        id: student.id,
        name: student.props.name,
        address: student.props.address,
        created_at: student.props.createdAt,
        phone_number: student.props.phoneNumber,
        avatar_url: student.props.avatarUrl
      }
    });
  }

}
