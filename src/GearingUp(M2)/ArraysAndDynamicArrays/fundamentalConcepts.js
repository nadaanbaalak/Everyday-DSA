/**
 * Array : collection of element of same data type.
 * Ironically the language being used for this repo supports collection of elements of entirely different types.
 * Fixed Size: In general, but not true in JS and maybe some other languages as well.
 *
 * Contiguous Memory: Element of array are stored in contiguous memeory location. True for all languages
 *
 * Dynamic Array: Have fixed size internally(default size), when the default size is completely used up,
 * new contiguous memory of double the size is used and elements inserted. So the time complexity of inserting
 * an element is o(1) untill we reach the end of the current space, then the new space is created/sort of accquired
 * and all the elements upto that point are transferred to this new array. So the time complexity is not exactly O(1)
 * rather O(~1). This is called Amortized time complexity
 */
