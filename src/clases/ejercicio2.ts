class CuentaBancaria {
    private numeroCuenta: string;
    private titular: string;
    private saldo: number;
  
    constructor(numeroCuenta: string, titular: string, saldoInicial: number) {
      this.numeroCuenta = numeroCuenta;
      this.titular = titular;
      this.saldo = saldoInicial;
    }
  
    // Método para depositar dinero en la cuenta
    depositar(monto: number) {
      if (monto > 0) {
        this.saldo += monto;
        console.log(`Se depositaron $${monto} en la cuenta. Nuevo saldo: $${this.saldo}`);
      } else {
        console.log("El monto del depósito debe ser mayor que cero.");
      }
    }
  
    // Método para retirar dinero de la cuenta
    retirar(monto: number) {
      if (monto > 0 && monto <= this.saldo) {
        this.saldo -= monto;
        console.log(`Se retiraron $${monto} de la cuenta. Nuevo saldo: $${this.saldo}`);
      } else {
        console.log("El monto a retirar no es válido o insuficiente saldo.");
      }
    }
  
    // Método para consultar el saldo de la cuenta
    consultarSaldo() {
      console.log(`Saldo en la cuenta de ${this.titular} (${this.numeroCuenta}): $${this.saldo}`);
    }
  }
  
  // Crear cuentas bancarias y probar los métodos
  const cuenta1 = new CuentaBancaria("12345", "Juan Pérez", 1000);
  const cuenta2 = new CuentaBancaria("54321", "María González", 500);
  
  cuenta1.consultarSaldo();
  cuenta1.depositar(500);
  cuenta1.retirar(200);
  cuenta1.consultarSaldo();
  
  cuenta2.consultarSaldo();
  cuenta2.retirar(600);
  cuenta2.depositar(300);
  cuenta2.consultarSaldo();
  