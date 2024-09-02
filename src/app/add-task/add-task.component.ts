import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task, TaskService } from '../task.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {

  taskForm!: FormGroup;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.taskForm = new FormGroup(
      {
        name: new FormControl('', Validators.required),
        completed: new FormControl(false),
        file: new FormControl(null)
      }
    )

  }

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask: Task= {
        id: this.taskService.getTask().length + 1,
        ...this.taskForm.value
      };
      this.taskService.addTask(newTask);
      this.taskForm.reset(); // Reset the form fields
      alert('Task added successfully!');
      this.router.navigate(['/tasks']);
    } else {
      alert('Please fill in the required fields.');
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.taskForm.patchValue({ file });
  }


}
