import { Student } from '../../domain/entities/student';

export interface StudentRepository {
  findAll(): Promise<Student[] | []>

  findById(id: string): Promise<Student | null>

  save(student: Student): Promise<void>

  delete(id: string): Promise<void>

  update(student: Student): Promise<void>
}
