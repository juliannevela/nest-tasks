import { Injectable } from '@nestjs/common';
import { CreateTaskDto, GetTasksFilterDto } from './dto/index';
import { TaskRepository } from './tasks.repository';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TaskRepository) {}

  async getTaskById(id: string): Promise<Task> {
    return this.tasksRepository.getTaskById(id);
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }
}
// @Injectable()
// export class TasksService {
//   constructor(private readonly tasksRepository: TasksRepository) {}
// getAllTasks(): Task[] {
//   return this.tasks;
// }
// getTasksWithFilter(filterDto: GetTasksFilterDto): Task[] {
//   const { status, search } = filterDto;
//   let currentTasks = this.getAllTasks();
//   if (status) {
//     currentTasks = this.tasks.filter((task) => task.status === status);
//   }
//   if (search) {
//     currentTasks = this.tasks.filter(
//       ({ title, description }) =>
//         title.includes(search) || description.includes(search),
//     );
//   }
//   return currentTasks;
// }

//   const newTask: Task = {
//     id: randomUUID(),
//     title: title,
//     description: description,
//     status: TaskStatus.OPEN,
//   };
//   this.tasks.push(newTask);
//   return newTask;

// updateTaskStatus(id: string, status: TaskStatus): Task {
//   const currentTask = this.getTaskById(id);
//   currentTask.status = status;
//   return currentTask;
// }
// deleteTask(id: string): void {
//   const found = this.getTaskById(id);
//   this.tasks = this.tasks.filter((task) => task.id !== found.id);
// }
// }
