import { PostgresStudentsRepository } from '../repositories/Implementations/PostgresStudentsRepository';
import { CreateStudent } from './createStudent';
import { CreateStudentController } from './CreateStudentController';

const postgresStudentRepository = new PostgresStudentsRepository();

const createStudentUseCase = new CreateStudent(postgresStudentRepository);

const createStudentController = new CreateStudentController(createStudentUseCase);

export { createStudentController };
