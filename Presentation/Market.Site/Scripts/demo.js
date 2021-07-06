////'use strict';

////(function () {

////    class Person {
////        constructor(firstName, lastName, age) {
////            this.firstName = firstName;
////            this.lastName = lastName;
////            this.age = age;
////        }
////        get fullName() {
////            return this.firstName + ' ' + this.lastName;
////        }

////        set fullName(fullName) {
////            var nameParts = fullName.split(' ');
////            this.firstName = nameParts[0];
////            this.lastName = nameParts[1];
////        }

////        isAdult() {
////            return this.age >= 18;
////        }
////    }

////    class Student extends Person {
////        constructor(firstName, lastName, age) {
////            super(firstName, lastName, age);
////            this._enrolledCourses = [];
////        }

////        static fromPerson(person) {
////            return new Student(person.firstName, person.lastName, person.age);
////        }

////        enroll(courseId) {
////            this._enrolledCourses.push(courseId);
////        }

////        getCourses() {
////            return this.fullName + ", sus cursos son: " +
////                this._enrolledCourses.join(', ');
////        }
////    }

////    let sofia = new Person('Sofia', 'Lima', 29);

////    let student = Student.fromPerson(sofia);
////    student.enroll('JS501')
////    student.enroll('LPPA2021')
////    display(student);
////    display(student.getCourses());

////})();