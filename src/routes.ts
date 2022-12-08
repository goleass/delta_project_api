import { Router } from 'express';
import { createStudentController } from './application/useCases';

const router = Router();

router.post('/student', (request, response) => {
  return createStudentController.handle(request, response);
});

export { router };
