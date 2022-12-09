import { InMemoryStudentsRepository } from '../../../../tests/repositories/inMemoryStudentsRepositories';
import { CreateStudentUseCase } from '../createStudent/createStudentUseCase';
import { UpdateStudentUseCase } from './updateStudentUseCase';

describe('Update student use case', () => {
  it('should be able to update a student', async () => {
    const studentsRepository = new InMemoryStudentsRepository();
    const createStudent = new CreateStudentUseCase(studentsRepository);
    const updateStudent = new UpdateStudentUseCase(studentsRepository);

    const response = await createStudent.execute({
      name: 'Leonardo Gomes Assunção',
      address: 'Av. Santos Ferreira, 4330',
      phoneNumber: '51988888888',
      avatarUrl: null
    });

    await updateStudent.execute(response.props, response.id);

    const student = await studentsRepository.findById(response.id);

    expect(student).toBeTruthy();
  });
});
