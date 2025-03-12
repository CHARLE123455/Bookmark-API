import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService{

    login(){
        return 'login successful!!!';
    }

    signup(){
        return 'Account successfully signed up!!!';
    }
}

