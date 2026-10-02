const problems = [
  // =========================================================
  // LEETCODE
  // JOURNAL #01 - #24
  // =========================================================

  {
    id: 1,
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

  {
    id: 2,
    title: "Concatenation of Array",
    platform: "LeetCode",
    problemNumber: 1929,
    difficulty: "Easy",
    pattern: "Arrays",
    type: "Documented",

    problem:
      "Given an integer array nums of length n, return an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n.",

    bruteForce: {
      explanation:
        "Create an array of size 2n. Use one loop to copy all elements of nums into the first half, then use a second loop to copy the same elements into the second half.",

      code: `public int[] getConcatenation(int[] nums) {
    int n = nums.length;
    int[] ans = new int[2 * n];

    for (int i = 0; i < n; i++) {
        ans[i] = nums[i];
    }

    for (int i = 0; i < n; i++) {
        ans[n + i] = nums[i];
    }

    return ans;
}`,

      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },

    optimal: {
      explanation:
        "Create the result array with size 2n and use a single loop. For each element, place it in both its original position and the corresponding position in the second half of the result array.",

      code: `public int[] getConcatenation(int[] nums) {
    int n = nums.length;
    int[] ans = new int[2 * n];

    for (int i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }

    return ans;
}`,

      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },

    reasoning:
      "The result must contain the original array twice, so an array of size 2n is required. Instead of using two separate loops, I can place each element in both required positions during the same iteration.",

    takeaway:
      "When the same array needs to be repeated, we can use the result array's two halves and fill both positions in a single loop.",
  },

  {
    id: 3,
    title: "Running Sum of 1d Array",
    platform: "LeetCode",
    problemNumber: 1480,
    difficulty: "Easy",
    pattern: "Arrays",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 4,
    title: "Richest Customer Wealth",
    platform: "LeetCode",
    problemNumber: 1672,
    difficulty: "Easy",
    pattern: "Arrays",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 5,
    title: "Fizz Buzz",
    platform: "LeetCode",
    problemNumber: 412,
    difficulty: "Easy",
    pattern: "Simulation",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 6,
    title: "Number of Steps to Reduce a Number to Zero",
    platform: "LeetCode",
    problemNumber: 1342,
    difficulty: "Easy",
    pattern: "Simulation",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 7,
    title: "Add Two Integers",
    platform: "LeetCode",
    problemNumber: 2235,
    difficulty: "Easy",
    pattern: "Math",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 8,
    title: "Count Odd Numbers in an Interval Range",
    platform: "LeetCode",
    problemNumber: 1523,
    difficulty: "Easy",
    pattern: "Math",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 9,
    title: "Shuffle the Array",
    platform: "LeetCode",
    problemNumber: 1470,
    difficulty: "Easy",
    pattern: "Arrays",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 10,
    title: "Average Salary Excluding the Minimum and Maximum Salary",
    platform: "LeetCode",
    problemNumber: 1491,
    difficulty: "Easy",
    pattern: "Arrays",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 11,
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
      "The brute-force approach checks every pair, which becomes expensive as the input grows. A HashMap allows me to quickly check whether the required complement has already been seen.",

    takeaway:
      "A HashMap can reduce the search time from O(n²) to O(n) by providing constant-time lookups.",
  },

  {
    id: 12,
    title: "Best Time to Buy and Sell Stock",
    platform: "LeetCode",
    problemNumber: 121,
    difficulty: "Easy",
    pattern: "Arrays",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 13,
    title: "Contains Duplicate",
    platform: "LeetCode",
    problemNumber: 217,
    difficulty: "Easy",
    pattern: "HashSet",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 14,
    title: "Single Number",
    platform: "LeetCode",
    problemNumber: 136,
    difficulty: "Easy",
    pattern: "Bit Manipulation",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 15,
    title: "Valid Anagram",
    platform: "LeetCode",
    problemNumber: 242,
    difficulty: "Easy",
    pattern: "HashMap",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 16,
    title: "Move Zeroes",
    platform: "LeetCode",
    problemNumber: 283,
    difficulty: "Easy",
    pattern: "Two Pointers",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 17,
    title: "Squares of a Sorted Array",
    platform: "LeetCode",
    problemNumber: 977,
    difficulty: "Easy",
    pattern: "Two Pointers",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 18,
    title: "Intersection of Two Arrays",
    platform: "LeetCode",
    problemNumber: 349,
    difficulty: "Easy",
    pattern: "HashSet",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 19,
    title: "Intersection of Two Arrays II",
    platform: "LeetCode",
    problemNumber: 350,
    difficulty: "Easy",
    pattern: "HashMap",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 20,
    title: "Valid Sudoku",
    platform: "LeetCode",
    problemNumber: 36,
    difficulty: "Medium",
    pattern: "HashSet",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 21,
    title: "Valid Palindrome",
    platform: "LeetCode",
    problemNumber: 125,
    difficulty: "Easy",
    pattern: "Two Pointers",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 22,
    title: "Reverse String",
    platform: "LeetCode",
    problemNumber: 344,
    difficulty: "Easy",
    pattern: "Two Pointers",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 23,
    title: "Reverse Vowels of a String",
    platform: "LeetCode",
    problemNumber: 345,
    difficulty: "Medium",
    pattern: "Two Pointers",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  {
    id: 24,
    title: "Remove Duplicates from Sorted Array",
    platform: "LeetCode",
    problemNumber: 26,
    difficulty: "Easy",
    pattern: "Two Pointers",
    type: "Documented",

    problem: "",
    bruteForce: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    optimal: {
      explanation: "",
      code: "",
      timeComplexity: "",
      spaceComplexity: "",
    },
    reasoning: "",
    takeaway: "",
  },

  // =========================================================
  // DSA PRACTICE
  // JOURNAL #25 - #48
  // =========================================================

  {
    id: 25,
    title: "Largest Element",
    platform: "DSA Practice",
    practiceNumber: 1,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 26,
    title: "Smallest Element",
    platform: "DSA Practice",
    practiceNumber: 2,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 27,
    title: "Second Largest Element",
    platform: "DSA Practice",
    practiceNumber: 3,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 28,
    title: "Second Smallest Element",
    platform: "DSA Practice",
    practiceNumber: 4,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 29,
    title: "Sum of Array Elements",
    platform: "DSA Practice",
    practiceNumber: 5,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 30,
    title: "Average of Array Elements",
    platform: "DSA Practice",
    practiceNumber: 6,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 31,
    title: "Count Even and Odd Numbers",
    platform: "DSA Practice",
    practiceNumber: 7,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 32,
    title: "Count Positive, Negative & Zero",
    platform: "DSA Practice",
    practiceNumber: 8,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 33,
    title: "Reverse an Array",
    platform: "DSA Practice",
    practiceNumber: 9,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 34,
    title: "Frequency of Array Elements",
    platform: "DSA Practice",
    practiceNumber: 10,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 35,
    title: "Find Duplicate Elements",
    platform: "DSA Practice",
    practiceNumber: 11,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 36,
    title: "Move Zeroes",
    platform: "DSA Practice",
    practiceNumber: 12,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 37,
    title: "Missing Number",
    platform: "DSA Practice",
    practiceNumber: 13,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 38,
    title: "Remove Duplicates",
    platform: "DSA Practice",
    practiceNumber: 14,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 39,
    title: "Maximum Difference",
    platform: "DSA Practice",
    practiceNumber: 15,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 40,
    title: "Best Time to Buy and Sell Stock",
    platform: "DSA Practice",
    practiceNumber: 16,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 41,
    title: "Common Elements",
    platform: "DSA Practice",
    practiceNumber: 17,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 42,
    title: "Leaders in an Array",
    platform: "DSA Practice",
    practiceNumber: 18,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 43,
    title: "Move Negative Numbers",
    platform: "DSA Practice",
    practiceNumber: 19,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 44,
    title: "First Repeating Element",
    platform: "DSA Practice",
    practiceNumber: 20,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 45,
    title: "First Non-Repeating Element",
    platform: "DSA Practice",
    practiceNumber: 21,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 46,
    title: "Check if Array is Sorted",
    platform: "DSA Practice",
    practiceNumber: 22,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 47,
    title: "Find Missing Positive Number",
    platform: "DSA Practice",
    practiceNumber: 23,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 48,
    title: "Find the Maximum Consecutive 1s",
    platform: "DSA Practice",
    practiceNumber: 24,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },
];

export default problems;
