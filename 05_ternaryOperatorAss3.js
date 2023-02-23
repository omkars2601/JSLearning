function interviewEligibility(gradScore, hscScore, sscScore, candidateName) {
  var iCandidate =
    gradScore >= 70 || hscScore >= 80 || sscScore >= 90
      ? `Congratulations *${candidateName}* you are *eligible* for TCS interview`
      : `Hey *${candidateName}* Unfortunately you are *not eligible* for TCS interview`;
  console.log(iCandidate);
}

interviewEligibility(80, 86, 90, "Omkar");
interviewEligibility(70, 65, 55, "Hitesh");
interviewEligibility(60, 79, 88, "Rohit");
