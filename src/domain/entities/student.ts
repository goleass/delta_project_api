import { Entity } from '../../core/domain/entities/Entity';

type StudentProps = {
  name: string;
  address: string | null;
  avatarUrl: string | null;
  phoneNumber: string | null;
  createdAt?: Date;
}

export class Student extends Entity<StudentProps> {
  private constructor(props: StudentProps, id?: string) {
    super(props, id);
  }

  static create(props: StudentProps, id?: string) {
    const student = new Student(props, id);

    return student;
  }
}
