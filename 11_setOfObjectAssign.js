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
const iciciBank = new Bank(
  "ICICI Bank",
  "Hadpasar",
  3002223459,
  "IC0056",
  "9%"
);
const kotakBank = new Bank("Kotak Bank", "Shivajinagar", 2201103405, "6%");
const hdfcBank = new Bank("HDFC Bank", "Katraj", 1920384503, "HD0023", "12%");
const panjabBank = new Bank("Panjab Bank", "Pimpri", 2938476536, "10%");

const setOfBanks = new Set();
setOfBanks.add(axisBank);
setOfBanks.add(sbiBank);
setOfBanks.add(iciciBank);
setOfBanks.add(kotakBank);
setOfBanks.add(hdfcBank);
setOfBanks.add(panjabBank);

for (const bank of setOfBanks) {
  console.log(
    "Name of bank:",
    bank.bankName,
    "& Location of bank:",
    bank.location
  );
}
