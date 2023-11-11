/*
Filename: SophisticatedCode.js
Content: This code demonstrates a sophisticated and elaborate implementation of a custom data structure called "QuadraticSet".
It provides functionalities to add elements, remove elements, and perform various operations like union, intersection, and difference on sets.
*/

class QuadraticSet {
  constructor() {
    this.set = {}; // Associative array to store set elements
    this.size = 0; // Number of elements in the set
  }

  add(element) {
    if (!this.has(element)) {
      this.set[element] = true;
      this.size++;
    }
  }

  remove(element) {
    if (this.has(element)) {
      delete this.set[element];
      this.size--;
    }
  }

  has(element) {
    return this.set.hasOwnProperty(element);
  }

  union(otherSet) {
    const unionSet = new QuadraticSet();

    for (let element in this.set) {
      unionSet.add(element);
    }

    for (let element in otherSet.set) {
      unionSet.add(element);
    }

    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new QuadraticSet();

    for (let element in this.set) {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    }

    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new QuadraticSet();

    for (let element in this.set) {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    }

    return differenceSet;
  }

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}

// Create two sets and perform operations
const set1 = new QuadraticSet();
set1.add(1);
set1.add(2);
set1.add(3);

const set2 = new QuadraticSet();
set2.add(2);
set2.add(3);
set2.add(4);

const set3 = new QuadraticSet();
set3.add(3);
set3.add(4);
set3.add(5);

console.log("Set 1:", set1.set);
console.log("Set 2:", set2.set);
console.log("Set 3:", set3.set);

const unionSet = set1.union(set2);
console.log("Union Set (Set 1 + Set 2):", unionSet.set);

const intersectionSet = set1.intersection(set2);
console.log("Intersection Set (Set 1 ∩ Set 2):", intersectionSet.set);

const differenceSet = set2.difference(set1);
console.log("Difference Set (Set 2 - Set 1):", differenceSet.set);

const chainedUnionSet = set1.union(set2).union(set3);
console.log("Chained Union Set (Set 1 + Set 2 + Set 3):", chainedUnionSet.set);
console.log("Size of Chained Union Set:", chainedUnionSet.size);
console.log("Is Chained Union Set empty?", chainedUnionSet.isEmpty());