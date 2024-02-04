export class Employee {
    key?: string;
    name?: string;
    email?: string;
    mobile?: string;
    details?: string;

    constructor(key: string, name: string, email: string, mobile: string, details: string) {
        this.key = key;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.details = details;
    }
}