export class User {

    public correo: string;
    public password: string;

    constructor() {
        this.correo = '';
        this.password = '';
    }
}

/** Si no quieres que salte el error de que
    debes de inicializar los atributos en el constructor añade este 	parámetro al tsconfig.json
 * en CompilerOptions
 * "strictPropertyInitialization": false
 */