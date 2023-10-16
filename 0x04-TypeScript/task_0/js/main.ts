interface Student{
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const Anim: Student = {
  firstName : 'Stephen',
  lastName : 'Anim',
  age : 24,
  location : 'Bubiashe'
}

const Felix: Student = {
  firstName : 'Okyere',
  lastName : 'Felix',
  age : 29,
  location : 'Ashaley Botwe'
}

const studentsList : Array<Student> = [Anim, Felix]

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');

th1.innerText = 'First Name';
th2.innerText = 'Location';

thead.append(th1);
thead.append(th2);

table.append(thead);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const column1: HTMLTableCellElement = document.createElement('td');
  const column2: HTMLTableCellElement = document.createElement('td');

  column1.innerText = student.firstName;
  column2.innerText = student.lastName;

  row.append(column1);
  row.append(column2)

  table.append(row);
});

body.append(table)