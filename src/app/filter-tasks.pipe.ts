import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTasks',
  standalone: true
})
export class FilterTasksPipe implements PipeTransform {

  transform(tasks: any[], completed:boolean): {id:number;name:string}[]{
    return tasks.filter(task => task.completed === completed);
  }

}
