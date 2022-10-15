let s1 = "aabccпппцыы";
let s2 = "adcaaрррцыы";

function getCommonCharacterCount(s1, s2) {
  let letters1 = s1.split('');
  let letters2 = s2.split('');
  let count = 0; 

  for (let i = 0; i < letters1.length; i++) {
    for (let j = 0; j < letters2.length; j++) {
      if (letters2[j] === letters1[i]) {
        letters2.splice(j, 1);
        count++;
        break;
      }
    }
  }

  // letters1.forEach(item => {
  //   let indx = letters2.indexOf(item);   

  //   if (indx >= 0) {
  //     letters2.splice(indx, 1);
  //     count++;
  //   }

  // });
  return count;
}

console.log(getCommonCharacterCount(s1, s2));