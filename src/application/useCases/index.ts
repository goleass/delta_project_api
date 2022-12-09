import { PostgresStudentsRepository } from '../repositories/Implementations/PostgresStudentsRepository';
import { CreateStudentController } from './createStudent/CreateStudentController';
import { CreateStudentUseCase } from './createStudent/createStudentUseCase';
import { DeleteStudentController } from './deleteStudent/DeleteStudentController';
import { DeleteStudentUseCase } from './deleteStudent/deleteStudentUseCase';
import { FindStudentByIsController } from './findStudentById/findStudentByIdController';
import { FindStudentByIdUseCase } from './findStudentById/findStudentByIdUseCase';
import { ShowAllStudentsController } from './showAllStudent/ShowAllStudentsController';
import { ShowAllStudentsUseCase } from './showAllStudent/showAllStudentsUseCase';
import { UpdateStudentController } from './updateStudent/UpdateStudentController';
import { UpdateStudentUseCase } from './updateStudent/updateStudentUseCase';

const postgresStudentRepository = new PostgresStudentsRepository();

const createStudentUseCase = new CreateStudentUseCase(postgresStudentRepository);
const deleteStudentUseCase = new DeleteStudentUseCase(postgresStudentRepository);
const updateStudentUseCase = new UpdateStudentUseCase(postgresStudentRepository);
const showAllStudentsUseCase = new ShowAllStudentsUseCase(postgresStudentRepository);
const findStudentByIdUseCase = new FindStudentByIdUseCase(postgresStudentRepository);

const createStudentController = new CreateStudentController(createStudentUseCase);
const deleteStudentController = new DeleteStudentController(deleteStudentUseCase);
const updateStudentController = new UpdateStudentController(updateStudentUseCase);
const showAllStudentsController = new ShowAllStudentsController(showAllStudentsUseCase);
const findStudentByIsController = new FindStudentByIsController(findStudentByIdUseCase);

export {
  createStudentController,
  deleteStudentController,
  updateStudentController,
  showAllStudentsController,
  findStudentByIsController
};
