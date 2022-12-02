import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  items = [
    {
      isDone: false,
      content: 'sprzedac auto',
    },
    {
      isDone: true,
      content: 'kupić kwiatki',
    },
    {
      isDone: false,
      content: 'pomalowac pokoj',
    },
    {
      isDone: false,
      content: 'przetrwac',
    },
  ];
}
