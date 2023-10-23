export class RegisterUser {
    username: string;
    email: string;
    password: string;
    phone: string;

    constructor(username: string, email: string, password: string, phone: string){
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }
}
