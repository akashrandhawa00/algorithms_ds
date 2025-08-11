function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let char of string1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let char of string2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

validAnagram("", "");
validAnagram("aaz", "zza");
validAnagram("anagram", "nagaram");
validAnagram("rat", "car");
validAnagram("awesome", "awesom");
validAnagram("qwerty", "qeywrt");
validAnagram("texttwisttime", "timetwisttext");
