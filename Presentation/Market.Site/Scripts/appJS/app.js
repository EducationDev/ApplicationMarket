var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(fName, lName, age) {
        this.age = age;
        this._firstName = fName;
        this._lastName = lName;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this._firstName + " " + this._lastName;
        },
        set: function (fullName) {
            var nameParts = fullName.split(" ");
            this._firstName = nameParts[0], this._lastName = nameParts[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.isAdult = function () {
        return this.age >= 18;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.enrolledCourses = [];
        return _this;
    }
    Student.fromPerson = function (person) {
        return new Student(person.firstName, person.lastName, person.age);
    };
    Student.prototype.enroll = function (courseId) {
        this.enrolledCourses.push(courseId);
    };
    Student.prototype.getCourses = function () {
        return this.fullName + ", sus cursos son: " +
            this.enrolledCourses.join(", ");
    };
    return Student;
}(Person));
var person = new Person("Sofia", "Lima", 25);
var student = Student.fromPerson(person);
student.enroll("TC2021");
student.enroll("LPPA2021");
function getCourses(user) {
    return "<h2> " + user.getCourses() + " </h2>";
}
function displayText() {
    document.getElementById("msgDiv").innerHTML = getCourses(student);
}
//# sourceMappingURL=app.js.map