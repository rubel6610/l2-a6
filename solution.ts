
function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return !value;
  }
  return value;
}


const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  } 
  if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}


interface Item {
  title: string;
  rating: number;
}
const filterByRating = (items: Item[]): Item[] => {
  return items.filter(item => item.rating >= 4);
}


interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
const filterActiveUsers = (users: User[]): User[] => {
  return users.filter(user => user.isActive);
}


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  const availability = book.isAvailable ? 'Yes' : 'No';

  console.log(
    `Title: ${book.title}, 
    Author: ${book.author}, 
    Published: ${book.publishedYear}, 
    Available: ${availability}`
  );
}


const getUniqueValues = <T extends string | number>(array1: T[], array2: T[]): T[] => {
  const result: T[] = [];

  const addUnique = (arr: T[]) => {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      let exists = false;

      for (let j = 0; j < result.length; j++) {
        if (result[j] === item) {
          exists = true;
          break;
        }
      }
      if (!exists && item !== undefined) {
        result.push(item);
      }
    }
  };

  addUnique(array1);
  addUnique(array2);
  return result;
};



interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => {
    const productTotal = product.price * product.quantity;
    const discountAmount = product.discount ? (productTotal * product.discount) / 100 : 0;
    return total + (productTotal - discountAmount);
  }, 0);
}