class Payment {
    process(amount) {
        console.log();
    }
}

class CreditCardPayment extends Payment {
    process(amount) {
        console.log(`Membayar Rp${amount} dengan kartu kredit`);
    }
}

class EWalletPayment extends Payment {
    process(amount) {
        console.log(`Membayar Rp${amount} dengan e-wallet`);
    }
}

class BankTransferPayment extends Payment {
    process(amount) {
        console.log(`Membayar Rp${amount} lewat transfer bank`)
    }
}

const eWallet = new EWalletPayment();
eWallet.process(5000);

const bankTransfer = new BankTransferPayment();
bankTransfer.process(4000);

const creditCard = new CreditCardPayment();
creditCard.process(3000);