
class Usuario {

    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin === true;
    }

}

class Admin extends Usuario {

    admin = true;

}

const user1 = new Usuario('user@gmail.com','1234');
const adm1 = new Admin('admin@gmail.com', '12334');


console.log(user1);
console.log(adm1);

console.log(user1.isAdmin());
console.log(adm1.isAdmin());