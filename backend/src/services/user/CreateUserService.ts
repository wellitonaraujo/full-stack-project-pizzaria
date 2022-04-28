interface UserRequest{
    name: String;
    email: String,
    password: String;
}

class CreateUserService{
    async execute({name, email, password}: UserRequest){
        return { ok: true }
    }
}

export { CreateUserService }