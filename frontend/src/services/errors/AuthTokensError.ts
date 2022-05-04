export class AuthTokensError extends Error{ 
    constructor(){
        super('Error with authentication token.')
    }
}   