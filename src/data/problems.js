const problems = [
  {
    id: 1,
    title: "Two Sum",
    platform: "LeetCode",
    problemNumber: 1,
    difficulty: "Easy",
    pattern: "HashMap",
    type: "Documented",

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

  {
    id: 2,
    title: "Average of Array Elements",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 3,
    title: "Best Time to Buy and Sell Stock",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 4,
    title: "Common Elements",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 5,
    title: "Count Even and Odd Numbers",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 6,
    title: "Count Positive, Negative & Zero",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 7,
    title: "Check If Array Is Sorted",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 8,
    title: "Find Missing Positive Number",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 9,
    title: "Find Duplicate Elements",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 10,
    title: "First Non-Repeating Element",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 11,
    title: "First Repeating Element",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 12,
    title: "Frequency of Array Elements",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 13,
    title: "Largest Element",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 14,
    title: "Leaders in Array",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 15,
    title: "Maximum Difference",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 16,
    title: "Missing Number",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 17,
    title: "Move Negative Numbers",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 18,
    title: "Move Zeroes",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 19,
    title: "Remove Duplicates",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 20,
    title: "Reverse Array",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 21,
    title: "Second Largest Element",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 22,
    title: "Second Smallest Element",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 23,
    title: "Smallest Element",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 24,
    title: "Sum of Array Elements",
    platform: "DSA Practice",
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 25,
    title: "Max Consecutive Ones",
    platform: "LeetCode",
    problemNumber: 485,
    difficulty: "Easy",
    pattern: "Arrays",
    type: "Documented",

    problem:
      "Given a binary array nums, return the maximum number of consecutive 1s in the array.",

    bruteForce: {
      explanation:
        "Traverse the array and count consecutive 1s. Whenever a 0 is encountered, reset the current count and keep track of the maximum count found so far.",

      code: `public int findMaxConsecutiveOnes(int[] nums) {
    int maxCount = 0;

    for (int i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            int count = 0;

            while (i < nums.length && nums[i] == 1) {
                count++;
                i++;
            }

            maxCount = Math.max(maxCount, count);
        }
    }

    return maxCount;
}`,

      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
    },

    optimal: {
      explanation:
        "Maintain a running count of consecutive 1s while traversing the array once. When a 1 is found, increase the count. When a 0 is found, reset the count. At every step, update the maximum count.",

      code: `public int findMaxConsecutiveOnes(int[] nums) {
    int currentCount = 0;
    int maxCount = 0;

    for (int num : nums) {
        if (num == 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}`,

      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
    },

    reasoning:
      "The array only contains 0s and 1s, so I can track the current sequence of consecutive 1s with a single counter. When the sequence breaks because of a 0, I reset the counter. Keeping a separate maximum allows me to remember the longest sequence found so far.",

    takeaway:
      "For consecutive-element problems, a running counter can often track the current sequence efficiently while a second variable keeps the best result.",
  },
];

export default problems;
