export class User {
    signedIn: boolean;
    email: string;
    email_verified: boolean;
    phone_number: string;
    username: string;
    idToken: string;
    accessToken: string;
    refreshToken: string;
    constructor(
        signedIn: boolean,
        email: string,
        email_verified: boolean,
        phone_number: string,
        username: string,
        idToken: string,
        accessToken: string,
        refreshToken: string
    ) {
        this.email = email;
        this.email_verified = email_verified;
        this.phone_number = phone_number;
        this.username = username;
        this.idToken = idToken;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }
}
