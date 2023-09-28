export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    } else {
      this._name = name;
    }

    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    } else {
      this._length = length;
    }

    if (!Array.isArray(students)) {
      throw new Error('must be an array');
    } else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Name must be a string');
    } else {
      this._name = value;
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('Length must be a number');
    } else {
      this._length = value;
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new Error('must be an array');
    } else {
      this._students = value;
    }
  }
}
