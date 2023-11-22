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
  console.log(numberArray);
}

function prefixSum(inputArray) {
  for (let i = 1; i < inputArray.length; i++) {
    inputArray[i] = inputArray[i] + inputArray[i - 1];
  }
}

preComputation();
