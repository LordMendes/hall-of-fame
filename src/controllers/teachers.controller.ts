import { Request, Response } from "express";
import {CreateTeacherService} from '@services/teachers.services'

export const createTeacher = async (request: Request, response: Response) =>{
  try {
    const {name, department} = request.body;

    const createTeacherService = new CreateTeacherService();

    const teacher = await createTeacherService.execute({name, department});

    return response.json(teacher)
  }catch (err){
    return response.status(400).json({ error: err.message });
  }
}