import { Router } from 'express';
import { createStudentController, deleteStudentController, findStudentByIsController, showAllStudentsController, updateStudentController } from './application/useCases';

const router = Router();

router.get('/students', (request, response) => {
  return showAllStudentsController.handle(request, response);
});

router.get('/student', (request, response) => {
  return findStudentByIsController.handle(request, response);
});

router.post('/student', (request, response) => {
  return createStudentController.handle(request, response);
});

router.delete('/student', (request, response) => {
  return deleteStudentController.handle(request, response);
});

router.put('/student', (request, response) => {
  return updateStudentController.handle(request, response);
});


export { router };
