// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

function sorter(textbooks) {
  return textbooks.sort((a, b) => {
    let sortA = a.toLowerCase();
    let sortB = b.toLowerCase();

    if (sortA < sortB) {
      return -1;
    } else if (sortA > sortB) {
      return 1;
    } else {
      return 0;
    }
  });
}

console.log(sorter(["Algebra", "History", "Geometry", "English"]));
console.log(sorter(["Algebra', 'history', 'Geometry', 'english"]));
console.log(sorter(["Alg#bra', '$istory', 'Geom^try', '**english"]));