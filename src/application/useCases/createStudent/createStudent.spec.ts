import { InMemoryStudentsRepository } from '../../../../tests/repositories/inMemoryStudentsRepositories';
import { CreateStudentUseCase } from './createStudentUseCase';

describe('Create student use case', () => {
  it('should be able to create a new student', async () => {
    const studentsRepository = new InMemoryStudentsRepository();
    const createStudent = new CreateStudentUseCase(studentsRepository);

    const response = await createStudent.execute({
      name: 'Leonardo Gomes Assunção',
      address: 'Av. Santos Ferreira, 4330',
      phoneNumber: '51988888888',
      avatarUrl: null
    });

    const student = await studentsRepository.findById(response.id);

    expect(student).toBeTruthy();
  });
});
