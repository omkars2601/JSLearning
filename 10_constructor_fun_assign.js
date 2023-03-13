function Bank(bankName,location,ifscCode,branchCode) {
    this.bankName = bankName;
    this.location= location;
    this.ifscCode= ifscCode;
    this.branchCode= branchCode;
    this.showDetails = function () {
        console.log(`Details of bank is as following: ${bankName}, ${location}, ${ifscCode}, ${branchCode} **Thank you for contacting us**`);
    }
}

const yesBank = new Bank("YES Bank","Shivajinagar","YES00142","SHYES09");
const mahBank = new Bank("MAH Bank","Warje","MAH00453","WAJMA88");
const sbiBank = new Bank("SBI Bank","Hadpsar","SBI00678","HASB76");
const axisBank = new Bank("Axis Bank","Katraj","AXI00247","KAAX54");

yesBank.showDetails();
mahBank.showDetails();
sbiBank.showDetails();
axisBank.showDetails();


Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`Opening time of *SBI bank* is ${sbiBank.openTime} and closing time is ${sbiBank.closeTime}`);
console.log(`Opening time of *Axis bank* is ${axisBank.openTime} and closing time is ${axisBank.closeTime}`);

console.log(`Bank name is ${yesBank.bankName} & branchCode: ${yesBank.branchCode} & openTime is ${yesBank.openTime}`);


