class Task {
    constructor(
      public name: string,
      public description: string,
      public dueDate: Date,
      public status: string
    ) {}
  
    updateStatus(newStatus: string): void {
      this.status = newStatus;
    }
  }
  
  class TodoList {
    private tasks: Task[];
  
    constructor(public name: string, public description: string) {
      this.tasks = [];
    }
  
    addTask(task: Task): void {
      this.tasks.push(task);
    }
  
    deleteTask(task: Task): void {
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    }
  
    editTask(task: Task, newName: string, newDescription: string, newDueDate: Date): void {
      task.name = newName;
      task.description = newDescription;
      task.dueDate = newDueDate;
    }
    updateStatus(task:Task,status:string): void
    {
      task.status = status;
    }
    getTasks(): Task[] {
      return this.tasks;
    }
  }

const task1 = new Task('Task 1', 'read book',new Date("2023-05-21"), 'not started');
const task2 = new Task('Task 2', 'Apply for Exam',new Date("2023-05-22"), 'in progress');
const task3 = new Task('Task 3', 'book Match Tickets',new Date("2023-05-23"), 'not started');

const todoList1 = new TodoList('personal To Do List', 'My personal tasks');
todoList1.addTask(task1);
todoList1.addTask(task2);

const todoList2 = new TodoList('Tournament To Do list', 'Tasks for Cricket Tournament');
todoList2.addTask(task3);

console.log(todoList1.getTasks(),"New list1");
console.log(todoList2.getTasks(),"New List 2")

todoList2.deleteTask(task3)
todoList1.deleteTask(task1)
todoList1.updateStatus(task2,"completed")
console.log(todoList1.getTasks(),"List 1 With Deleted Task and status change")
console.log(todoList2.getTasks(),"List 2 With Deleted Task")
