import { Component } from '@angular/core';

export interface TodoInterface {
  id: number
  name: string
  date: Date
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'todo';
  text = ''
  todos: TodoInterface[] = [
    {
      id: 1,
      name: "Todo 1",
      date: new Date()
    },
    {
      id: 2,
      name: "Todo 2",
      date: new Date()
    },
  ]
  addItem() {
    if (this.text !== '') {
      const newItem = {
        id: this.todos[this.todos.length - 1].id + 1,
        name: this.text,
        date: new Date()
      }
      this.todos.push(newItem)
      this.text = ''
    }
  }

  deleteItem(id: number) {
    this.todos = this.todos?.filter(item => item.id !== id)
  }
}
