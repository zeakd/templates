import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide, calculator } from '../src/index.js';

describe('Calculator functions', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    it('should add zero', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should handle negative results', () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it('should handle multiplication by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    it('should handle negative numbers', () => {
      expect(multiply(-3, 4)).toBe(-12);
      expect(multiply(-3, -4)).toBe(12);
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should handle decimal results', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    it('should throw error on division by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero');
    });
  });

  describe('calculator object', () => {
    it('should expose all functions', () => {
      expect(calculator).toHaveProperty('add');
      expect(calculator).toHaveProperty('subtract');
      expect(calculator).toHaveProperty('multiply');
      expect(calculator).toHaveProperty('divide');
    });

    it('should have working methods', () => {
      expect(calculator.add(1, 2)).toBe(3);
      expect(calculator.subtract(5, 2)).toBe(3);
      expect(calculator.multiply(3, 3)).toBe(9);
      expect(calculator.divide(8, 2)).toBe(4);
    });
  });
});