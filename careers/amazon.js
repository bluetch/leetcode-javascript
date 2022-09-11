// 1. imagine you are shopping on amazon.com for some good weight lifting equipment. The equipment you want has plates of many different weights that you can combine to lift.

// https://www.geeksforgeeks.org/maximum-number-of-plates-that-can-be-placed-from-top-to-bottom-in-increasing-order-of-size/

// Javascript Program for the above approach

// Recursive function to count and return
// the max number of plates that can be placed
function countPlates(plates, lastLength,
  lastWidth, i, n) {

  // If no plate remains
  if (i == n)
    return 0;

  var taken = 0, notTaken = 0;

  // If length and width of previous plate
  // exceeds that of the current plate
  if (lastLength > plates[i][0] &&
    lastWidth > plates[i][1]) {

    // Calculate including the plate
    taken = 1 + countPlates(plates, plates[i][0],
      plates[i][1], i + 1, n);

    // Calculate excluding the plate
    notTaken = countPlates(plates, lastLength,
      lastWidth, i + 1, n);
  }

  // Otherwise
  else

    // Calculate only excluding the plate
    notTaken = countPlates(plates, lastLength,
      lastWidth, i + 1, n);

  return Math.max(taken, notTaken);
}

// Driver code
var plates = [[6, 4], [5, 7],
[1, 2], [3, 3],
[7, 9]];
var n = plates.length;

// Sorting plates in decreasing order of area
plates.sort((v1, v2) => v2[0] * v2[1] - v1[0] * v1[1]);

// Assuming first plate to be of maximum size
var lastLength = 1000000000;
var lastWidth = 1000000000;

document.write(countPlates(plates, lastLength,
  lastWidth, 0, n));




// Code question 2
// Amazon academy recently organized a scholarship test on its platform. A total

#include < assert.h >
  #include < ctype.h >
  #include < limits.h >
  #include < math.h >
  #include < stdbool.h >
  #include < stddef.h >
  #include < stdint.h >
  #include < stdio.h >
  #include < stdlib.h >
  #include < string.h >

  char * readline();
char * ltrim(char *);
char * rtrim(char *);

int parse_int(char *);



/*
 * Complete the 'findTotalImbalance' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY rank as parameter.
 */

/*package whatever //do not write package name here */

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;



class Result {

  /*
   * Complete the 'findTotalImbalance' function below.
   *
   * The function is expected to return a LONG_INTEGER.
   * The function accepts INTEGER_ARRAY rank as parameter.
   */

  public static long findTotalImbalance(List<Integer> rank) {
    // Write your code here
        long m_imbalance = 0;
        int r = 0;
  TreeSet < Integer > m_set = new TreeSet <> ();

  while (r < rank.size() - 1) {
    m_set.clear();
    m_set.add(rank.get(r));
            long curm_imbalance = 0;

    for (int i = r + 1; i < rank.size(); i++) {
                Integer e = rank.get(i);
      m_set.add(e);
                Integer f = m_set.lower(e);
                Integer c = m_set.higher(e);

      if (f == null) {
        curm_imbalance += ((c - e) > 1 ? 1 : 0);
      }

      else if (c == null) {
        curm_imbalance += (((e - f) > 1) ? 1 : 0);
      }

      else {
        curm_imbalance += (c - f) > 1 ? -1 : 0;
        curm_imbalance += (((c - e) > 1) ? 1 : 0);
        curm_imbalance += ((e - f)) > 1 ? 1 : 0;
      }
      m_imbalance += curm_imbalance;
    }
    r++;
  }
  return m_imbalance;
}

}

public class Solution {
  public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int rankCount = Integer.parseInt(bufferedReader.readLine().trim());

  List < Integer > rank = IntStream.range(0, rankCount).mapToObj(i -> {
    try {
      return bufferedReader.readLine().replaceAll("\\s+$", "");
    } catch(IOException ex) {
      throw new RuntimeException(ex);
    }
  })
    .map(String:: trim)
    .map(Integer:: parseInt)
    .collect(toList());

        long result = Result.findTotalImbalance(rank);

  bufferedWriter.write(String.valueOf(result));
  bufferedWriter.newLine();

  bufferedReader.close();
  bufferedWriter.close();
}
}