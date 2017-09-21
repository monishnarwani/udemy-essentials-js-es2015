function butter(...aa) {
  console.log(aa);
  let a = [1, 2, 3, ...aa];
  return a;
}

console.log(butter(4, 5, 6));
