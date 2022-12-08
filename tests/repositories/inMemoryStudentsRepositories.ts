import { StudentRepository } from '../../src/application/repositories/StudentsRepository';
import { Student } from '../../src/domain/entities/student';

export class InMemoryStudentsRepository implements StudentRepository {
  public items: Student[] = [];

  async save(student: Student): Promise<void> {
    this.items.push(student);
  }

  async findById(id: string): Promise<Student | null> {
    const student =  this.items.find(student => student.id === id);

    if (!student) {
      return null;
    }

    return student;
  }
}
