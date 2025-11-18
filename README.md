# Interview Questions - Blog Task

---

1. What are some differences between interfaces and types in TypeScript?

   > উত্তর: TypeScript-এ interface মূলত অবজেক্টের কাঠামো নির্ধারণ করার জন্য ব্যবহৃত হয়, যেখানে type আরও বিস্তৃত কাজ করা যায়। যেমন primitive টাইপ, ইউনিয়ন বা intersection টাইপ ইত্যাদির জন্য ব্যবহার করা হয়। interface একাধিকবার Declare করে তার বৈশিষ্ট্যগুলো মিশ্রিত বা বাড়ানো যায় (declaration merging), কিন্তু type একবার Declare করার পর তা আর পরিবর্তন করা যায় না।

2. What is the use of the keyof keyword in TypeScript? Provide an example.

> উত্তর: keyof কিওয়ার্ডটি কোনো অবজেক্ট টাইপের সকল প্রোপার্টির কী-এর ইউনিয়ন টাইপ রিটার্ন করে। উদাহরণ:

```typescript
type Person = { name: string; phone: number; };
type PersonKeys = keyof Person;
```

3. Explain the difference between any, unknown, and never types in TypeScript.

   > উত্তর: any টাইপটি যেকোনো ভ্যালু গ্রহণ করে এবং টাইপ চেকিং করে না।
   > unknown টাইপ যেকোনো কোনো ভ্যালু গ্রহণ করে কিন্তু compile করার আগে টাইপ চেক করে।
   > never টাইপ এমন কিছু বোঝায় যা কখনো ঘটে না, যেমন এমন ফাংশনের রিটার্ন টাইপ যা কখনো রিটার্ন করে না বা সবসময় error throw কোন ভ্যালু never টাইপে অ্যাসাইন করা যায় না।

4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
   > উত্তর: enum টাইপ ব্যবহার করলে বিভিন্ন Constant value 'র একটি গ্রুপ তৈরি করা যায়।
   > Numeric Enums:

```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
```

- string enum:

```typescript
enum UserRoles {
  Admin = 'Admin',
  Editor = 'Editor',
  Viewer = 'Viewer',
}
```

5. Provide an example of using union and intersection types in TypeScript.
   > union টাইপ একটি ভ্যারিয়েবলকে একাধিক টাইপের মান গ্রহণ করার সুযোগ দেয়:

```typescript
type Animal = Cat | Dog;
```

> intersection টাইপ দুই বা ততোধিক টাইপের মান গ্রহণ করে:

```typescript
type Employee = Person & ContactDetails;
```