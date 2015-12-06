export class Hello {
    constructor() {
        this._firstName = "John";
        this._lastName = "Doe";
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    sayHello() {
        alert(`Hello ${this.firstName} ${this.lastName}. Nice to meet you.`);
    }

    private _firstName: string;
    private _lastName: string;

}