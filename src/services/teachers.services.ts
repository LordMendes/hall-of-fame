import { getRepository } from 'typeorm';

import Teacher from '@models/Teacher'

interface Request {
  name: string;
  department: string;
}

export class CreateTeacherService {
  public async execute({
    name,
    department
  }: Request): Promise<Teacher> {
    const teacherRepository = getRepository(Teacher);

    const checkTeacherExists = await teacherRepository.findOne({
      where: [{name}],
    });

    if (checkTeacherExists) {
      throw new Error('Teacher already exists');
    }


    const teacher = teacherRepository.create({
      name,
      department
    });

    await teacherRepository.save(teacher);

    return teacher;
  }
}

