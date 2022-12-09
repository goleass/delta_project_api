import { InMemoryStudentsRepository } from '../../../../tests/repositories/inMemoryStudentsRepositories';
import { CreateStudentUseCase } from '../createStudent/createStudentUseCase';
import { ShowAllStudentsUseCase } from './showAllStudentsUseCase';

describe('Show all students use case', () => {
  it('should be able to show all students', async () => {
    const studentsRepository = new InMemoryStudentsRepository();
    const createStudent = new CreateStudentUseCase(studentsRepository);
    const showAllStudent = new ShowAllStudentsUseCase(studentsRepository);

    await createStudent.execute({
      name: 'Leonardo Gomes Assunção',
      address: 'Av. Santos Ferreira, 4330',
      phoneNumber: '51988888888',
      avatarUrl: null
    });

    const students = await showAllStudent.execute();

    expect(students.length).toBeGreaterThan(0);
  });
});
