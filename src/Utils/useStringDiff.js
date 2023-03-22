// import React from 'react';

// function useStringDiff(str1, str2) {
//   const diff = [];
//   const maxLength = Math.max(str1.length, str2.length);
//   let i = 0;

//   while (i < maxLength) {
//     const char1 = str1[i];
//     const char2 = str2[i];

//     if (char1 !== char2) {
//       let startIdx = i;
//       while (str1[i] !== undefined && str1[i] !== char2) {
//         i++;
//       }

//       const removed = str1.substring(startIdx, i);
//       const inserted = str2.substring(startIdx, i);

//       if (removed) {
//         diff.push(<span style={{ color: 'red' }}>{removed}</span>);
//       }

//       if (inserted) {
//         diff.push(<span style={{ color: 'green' }}>{inserted}</span>);
//       }

//       continue;
//     }

//     diff.push(char1);
//     i++;
//   }

//   return diff;
// }

// export default useStringDiff;
