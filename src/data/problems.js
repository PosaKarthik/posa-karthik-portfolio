const problems = [
  {
    id: 1,
    title: "Two Sum",
    platform: "LeetCode",
    difficulty: "Easy",
    pattern: "HashMap",

    problem:
      "Given an array of integers and a target, return the indices of the two numbers that add up to the target.",

    bruteForce: {
      explanation:
        "Check every possible pair using two nested loops. If the sum of a pair equals the target, return their indices.",

      code: `public int[] twoSum(int[] nums, int target) {
    for (int i = 0; i < nums.length; i++) {
        for (int j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return new int[] {i, j};
            }
        }
    }

    return new int[] {};
}`,

      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)",
    },

    optimal: {
      explanation:
        "Use a HashMap to store numbers we have already seen. For each number, calculate its complement and check whether it already exists in the map.",

      code: `public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();

    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];

        if (map.containsKey(complement)) {
            return new int[] {
                map.get(complement),
                i
            };
        }

        map.put(nums[i], i);
    }

    return new int[] {};
}`,

      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },

    reasoning:
      "The brute-force approach checks every pair, which becomes expensive as the input grows. A HashMap allows us to quickly check whether the required complement has already been seen, reducing the overall time complexity.",

    takeaway:
      "A HashMap can reduce the search time from O(n²) to O(n) by providing constant-time lookups.",
  },
];

export default problems;
