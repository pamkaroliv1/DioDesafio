class Heroi {
   
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    
    atacar() {
      let ataque;
  
      
      if (this.tipo === 'maga') {
        ataque = ' magia';
      } else if (this.tipo === 'guerreira') {
        ataque = ' espada';
      } else if (this.tipo === 'monge') {
        ataque = 'artes marciais';
      } else if (this.tipo === 'ninja') {
        ataque = 'shuriken';
      } else {
        ataque = ' um ataque indefinido';
      }
      
      console.log(`O ${this.tipo} ${this.nome} idade ${this.idade} atacou usando${ataque}`);
    }
  }
  
  const meuHeroi = new Heroi('Heroina Pamella', 29, 'guerreira');
  meuHeroi.atacar();
  
