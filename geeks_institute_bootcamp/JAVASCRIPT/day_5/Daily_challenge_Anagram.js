function isAnagram(str1, str2) {
  const clean = str =>
    str
      .toLowerCase()
      .replace(/\s+/g, '') 
      .split('')
      .sort()
      .join('');

  return clean(str1) === clean(str2);
}
console.log(isAnagram("Astronomer", "Moon starer")); 
console.log(isAnagram("School master", "The classroom"));
console.log(isAnagram("Hello", "World"));
