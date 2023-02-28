function monthOfYear(month) {
  switch (month) {
    case 1:
      console.log(`Month of the year is${month}:January`);
      console.log(`Start of year- "Happy New Year"`);
      break;
    case 2:
      console.log(`Month of the year is ${month}:February`);
      break;
    case 3:
      console.log(`Month of the year is ${month}:March`);
      break;
    case 4:
      console.log(`Month of the year is ${month}:April`);
      break;
    case 5:
      console.log(`Month of the year is ${month}:May`);
      break;
    case 6:
      console.log(`Month of the year is ${month}:June`);
      break;
    case 7:
      console.log(`Month of the year is ${month}:Julay`);
      break;
    case 8:
      console.log(`Month of the year is ${month}:August`);
      break;
    case 9:
      console.log(`Month of the year is ${month}:Saptember`);
      break;
    case 10:
      console.log(`Month of the year is ${month}:October`);
      break;
    case 11:
      console.log(`Month of the year is ${year}:November`);
      break;
    case 12:
      console.log(`Month of the year is ${month}:December`);
      console.log(`End of year`);
      break;
    default:
      console.log(`Invalid Month ${month}`);
      break;
  }
}

monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
