import { StudentRepository } from '../../src/application/repositories/StudentsRepository';
import { Student } from '../../src/domain/entities/student';

export class InMemoryStudentsRepository implements StudentRepository {
  public items: Student[] = [];

  async save(student: Student): Promise<void> {
    this.items.push(student);
  }

  async findAll(): Promise<Student[] | []> {
    const students = this.items;

    return students;
  }

  async findById(id: string): Promise<Student | null> {
    const student =  this.items.find(student => student.id === id);

    if (!student) {
      return null;
    }

    return student;
  }

  async delete(id: string): Promise<void> {
    this.items = this.items.filter(student => student.id !== id);
  }

  async update(student: Student): Promise<void> {
    this.items = this.items.map(studentRepo => {
      if(student.id === studentRepo.id) {
        return Student.create(student.props, student.id);
      }
      return studentRepo;
    });
  }
}
