import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked items = [
    {
      isDone: false,
      content: 'sprzedac auto',
    },
    {
      isDone: true,
      content: 'kupić kwiatki',
    },
    {
      isDone: true,
      content: 'pomalowac pokoj',
    },
    {
      isDone: false,
      content: 'przetrwac',
    },
  ];

  @action
  addNewTask(event) {
    event.preventDefault();
    this.items = [
      ...this.items,
      {
        isDone: false,
        content: this.itemTask,
      },
    ];
  }

  @action
  onInputValue({ target: { value } }) {
    this.itemTask = value;
  }
}
