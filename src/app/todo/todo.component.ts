import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoInterface } from "../app.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todos: TodoInterface[] | undefined
  @Output() onDeleteItem = new EventEmitter<number>();

  delete(id: number) {
    this.onDeleteItem.emit(id)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
