var checkLeafYear = function (year) {
  if (typeof year !== "number" || isNaN(year)) {
    console.log(`Invaild year : ${year}`);
  } else {
    if (year % 4 == 0) {
      console.log(`This year: **${year}** is a leaf year`);
    } else {
      console.log(`This year: **${year}** is not a leaf year`);
    }
  }
};

checkLeafYear(2020);
checkLeafYear(1999);
checkLeafYear(1600);
checkLeafYear(2022);
checkLeafYear(1945);
checkLeafYear(null);
checkLeafYear("Twenty Twenty");
checkLeafYear(undefined);
checkLeafYear(NaN);
checkLeafYear(1750);
