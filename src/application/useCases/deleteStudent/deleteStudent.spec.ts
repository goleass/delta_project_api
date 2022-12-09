import { InMemoryStudentsRepository } from '../../../../tests/repositories/inMemoryStudentsRepositories';
import { CreateStudentUseCase } from '../createStudent/createStudentUseCase';
import { DeleteStudentUseCase } from './deleteStudentUseCase';

describe('Delete student use case', () => {
  it('should be able to delete a student', async () => {
    const studentsRepository = new InMemoryStudentsRepository();
    const createStudent = new CreateStudentUseCase(studentsRepository);
    const deleteStudent = new DeleteStudentUseCase(studentsRepository);

    const response = await createStudent.execute({
      name: 'Leonardo Gomes Assunção',
      address: 'Av. Santos Ferreira, 4330',
      phoneNumber: '51988888888',
      avatarUrl: null
    });

    await deleteStudent.execute({id: response.id});

    const student = await studentsRepository.findById(response.id);

    expect(student).toBeNull();
  });
});
