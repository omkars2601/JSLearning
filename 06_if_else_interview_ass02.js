function tcsInterviewEligibility(grScore, hscScore, sscScore, name) {
  if (grScore >= 70 || hscScore >= 80 || sscScore > 90) {
    console.log(`Congrats ${name} you are eligible for TCS interview`);
  } else {
    console.log(`Hey ${name} Unfortunately you are not eligible for interview`);
  }
}

tcsInterviewEligibility(80, 86, 90, "Omkar");
tcsInterviewEligibility(70, 65, 55, "Hitesh");
tcsInterviewEligibility(60, 79, 88, "Sushma");
