import 'mocha';
import { assert } from 'chai';

/*
import { helloWorld, goodBye } from '../index';
import npmPackage from '../index';
*/
// import { helloWorld, goodBye, Nilla, yolo } from '../src/index';
import { nilla } from '../src/index';
import npmPackage from '../src/index';

describe('NPM Package', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });

  it('should have a helloWorld property', () => {
    assert.property(npmPackage, 'helloWorld');
  });
});
/*
describe('Hello World Function', () => {
  it('should be a function', () => {
    assert.isFunction(helloWorld);
  });

  it('should return the hello world message', () => {
    const expected = 'Hello World from my example modern npm package!';
    const actual = helloWorld();
    assert.equal(actual, expected);
  });
});

describe('Goodbye Function', () => {
  it('should be a function', () => {
    assert.isFunction(goodBye);
  });

  it('should return the goodbye message', () => {
    const expected = 'Goodbye from my example modern npm package!';
    const actual = goodBye();
    assert.equal(actual, expected);
  });
});

describe('YOLO Function', () => {
  it('should be a function', () => {
    assert.isFunction(yolo);
  });

  it('should return the arg', () => {
    const expected = 'My argument';
    const actual = yolo(expected);
    assert.equal(actual, expected);
  });
});
*/
describe('Nilla Function', () => {
  it('should be a function', () => {
    assert.isFunction(nilla);
  });

  it('should return the arg', () => {
    const expected = {format: {}, target};
    const actual = nilla();
    assert.equal(actual, expected);
  });
});

describe('Pluralize Function', () => {
  it('should be a function', () => {
    assert.isFunction(nilla().format.pluralize());
  });

  it('should return the arg', () => {
    const expected = '32 dogs';
    const actual = nilla(32).format.pluralize('dog');
    assert.equal(actual, expected);
  });
});