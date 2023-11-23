/**
 * You are given an integer array and an integer 'Q', which represent the number of queries.
 * Each query is of form (l,r) where l and r are indices of the given array. For each query, calculate
 * the sum of the subarray formed by the indices l and r
 */

import { askQuestion } from "../../../dist/GearingUp(M2)/utils/index.js";

async function preComputation() {
  const numberArray = [];
  const arraySize = await askQuestion(
    "Enter the number of elements in the array : "
  );
  for (let i = 0; i < Number(arraySize.trim()); i++) {
    const element = await askQuestion(`Enter the array element : `);
    numberArray.push(Number(element.trim()));
  }
  prefixSum(numberArray);
  const numberOfQueries = await askQuestion("Enter the number of queries : ");
  let l, r;
  for (let i = 0; i < Number(numberOfQueries.trim()); i++) {
    l = await askQuestion("Enter the value of l : ");
    r = await askQuestion("Enter the value of r : ");
    if (Number(l.trim()) < 0 || Number(r.trim()) > numberArray.length - 1) {
      console.log("Invalid values");
    } else if (Number(l.trim()) === 0) {
      return numberArray[r];
    } else {
      console.log(numberArray[r] - numberArray[l - 1]);
    }
  }
  console.log(numberArray);
}

function prefixSum(inputArray) {
  for (let i = 1; i < inputArray.length; i++) {
    inputArray[i] = inputArray[i] + inputArray[i - 1];
  }
}

preComputation();

/**
 * time complexity of optimized approach :
 * time for prefix array : O(N)
 * time for each query: O(1)
 * time complexity: O(Q+N)
 */

/** Brute Force Approach
 * iterate over the array from index l to r, worst case l=0 and r = n-1,
 * this happens for Q queries, so time complexity O(Q*N)
 */
