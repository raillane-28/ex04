class Aluno {
    constructor(nome, email, matricula, cpf) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.matricula = matricula;
    }

    fazerMatricula() {
        console.log(`O aluno ${this.nome} está sendo matriculado, seu número de matrícula é ${this.matricula}`);
    }

    matriculaDoAluno() {
        console.log(`O aluno ${this.nome} recebeu um email estudantil ${this.email} e a senha para login é seu CPF: ${this.cpf}`);
    }
}



class MaeDoAluno extends Aluno {
    constructor(nome, telefone, email, cpf, matricula) {
        super(nome, email, matricula, cpf);
        this.telefone = telefone;
    }

    horaDaMatricula() {
        console.log(`A mãe do aluno, Dona ${this.nome}, irá matricular seu filho e é necessário o CPF: ${this.cpf}, o número de telefone: ${this.telefone}, e o número de matrícula de seu filho é ${this.matricula} que foi enviado por email: ${this.email}`);
    }
}



class PaiDoAluno extends Aluno {
    constructor(nome, telefone, email, cpf, notas) {
        super(nome, email, cpf, telefone);
        this.notas = notas;
    }

    PaiNotas() {
        console.log(`O pai do aluno, Seu ${this.nome} foi ver as notas de seu filho, para acessar o portal do aluno é necessário seu email: ${this.email} e seu cpf: ${this.cpf}, para complementar ele colocou no banco de informações seu telefone ${this.telefone}`);
    }

    calcularMedia() {
        let total = 0;

        for (let i = 0; i < this.notas.length; i++) {
            total += this.notas[i];
        }

        const media = total / this.notas.length;
        console.log(`A média das notas do aluno ${this.nome} é: ${media.toFixed(2)}`); // Usei toFixed(2) para mostrar duas casas decimais na média

        if (media > 5) {
            console.log("Parabéns!");
        } else {
            console.log("Castigo!");
        }
    }
}

const aluno = new Aluno("Pedro", "pedro@estudante.com", "54321", "892.532.654-00")
aluno.fazerMatricula();
aluno.matriculaDoAluno();

const mae = new MaeDoAluno("Maria", "987654321", "maria@example.com", "987.654.321-00", "54321");
mae.horaDaMatricula();

const pai = new PaiDoAluno("Mario", "123456789", "mario@example.com", "123.456.789-00", [0, 5, 8, 0]);
pai.PaiNotas();
pai.calcularMedia();
