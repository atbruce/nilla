import { Nilla, yolo } from './format/'

export {Nilla, yolo}

export function helloWorld() {
  const message = 'Hello World from my example modern npm package!';
  return message;
}

export function goodBye() {
  const message = 'Goodbye from my example modern npm package!';
  return message;
}

Nilla(32).format.plural('cat')

export default {
  helloWorld,
  goodBye,
};