const large = new Array(10000000).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
    }
  }
  let t1 = performance.now();
  console.log(t1 - t0);
}
findNemo(large); //O(n)
