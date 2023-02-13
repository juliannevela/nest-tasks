import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilter(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;

    let currentTasks = this.getAllTasks();

    if (status) {
      currentTasks = this.tasks.filter((task) => task.status === status);
    }

    if (search) {
      currentTasks = this.tasks.filter(
        ({ title, description }) =>
          title.includes(search) || description.includes(search),
      );
    }

    return currentTasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const newTask: Task = {
      id: randomUUID(),
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(newTask);

    return newTask;
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const currentTask = this.getTaskById(id);
    currentTask.status = status;

    return currentTask;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
