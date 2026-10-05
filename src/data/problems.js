const problems = [
  // ============================================================
  // LEETCODE
  // JOURNAL #01 - #24
  // ============================================================

  {
    id: 1,
    title: "Max Consecutive Ones",
    platform: "LeetCode",
    problemNumber: 485,
    difficulty: "Easy",
    pattern: "Arrays",
    type: "Documented",

    problem:
      "Given a binary array nums, return the maximum number of consecutive 1's in the array.",

    bruteForce: {
      explanation:
        "Scan the array and whenever a 1 is found, count the consecutive 1's until a 0 is reached.",
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
        "Maintain a running count of consecutive 1's. Reset the count when a 0 is found and update the maximum.",
      code: `public int findMaxConsecutiveOnes(int[] nums) {
    int count = 0;
    int maxCount = 0;

    for (int num : nums) {
        if (num == 1) {
            count++;
            maxCount = Math.max(maxCount, count);
        } else {
            count = 0;
        }
    }

    return maxCount;
}`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
    },

    reasoning:
      "I only need to keep track of the current sequence of 1's and the maximum sequence found so far.",

    takeaway:
      "A running counter is useful when we need to find the longest consecutive sequence.",
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
      "Given an integer array nums of length n, create an array ans of length 2n where ans[i] = nums[i] and ans[i+n] = nums[i].",

    bruteForce: {
      explanation:
        "Create a new array of size 2n and copy the original array into both halves.",
      code: `int n = nums.length;
int[] ans = new int[n * 2];

for (int i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
}

return ans;`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },

    optimal: {
      explanation:
        "Use one loop and directly place each value into both corresponding positions.",
      code: `int n = nums.length;
int[] ans = new int[n * 2];

for (int i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
}

return ans;`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },

    reasoning:
      "The required output contains the original array twice, so each input value can be placed into two positions during one traversal.",

    takeaway:
      "When constructing an output array with a predictable structure, direct index mapping keeps the solution simple.",
  },

  {
    id: 3,
    title: "Running Sum of 1d Array",
    platform: "LeetCode",
    problemNumber: 1480,
    difficulty: "Easy",
    pattern: "Arrays",
    type: "Documented",

    problem:
      "Given an array nums, return the running sum of nums. The running sum at index i is the sum of elements from index 0 through i.",

    bruteForce: {
      explanation:
        "Calculate each running sum from the beginning of the array for every index.",
      code: `public int[] runningSum(int[] nums) {
    int[] result = new int[nums.length];

    for (int i = 0; i < nums.length; i++) {
        int sum = 0;

        for (int j = 0; j <= i; j++) {
            sum += nums[j];
        }

        result[i] = sum;
    }

    return result;
}`,
      timeComplexity: "O(n²)",
      spaceComplexity: "O(n)",
    },

    optimal: {
      explanation:
        "Reuse the previous running sum and update the array in place.",
      code: `public int[] runningSum(int[] nums) {
    for (int i = 1; i < nums.length; i++) {
        nums[i] = nums[i - 1] + nums[i];
    }

    return nums;
}`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(1) extra",
    },

    reasoning:
      "Every running sum depends on the previous running sum, so I can reuse nums[i - 1] instead of recalculating the sum from the beginning.",

    takeaway:
      "When a result depends on the previous result, reuse the previous value instead of recalculating it.",
  },

  {
    id: 4,
    title: "Richest Customer Wealth",
    platform: "LeetCode",
    problemNumber: 1672,
    difficulty: "Easy",
    pattern: "Arrays",
    type: "Documented",

    problem:
      "You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i-th customer has in the j-th bank. Return the wealth of the richest customer.",

    bruteForce: {
      explanation:
        "Calculate each customer's total wealth and keep the maximum.",
      code: `public int maximumWealth(int[][] accounts) {
    int maximumWealth = 0;

    for (int[] customer : accounts) {
        int currentWealth = 0;

        for (int money : customer) {
            currentWealth += money;
        }

        maximumWealth = Math.max(currentWealth, maximumWealth);
    }

    return maximumWealth;
}`,
      timeComplexity: "O(m × n)",
      spaceComplexity: "O(1)",
    },

    optimal: {
      explanation:
        "The direct row-by-row calculation is already optimal because every account value must be examined.",
      code: `public int maximumWealth(int[][] accounts) {
    int maximumWealth = 0;

    for (int[] customer : accounts) {
        int currentWealth = 0;

        for (int money : customer) {
            currentWealth += money;
        }

        maximumWealth = Math.max(currentWealth, maximumWealth);
    }

    return maximumWealth;
}`,
      timeComplexity: "O(m × n)",
      spaceComplexity: "O(1)",
    },

    reasoning:
      "I calculate each customer's total wealth and immediately compare it with the current maximum, so I do not need to store all customer totals.",

    takeaway:
      "For matrix problems asking for a row aggregate, process one row at a time and keep only the result you need.",
  },

  {
    id: 5,
    title: "Fizz Buzz",
    platform: "LeetCode",
    problemNumber: 412,
    difficulty: "Easy",
    pattern: "Simulation",
    type: "Documented",

    problem:
      "Given an integer n, return a string array where numbers divisible by 3 are replaced with Fizz, numbers divisible by 5 with Buzz, and numbers divisible by both with FizzBuzz.",

    bruteForce: {
      explanation: "Check every number from 1 to n using modulo conditions.",
      code: `List<String> answer = new ArrayList<>();

for (int i = 1; i <= n; i++) {
    if (i % 15 == 0) {
        answer.add("FizzBuzz");
    } else if (i % 3 == 0) {
        answer.add("Fizz");
    } else if (i % 5 == 0) {
        answer.add("Buzz");
    } else {
        answer.add(String.valueOf(i));
    }
}

return answer;`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n) output",
    },

    optimal: {
      explanation:
        "Check the combined condition first, then the individual conditions.",
      code: `List<String> answer = new ArrayList<>();

for (int i = 1; i <= n; i++) {
    if (i % 15 == 0) {
        answer.add("FizzBuzz");
    } else if (i % 3 == 0) {
        answer.add("Fizz");
    } else if (i % 5 == 0) {
        answer.add("Buzz");
    } else {
        answer.add(String.valueOf(i));
    }
}

return answer;`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n) output",
    },

    reasoning:
      "I check divisibility by both 3 and 5 first so the FizzBuzz case is handled before the individual cases.",

    takeaway:
      "Condition order matters when one case overlaps with other cases.",
  },

  {
    id: 6,
    title: "Number of Steps to Reduce a Number to Zero",
    platform: "LeetCode",
    problemNumber: 1342,
    difficulty: "Easy",
    pattern: "Simulation",
    type: "Documented",

    problem:
      "Given an integer num, return the number of steps to reduce it to zero. If num is even, divide it by 2; otherwise subtract 1.",

    bruteForce: {
      explanation: "Simulate the required operation until num becomes zero.",
      code: `int count = 0;

while (num > 0) {
    if (num % 2 == 0) {
        num /= 2;
    } else {
        num--;
    }

    count++;
}

return count;`,
      timeComplexity: "O(log n)",
      spaceComplexity: "O(1)",
    },

    optimal: {
      explanation:
        "Direct simulation is sufficient because every operation follows the given rules.",
      code: `int count = 0;

while (num > 0) {
    if (num % 2 == 0) {
        num /= 2;
    } else {
        num--;
    }

    count++;
}

return count;`,
      timeComplexity: "O(log n)",
      spaceComplexity: "O(1)",
    },

    reasoning:
      "I follow the problem's rules directly: divide even numbers by 2 and subtract 1 from odd numbers, counting every operation.",

    takeaway:
      "When a problem gives a deterministic set of operations, direct simulation can be the simplest solution.",
  },

  {
    id: 7,
    title: "Add Two Integers",
    platform: "LeetCode",
    problemNumber: 2235,
    difficulty: "Easy",
    pattern: "Math",
    type: "Documented",

    problem:
      "Given two integers num1 and num2, return the sum of the two integers.",

    bruteForce: {
      explanation:
        "There is no meaningful slower algorithm; the operation itself is constant time.",
      code: `public int sum(int num1, int num2) {
    return num1 + num2;
}`,
      timeComplexity: "O(1)",
      spaceComplexity: "O(1)",
    },

    optimal: {
      explanation: "Use the Java addition operator directly.",
      code: `public int sum(int num1, int num2) {
    return num1 + num2;
}`,
      timeComplexity: "O(1)",
      spaceComplexity: "O(1)",
    },

    reasoning:
      "The problem directly asks for the sum, so returning num1 + num2 is sufficient.",

    takeaway:
      "Recognizing when a direct operation solves the problem is also an important problem-solving skill.",
  },

  {
    id: 8,
    title: "Count Odd Numbers in an Interval Range",
    platform: "LeetCode",
    problemNumber: 1523,
    difficulty: "Easy",
    pattern: "Math",
    type: "Documented",

    problem:
      "Given two non-negative integers low and high, return the number of odd numbers between low and high, inclusive.",

    bruteForce: {
      explanation:
        "Check every number in the interval and count the odd values.",
      code: `public int countOdds(int low, int high) {
    int count = 0;

    for (int i = low; i <= high; i++) {
        if (i % 2 != 0) {
            count++;
        }
    }

    return count;
}`,
      timeComplexity: "O(high - low + 1)",
      spaceComplexity: "O(1)",
    },

    optimal: {
      explanation:
        "Use a mathematical formula instead of iterating through the interval.",
      code: `public int countOdds(int low, int high) {
    return (high + 1) / 2 - low / 2;
}`,
      timeComplexity: "O(1)",
      spaceComplexity: "O(1)",
    },

    reasoning:
      "The brute-force approach checks every number, but the number of odds can be calculated directly with a formula.",

    takeaway:
      "Look for mathematical patterns when a loop only counts values with a predictable property.",
  },
  {
    id: 9,
    title: "Shuffle the Array",
    platform: "LeetCode",
    problemNumber: 1470,
    difficulty: "Easy",
    pattern: "Arrays",
    type: "Documented",

    problem:
      "Given an array nums containing 2n elements in the form [x1,...,xn,y1,...,yn], return [x1,y1,x2,y2,...,xn,yn].",

    bruteForce: {
      explanation:
        "Create a result array and place a value from each half in alternating positions.",
      code: `int[] result = new int[n * 2];
int j = 0;

for (int i = 0; i < n; i++) {
    result[j++] = nums[i];
    result[j++] = nums[n + i];
}`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },

    optimal: {
      explanation:
        "Use a write pointer to place both corresponding values during one traversal.",
      code: `int[] result = new int[n * 2];
int j = 0;

for (int i = 0; i < n; i++) {
    result[j++] = nums[i];
    result[j++] = nums[n + i];
}`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },

    reasoning:
      "The input is split into two halves. For each index in the first half, I take the corresponding value from the second half and place them next to each other.",

    takeaway:
      "A separate output array and a write pointer make rearrangement problems straightforward.",
  },

  {
    id: 10,
    title: "Average Salary Excluding the Minimum and Maximum Salary",
    platform: "LeetCode",
    problemNumber: 1491,
    difficulty: "Easy",
    pattern: "Arrays",
    type: "Documented",

    problem:
      "Given an array of unique employee salaries, return the average salary after excluding the minimum and maximum salary.",

    bruteForce: {
      explanation:
        "Track the total sum, minimum, and maximum in one traversal.",
      code: `int minimum = Integer.MAX_VALUE;
int maximum = Integer.MIN_VALUE;
double totalSum = 0.0;

for (int employeeSalary : salary) {
    minimum = Math.min(minimum, employeeSalary);
    maximum = Math.max(maximum, employeeSalary);
    totalSum += employeeSalary;
}

return (totalSum - minimum - maximum) / (salary.length - 2);`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
    },

    optimal: {
      explanation:
        "Avoid sorting and calculate minimum, maximum, and total in one pass.",
      code: `int minimum = Integer.MAX_VALUE;
int maximum = Integer.MIN_VALUE;
double totalSum = 0.0;

for (int employeeSalary : salary) {
    minimum = Math.min(minimum, employeeSalary);
    maximum = Math.max(maximum, employeeSalary);
    totalSum += employeeSalary;
}

return (totalSum - minimum - maximum) / (salary.length - 2);`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
    },

    reasoning:
      "I do not need to sort. I can find the minimum, maximum, and total sum in one traversal and then exclude the two extreme values.",

    takeaway:
      "If only minimum, maximum, and sum are required, sorting is unnecessary.",
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
      "Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.",

    bruteForce: {
      explanation:
        "Check every possible pair of elements and return the indices when their sum equals the target.",
      code: `for (int i = 0; i < nums.length; i++) {
    for (int j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) {
            return new int[] {i, j};
        }
    }
}

return new int[] {-1, -1};`,
      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)",
    },

    optimal: {
      explanation:
        "Use a HashMap to store previously seen values and their indices. For every value, check whether target - value already exists.",
      code: `HashMap<Integer, Integer> answer = new HashMap<>();

for (int i = 0; i < nums.length; i++) {
    int required = target - nums[i];

    if (answer.containsKey(required)) {
        return new int[] {answer.get(required), i};
    }

    answer.put(nums[i], i);
}

return new int[] {-1, -1};`,
      timeComplexity: "O(n) average",
      spaceComplexity: "O(n)",
    },

    reasoning:
      "Instead of checking every pair, I calculate the required value for the current number and check whether I have already seen it using a HashMap.",

    takeaway:
      "HashMap can reduce a pair-search problem from quadratic time to linear average time.",
  },

  {
    id: 12,
    title: "Best Time to Buy and Sell Stock",
    platform: "LeetCode",
    problemNumber: 121,
    difficulty: "Easy",
    pattern: "Arrays",
    type: "Documented",

    problem:
      "Given an array of stock prices where prices[i] is the price on day i, choose one day to buy and a later day to sell to maximize profit.",

    bruteForce: {
      explanation: "Try every possible buying day and every later selling day.",
      code: `public int maxProfit(int[] prices) {
    int maximumProfit = 0;

    for (int i = 0; i < prices.length; i++) {
        for (int j = i + 1; j < prices.length; j++) {
            maximumProfit = Math.max(
                maximumProfit,
                prices[j] - prices[i]
            );
        }
    }

    return maximumProfit;
}`,
      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)",
    },

    optimal: {
      explanation:
        "Track the minimum price seen so far and calculate the best profit using the current price.",
      code: `int minimum = prices[0];
int maximumProfit = 0;

for (int stock : prices) {
    if (stock > minimum) {
        maximumProfit =
            Math.max(maximumProfit, stock - minimum);
    }

    minimum = Math.min(minimum, stock);
}

return maximumProfit;`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
    },

    reasoning:
      "I only need the cheapest price seen before the current day. If today's price is higher, I can calculate the profit from selling today.",

    takeaway:
      "When a future result depends on a previous value, track the best previous value while scanning forward.",
  },

  {
    id: 13,
    title: "Contains Duplicate",
    platform: "LeetCode",
    problemNumber: 217,
    difficulty: "Easy",
    pattern: "HashSet",
    type: "Documented",

    problem:
      "Given an integer array nums, return true if any value appears at least twice and false if every element is distinct.",

    bruteForce: {
      explanation: "Compare every element with every later element.",
      code: `for (int i = 0; i < nums.length; i++) {
    for (int j = i + 1; j < nums.length; j++) {
        if (nums[i] == nums[j]) {
            return true;
        }
    }
}

return false;`,
      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)",
    },

    optimal: {
      explanation:
        "Use a HashSet to store values already seen and detect duplicates immediately.",
      code: `HashSet<Integer> hashSet = new HashSet<>();

for (int value : nums) {
    if (hashSet.contains(value)) {
        return true;
    }

    hashSet.add(value);
}

return false;`,
      timeComplexity: "O(n) average",
      spaceComplexity: "O(n)",
    },

    reasoning:
      "Instead of comparing each element with every other element, I remember the values already seen. If the current value is already in the HashSet, it is a duplicate.",

    takeaway:
      "Use a HashSet when fast membership checking and uniqueness are the main requirements.",
  },

  {
    id: 14,
    title: "Single Number",
    platform: "LeetCode",
    problemNumber: 136,
    difficulty: "Easy",
    pattern: "Bit Manipulation",
    type: "Documented",

    problem:
      "Given a non-empty array of integers where every element appears twice except for one element, find the element that appears only once.",

    bruteForce: {
      explanation:
        "Count the frequency of every number and return the number whose frequency is one.",
      code: `HashMap<Integer, Integer> frequency = new HashMap<>();

for (int value : nums) {
    frequency.put(
        value,
        frequency.getOrDefault(value, 0) + 1
    );
}

for (int value : nums) {
    if (frequency.get(value) == 1) {
        return value;
    }
}

return -1;`,
      timeComplexity: "O(n) average",
      spaceComplexity: "O(n)",
    },

    optimal: {
      explanation:
        "Use XOR because equal values cancel each other and XOR with zero leaves the remaining value.",
      code: `int result = 0;

for (int value : nums) {
    result ^= value;
}

return result;`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
    },

    reasoning:
      "Every number except one appears twice. Since a ^ a is 0 and a ^ 0 is a, all duplicate values cancel and only the single value remains.",

    takeaway:
      "XOR is a powerful constant-space technique for finding an unpaired value.",
  },

  {
    id: 15,
    title: "Valid Anagram",
    platform: "LeetCode",
    problemNumber: 242,
    difficulty: "Easy",
    pattern: "Frequency Array",
    type: "Documented",

    problem:
      "Given two strings s and t, return true if t is an anagram of s and false otherwise.",

    bruteForce: {
      explanation:
        "Use a frequency map to count characters in s and subtract frequencies using t.",
      code: `if (s.length() != t.length()) {
    return false;
}

HashMap<Character, Integer> count = new HashMap<>();

for (char c : s.toCharArray()) {
    count.put(
        c,
        count.getOrDefault(c, 0) + 1
    );
}

for (char c : t.toCharArray()) {
    count.put(
        c,
        count.getOrDefault(c, 0) - 1
    );
}

for (int value : count.values()) {
    if (value != 0) {
        return false;
    }
}

return true;`,
      timeComplexity: "O(n) average",
      spaceComplexity: "O(k)",
    },

    optimal: {
      explanation:
        "Because the input uses lowercase English letters, use a fixed array of 26 character frequencies.",
      code: `if (s.length() != t.length()) {
    return false;
}

int[] count = new int[26];

for (char c : s.toCharArray()) {
    count[c - 'a']++;
}

for (char c : t.toCharArray()) {
    count[c - 'a']--;
}

for (int x : count) {
    if (x != 0) {
        return false;
    }
}

return true;`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
    },

    reasoning:
      "Anagrams contain the same characters with the same frequencies. Since the characters are lowercase English letters, a 26-element array is enough.",

    takeaway:
      "A fixed, small character set can make a frequency array simpler than a HashMap.",
  },

  {
    id: 16,
    title: "Move Zeroes",
    platform: "LeetCode",
    problemNumber: 283,
    difficulty: "Easy",
    pattern: "Two Pointers",
    type: "Documented",

    problem:
      "Given an integer array nums, move all 0s to the end while maintaining the relative order of the non-zero elements.",

    bruteForce: {
      explanation:
        "Move all non-zero values to the front and fill the remaining positions with zeroes.",
      code: `int j = 0;

for (int i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
        nums[j++] = nums[i];
    }
}

for (int i = j; i < nums.length; i++) {
    nums[i] = 0;
}`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
    },

    optimal: {
      explanation:
        "Use two pointers and swap each non-zero value into the next available position.",
      code: `int j = 0;

for (int i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        j++;
    }
}`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
    },

    reasoning:
      "The pointer j represents the next position where a non-zero element should go, while i scans the array.",

    takeaway:
      "Two pointers can rearrange an array in place while preserving the order of selected elements.",
  },

  {
    id: 17,
    title: "Squares of a Sorted Array",
    platform: "LeetCode",
    problemNumber: 977,
    difficulty: "Easy",
    pattern: "Two Pointers",
    type: "Documented",

    problem:
      "Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",

    bruteForce: {
      explanation: "Square every value and sort the resulting array.",
      code: `int[] result = new int[nums.length];

for (int i = 0; i < nums.length; i++) {
    result[i] = nums[i] * nums[i];
}

Arrays.sort(result);

return result;`,
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(n)",
    },

    optimal: {
      explanation:
        "Compare absolute values at the two ends and fill the result from the end.",
      code: `int[] result = new int[nums.length];

int l = 0;
int r = nums.length - 1;
int index = nums.length - 1;

while (l <= r) {
    if (Math.abs(nums[l]) > Math.abs(nums[r])) {
        result[index] = nums[l] * nums[l];
        l++;
    } else {
        result[index] = nums[r] * nums[r];
        r--;
    }

    index--;
}

return result;`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n) output",
    },

    reasoning:
      "The largest square must come from either end of the sorted array. I compare the absolute values at both ends and fill the result from the back.",

    takeaway:
      "Sorted input can provide enough structure for two pointers to replace sorting.",
  },

  {
    id: 18,
    title: "Intersection of Two Arrays",
    platform: "LeetCode",
    problemNumber: 349,
    difficulty: "Easy",
    pattern: "HashSet",
    type: "Documented",

    problem:
      "Given two integer arrays nums1 and nums2, return their intersection. Each element in the result must be unique.",

    bruteForce: {
      explanation:
        "Compare values from both arrays and store matching values in a set so duplicates are removed.",
      code: `HashSet<Integer> result = new HashSet<>();

for (int x : nums1) {
    for (int y : nums2) {
        if (x == y) {
            result.add(x);
            break;
        }
    }
}

int[] intersection = new int[result.size()];
int i = 0;

for (int x : result) {
    intersection[i++] = x;
}

return intersection;`,
      timeComplexity: "O(n × m)",
      spaceComplexity: "O(k)",
    },

    optimal: {
      explanation:
        "Store nums1 in a HashSet and check nums2 against it. A second set keeps the result unique.",
      code: `HashSet<Integer> set = new HashSet<>();
HashSet<Integer> result = new HashSet<>();

for (int x : nums1) {
    set.add(x);
}

for (int x : nums2) {
    if (set.contains(x)) {
        result.add(x);
    }
}

int[] interSection = new int[result.size()];
int i = 0;

for (int x : result) {
    interSection[i++] = x;
}

return interSection;`,
      timeComplexity: "O(n + m) average",
      spaceComplexity: "O(n + k)",
    },

    reasoning:
      "The result must contain unique values, so a HashSet fits naturally. I store nums1 values and then check which nums2 values are present.",

    takeaway:
      "HashSet provides fast membership checking and naturally handles uniqueness.",
  },

  {
    id: 19,
    title: "Intersection of Two Arrays II",
    platform: "LeetCode",
    problemNumber: 350,
    difficulty: "Easy",
    pattern: "HashMap",
    type: "Documented",

    problem:
      "Given two integer arrays nums1 and nums2, return their intersection including duplicates. Each element may appear as many times as it occurs in both arrays.",

    bruteForce: {
      explanation:
        "Track how many times each value occurs in nums1 and consume one occurrence when the same value appears in nums2.",
      code: `List<Integer> list = new ArrayList<>();
HashMap<Integer, Integer> hashMap = new HashMap<>();

for (int x : nums1) {
    hashMap.put(
        x,
        hashMap.getOrDefault(x, 0) + 1
    );
}

for (int x : nums2) {
    if (hashMap.containsKey(x) &&
        hashMap.get(x) > 0) {

        list.add(x);
        hashMap.put(
            x,
            hashMap.get(x) - 1
        );
    }
}

int[] interSection = new int[list.size()];
int j = 0;

for (int x : list) {
    interSection[j++] = x;
}

return interSection;`,
      timeComplexity: "O(n + m) average",
      spaceComplexity: "O(n)",
    },

    optimal: {
      explanation:
        "Use a frequency HashMap. Each match is added to the result and its remaining frequency is decreased.",
      code: `List<Integer> list = new ArrayList<>();
HashMap<Integer, Integer> hashMap = new HashMap<>();

for (int x : nums1) {
    hashMap.put(
        x,
        hashMap.getOrDefault(x, 0) + 1
    );
}

for (int x : nums2) {
    if (hashMap.containsKey(x)) {
        if (hashMap.get(x) > 0) {
            list.add(x);
            hashMap.put(
                x,
                hashMap.get(x) - 1
            );
        }
    }
}

int[] interSection = new int[list.size()];
int j = 0;

for (int x : list) {
    interSection[j++] = x;
}

return interSection;`,
      timeComplexity: "O(n + m) average",
      spaceComplexity: "O(n)",
    },

    reasoning:
      "Duplicates matter here, so a HashSet is not enough. I need the frequency of each number and decrease it whenever a matching value is used.",

    takeaway:
      "When duplicates matter, track frequency instead of only presence.",
  },

  {
    id: 20,
    title: "Valid Sudoku",
    platform: "LeetCode",
    problemNumber: 36,
    difficulty: "Medium",
    pattern: "HashSet",
    type: "Documented",

    problem:
      "Determine if a 9 x 9 Sudoku board is valid. Each row, column, and 3 x 3 sub-box must contain no repeated digits other than empty cells.",

    bruteForce: {
      explanation:
        "Check rows, columns, and each 3 x 3 box separately using a HashSet for each group.",
      code: `public boolean isValidSudoku(char[][] board) {
    for (int i = 0; i < board.length; i++) {
        HashSet<Character> hashSet = new HashSet<>();

        for (int j = 0; j < board[0].length; j++) {
            if (board[i][j] != '.') {
                if (!hashSet.contains(board[i][j])) {
                    hashSet.add(board[i][j]);
                } else {
                    return false;
                }
            }
        }
    }

    for (int i = 0; i < board.length; i++) {
        HashSet<Character> hashSet = new HashSet<>();

        for (int j = 0; j < board[0].length; j++) {
            if (board[j][i] != '.') {
                if (!hashSet.contains(board[j][i])) {
                    hashSet.add(board[j][i]);
                } else {
                    return false;
                }
            }
        }
    }

    for (int startRow = 0; startRow < 9; startRow += 3) {
        for (int startColumn = 0; startColumn < 9; startColumn += 3) {
            HashSet<Character> hashSet = new HashSet<>();

            for (int i = startRow; i < startRow + 3; i++) {
                for (int j = startColumn; j < startColumn + 3; j++) {
                    if (board[i][j] != '.') {
                        if (!hashSet.contains(board[i][j])) {
                            hashSet.add(board[i][j]);
                        } else {
                            return false;
                        }
                    }
                }
            }
        }
    }

    return true;
}`,
      timeComplexity: "O(1) for fixed 9 × 9 board",
      spaceComplexity: "O(1) for fixed 9 × 9 board",
    },

    optimal: {
      explanation:
        "Check every row, column, and 3 x 3 box using HashSet.add() to detect duplicates directly.",
      code: `public boolean isValidSudoku(char[][] board) {
    for (int i = 0; i < board.length; i++) {
        HashSet<Character> hashSet = new HashSet<>();

        for (int j = 0; j < board[0].length; j++) {
            if (board[i][j] != '.') {
                if (!hashSet.add(board[i][j])) {
                    return false;
                }
            }
        }
    }

    for (int i = 0; i < board.length; i++) {
        HashSet<Character> hashSet = new HashSet<>();

        for (int j = 0; j < board[0].length; j++) {
            if (board[j][i] != '.') {
                if (!hashSet.add(board[j][i])) {
                    return false;
                }
            }
        }
    }

    for (int startRow = 0; startRow < 9; startRow += 3) {
        for (int startColumn = 0; startColumn < 9; startColumn += 3) {
            HashSet<Character> hashSet = new HashSet<>();

            for (int i = startRow; i < startRow + 3; i++) {
                for (int j = startColumn; j < startColumn + 3; j++) {
                    if (board[i][j] != '.') {
                        if (!hashSet.add(board[i][j])) {
                            return false;
                        }
                    }
                }
            }
        }
    }

    return true;
}`,
      timeComplexity: "O(1) for fixed 9 × 9 board",
      spaceComplexity: "O(1) for fixed 9 × 9 board",
    },

    reasoning:
      "I separate validation into rows, columns, and 3 x 3 boxes. A HashSet detects whether a number has already appeared in each group.",

    takeaway:
      "Breaking a constraint-heavy problem into independent checks makes the logic easier to understand and debug.",
  },

  {
    id: 21,
    title: "Valid Palindrome",
    platform: "LeetCode",
    problemNumber: 125,
    difficulty: "Easy",
    pattern: "Two Pointers",
    type: "Documented",

    problem:
      "Given a string s, determine if it is a palindrome after converting uppercase letters to lowercase and removing all non-alphanumeric characters.",

    bruteForce: {
      explanation: "Create a cleaned string and compare it with its reverse.",
      code: `StringBuilder cleaned = new StringBuilder();

for (char c : s.toCharArray()) {
    if (Character.isLetterOrDigit(c)) {
        cleaned.append(Character.toLowerCase(c));
    }
}

String value = cleaned.toString();
String reversed = cleaned.reverse().toString();

return value.equals(reversed);`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },

    optimal: {
      explanation:
        "Use two pointers from both ends, skipping non-alphanumeric characters and comparing lowercase characters.",
      code: `int i = 0;
int j = s.length() - 1;

while (i < j) {

    while (i < j &&
           !(s.charAt(i) >= 'a' && s.charAt(i) <= 'z') &&
           !(s.charAt(i) >= 'A' && s.charAt(i) <= 'Z') &&
           !(s.charAt(i) >= '0' && s.charAt(i) <= '9')) {
        i++;
    }

    while (i < j &&
           !(s.charAt(j) >= 'a' && s.charAt(j) <= 'z') &&
           !(s.charAt(j) >= 'A' && s.charAt(j) <= 'Z') &&
           !(s.charAt(j) >= '0' && s.charAt(j) <= '9')) {
        j--;
    }

    char left = Character.toLowerCase(s.charAt(i));
    char right = Character.toLowerCase(s.charAt(j));

    if (left != right) {
        return false;
    }

    i++;
    j--;
}

return true;`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(1) extra",
    },

    reasoning:
      "I compare valid characters directly from both ends instead of creating a cleaned string. The two pointers skip non-alphanumeric characters.",

    takeaway:
      "Two pointers can reduce extra memory when a string can be processed from both ends.",
  },

  {
    id: 22,
    title: "Reverse String",
    platform: "LeetCode",
    problemNumber: 344,
    difficulty: "Easy",
    pattern: "Two Pointers",
    type: "Documented",

    problem: "Write a function that reverses an array of characters in place.",

    bruteForce: {
      explanation: "Create another array in reverse order and copy it back.",
      code: `char[] result = new char[s.length];

for (int i = 0; i < s.length; i++) {
    result[i] = s[s.length - 1 - i];
}

for (int i = 0; i < s.length; i++) {
    s[i] = result[i];
}`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },

    optimal: {
      explanation:
        "Use two pointers and swap characters from both ends toward the center.",
      code: `int left = 0;
int right = s.length - 1;

while (left < right) {
    char temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
}`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
    },

    reasoning:
      "The first and last characters are swapped, then the second and second-last characters, continuing toward the center.",

    takeaway:
      "Two pointers and swapping can reverse an array in place with constant extra space.",
  },

  {
    id: 23,
    title: "Reverse Vowels of a String",
    platform: "LeetCode",
    problemNumber: 345,
    difficulty: "Easy",
    pattern: "Two Pointers",
    type: "Documented",

    problem:
      "Given a string s, reverse only the vowels of the string and return the resulting string.",

    bruteForce: {
      explanation:
        "Collect the vowels, reverse their order, and place them back at the original vowel positions.",
      code: `List<Character> vowels = new ArrayList<>();
char[] c = s.toCharArray();

for (char value : c) {
    if ("aeiouAEIOU".indexOf(value) >= 0) {
        vowels.add(value);
    }
}

int index = vowels.size() - 1;

for (int i = 0; i < c.length; i++) {
    if ("aeiouAEIOU".indexOf(c[i]) >= 0) {
        c[i] = vowels.get(index--);
    }
}

return String.valueOf(c);`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },

    optimal: {
      explanation:
        "Use two pointers to find vowels from both sides and swap them.",
      code: `HashSet<Character> hashSet =
    new HashSet<>(List.of(
        'a', 'A', 'e', 'E', 'i',
        'I', 'o', 'O', 'u', 'U'
    ));

char[] c = s.toCharArray();

int i = 0;
int j = c.length - 1;

while (i < j) {

    while (i < j && !hashSet.contains(c[i])) {
        i++;
    }

    while (i < j && !hashSet.contains(c[j])) {
        j--;
    }

    char temp = c[i];
    c[i] = c[j];
    c[j] = temp;

    i++;
    j--;
}

return String.valueOf(c);`,
      timeComplexity: "O(n) average",
      spaceComplexity: "O(1) auxiliary",
    },

    reasoning:
      "Only vowels need to move, so two pointers find the next vowel from each side and swap them.",

    takeaway:
      "Two pointers are useful when only selected elements in a sequence need to be rearranged.",
  },

  {
    id: 24,
    title: "Remove Duplicates from Sorted Array",
    platform: "LeetCode",
    problemNumber: 26,
    difficulty: "Easy",
    pattern: "Two Pointers",
    type: "Documented",

    problem:
      "Given an integer array nums sorted in non-decreasing order, remove the duplicates in place so each unique element appears only once and return the number of unique elements.",

    bruteForce: {
      explanation:
        "Use a separate collection to store unique values and then copy them back into nums.",
      code: `List<Integer> unique = new ArrayList<>();

for (int value : nums) {
    if (unique.isEmpty() ||
        unique.get(unique.size() - 1) != value) {
        unique.add(value);
    }
}

for (int i = 0; i < unique.size(); i++) {
    nums[i] = unique.get(i);
}

return unique.size();`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },

    optimal: {
      explanation:
        "Because the array is sorted, use two pointers. prev tracks the last unique position and current scans for the next different value.",
      code: `int prev = 0;

for (int current = 1; current < nums.length; current++) {
    if (nums[prev] != nums[current]) {
        prev++;
        nums[prev] = nums[current];
    }
}

return prev + 1;`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
    },

    reasoning:
      "Because the array is sorted, equal values are adjacent. I keep one pointer at the last unique value and use another to find the next different value.",

    takeaway:
      "A sorted array often lets two pointers remove duplicates in place without extra memory.",
  },
  // ============================================================
  // DSA PRACTICE
  // JOURNAL #25 - #48
  // ============================================================

  {
    id: 25,
    title: "Largest Element in an Array",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 26,
    title: "Smallest Element in an Array",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 27,
    title: "Second Largest Element",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 28,
    title: "Second Smallest Element",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 29,
    title: "Sum of Array Elements",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 30,
    title: "Average of Array Elements",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 31,
    title: "Count Even and Odd Numbers",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 32,
    title: "Count Positive, Negative & Zero Elements",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 33,
    title: "Reverse an Array",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 34,
    title: "Frequency of Elements",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "HashMap",
    type: "Practice",
  },

  {
    id: 35,
    title: "Find Duplicate Elements",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "HashSet",
    type: "Practice",
  },

  {
    id: 36,
    title: "Move Zeroes",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 37,
    title: "Missing Number",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 38,
    title: "Find Maximum Difference",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 39,
    title: "Find Common Elements",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 40,
    title: "Find Unique Elements",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 41,
    title: "Find the First Repeating Element",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "HashMap",
    type: "Practice",
  },

  {
    id: 42,
    title: "Find the First Non-Repeating Element",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "HashMap",
    type: "Practice",
  },

  {
    id: 43,
    title: "Left Rotate an Array",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 44,
    title: "Right Rotate an Array",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 45,
    title: "Find Pair with Given Sum",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "HashMap",
    type: "Practice",
  },

  {
    id: 46,
    title: "Find Missing and Duplicate Number",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },

  {
    id: 47,
    title: "Merge Two Sorted Arrays",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Two Pointers",
    type: "Practice",
  },

  {
    id: 48,
    title: "Find the Majority Element",
    platform: "DSA Practice",
    problemNumber: null,
    difficulty: "Practice",
    pattern: "Arrays",
    type: "Practice",
  },
];

export default problems;
