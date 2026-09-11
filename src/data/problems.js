const problems = [
  {
    id: 1,
    title: "Two Sum",
    platform: "LeetCode",
    difficulty: "Easy",
    pattern: "HashMap",
    problem:
      "Given an array of integers and a target, return the indices of the two numbers that add up to the target.",

    bruteForce:
      "Check every possible pair using two nested loops. If the sum of a pair equals the target, return their indices.",

    optimal:
      "Use a HashMap to store numbers we have already seen. For each number, calculate the complement and check whether it already exists in the map.",

    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",

    takeaway:
      "A HashMap can reduce the search time from O(n²) to O(n) by providing constant-time lookups.",
  },
];

export default problems;
