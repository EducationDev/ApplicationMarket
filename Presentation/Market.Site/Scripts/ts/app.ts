class Person {
    // ReSharper disable once InconsistentNaming
    private _firstName: string;
    // ReSharper disable once InconsistentNaming
    private _lastName: string;

    constructor(fName: string, lName: string, public age: number) {
        this._firstName = fName;
        this._lastName = lName;
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    set fullName(fullName) {
        const nameParts = fullName.split(" ");
        [this._firstName, this._lastName] = nameParts;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    isAdult() {
        return this.age >= 18;
    }
}
class Student extends Person {
    private enrolledCourses: string[];
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age);
        this.enrolledCourses = [];
    }
    static fromPerson(person: Person) {
        return new Student(person.firstName, person.lastName, person.age);
    }
    enroll(courseId: string) {
        this.enrolledCourses.push(courseId);
    }
    getCourses() {
        return this.fullName + ", sus cursos son: " +
            this.enrolledCourses.join(", ");
    }
}

let person = new Person("Sofia", "Lima", 25);
let student = Student.fromPerson(person);
student.enroll("TC2021");
student.enroll("LPPA2021");

function getCourses(user: Student) {

    return `<h2> ${user.getCourses()} </h2>`;
}
function displayText() {
    document.getElementById("msgDiv").innerHTML = getCourses(student);
}