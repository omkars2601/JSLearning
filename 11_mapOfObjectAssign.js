class Bank {
    constructor(bankName, location, accountNo, ifscCode, intrestRate) {
      (this.bankName = bankName),
        (this.location = location),
        (this.accountNo = accountNo),
        (this.ifscCode = ifscCode),
        (this.intrestRate = intrestRate);
    }
  }
  
  const axisBank = new Bank("Axis Bank", "Dhanori", 1122334455, "AX0044", "7%");
  const sbiBank = new Bank("SBI Bank", "Narhe", 1002223458, "SB0034", "8%");
  const iciciBank = new Bank("ICICI Bank","Hadpasar", 3002223459,"IC0056","9%" );
  const kotakBank = new Bank("Kotak Bank", "Shivajinagar", 2201103405,"KT0026", "6%");
  const hdfcBank = new Bank("HDFC Bank", "Katraj", 1920384503, "HD0023", "12%");
  const panjabBank = new Bank("Panjab Bank", "Pimpri", 2938476536,"PN0016", "10%");
  
  const mapOfBanks = new Map();
  mapOfBanks.set("Dhanori",axisBank);
  mapOfBanks.set("Narhe",sbiBank);
  mapOfBanks.set("Hadpsar",iciciBank);
  mapOfBanks.set("shivajinagar",kotakBank);
  mapOfBanks.set("Katraj",hdfcBank);
  mapOfBanks.set("Pimpri",panjabBank);

  let keysOfMap = mapOfBanks.keys();
  console.log(keysOfMap);

  for (const keys of keysOfMap) {
    let objects = mapOfBanks.get(keys); //<== it returns objects stored in map
    console.log("Bank Name is:",objects.bankName,"& Account No is:", objects.accountNo,"& Intrest Rate is:", objects.intrestRate);
  }