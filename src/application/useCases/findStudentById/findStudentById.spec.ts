import { InMemoryStudentsRepository } from '../../../../tests/repositories/inMemoryStudentsRepositories';
import { CreateStudentUseCase } from '../createStudent/createStudentUseCase';
import { FindStudentByIdUseCase } from './findStudentByIdUseCase';

describe('Find student by id use case', () => {
  it('should be able to find a student by id', async () => {
    const studentsRepository = new InMemoryStudentsRepository();
    const createStudent = new CreateStudentUseCase(studentsRepository);
    const findStudentById = new FindStudentByIdUseCase(studentsRepository);

    const response = await createStudent.execute({
      name: 'Leonardo Gomes Assunção',
      address: 'Av. Santos Ferreira, 4330',
      phoneNumber: '51988888888',
      avatarUrl: null
    });

    const student = await findStudentById.execute(response.id);

    expect(student).toBeTruthy();
  });
});
