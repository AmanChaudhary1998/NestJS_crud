import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService:TasksService){

    }

    @Get()
    getAllTasks(): Task[]
    {
        return this.taskService.getAllTask()
    }

    @Get('/:id')
  getTaskById(@Param('id') id:string):Task{
    return this.taskService.getTaskById(id);
  }

@Post()
    createTask(@Body('title') title:string,
    @Body('description') description: string,
    ) : Task
    {
        return this.taskService.createTask(title,description);
    }

    @Delete('/:id')
  deleteTask(@Param('id') id:string){
    this.taskService.deleteTask(id);
    return `task ${id} is deleted`
  }

  @Patch('/:id')
  updateTaskStatus(@Param('id') id:string,
  @Body('status') status:TaskStatus,
  @Body('description') description: string){
    return this.taskService.updateTaskStatus(id,status,description)
  }
}
