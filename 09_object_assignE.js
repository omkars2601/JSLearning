let sbiBank = {
  bankName: "SBI Bank",
  location: "Pune",
  accountNo: "1293183894",
  ifsc: "SBI000220",
  intrestRate: "7%",
  showDetails: function () {
    console.log(
      `bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, ifsc: ${this.ifsc}, intrestRate: ${this.intrestRate}`
    );
  },
};

let axisBank = {
  bankName: "Axis Bank",
  location: "Mumbai",
  accountNo: "9966372694",
  ifsc: "AXIS000330",
  intrestRate: "8%",
  showDetails: function () {
    console.log(
      `bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, ifsc: ${this.ifsc}, intrestRate: ${this.intrestRate}`
    );
  },
};

let hdfcBank = {
  bankName: "HDFC Bank",
  location: "Nashik",
  accountNo: "6543896512",
  ifsc: "HDFC000537",
  intrestRate: "9%",
  showDetails: function () {
    console.log(
      `bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, ifsc: ${this.ifsc}, intrestRate: ${this.intrestRate}`
    );
  },
};

let yesBank = {
  bankName: "Yes Bank",
  location: "Pimpri",
  accountNo: "9065245606",
  ifsc: "YES000278",
  intrestRate: "10%",
  showDetails: function () {
    console.log(
      `bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, ifsc: ${this.ifsc}, intrestRate: ${this.intrestRate}`
    );
  },
};

console.log(`=====Invoking function showDetails() for SBI Bank=====`);
sbiBank.showDetails();
console.log(`=====Invoking function showDetails() for Axis Bank=====`);
axisBank.showDetails();
console.log(`=====Invoking function showDetails() for HDFC Bank=====`);
hdfcBank.showDetails();
console.log(`=====Invoking function showDetails() for Yes Bank=====`);
yesBank.showDetails();
