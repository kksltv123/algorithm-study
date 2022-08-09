function solution(nums) {
    let len = nums.length, answer = 0;
  
      // 3개의 수를 더하기 위해서 마지막에 더해줄 2만큼의 길이는 필요하다
    for (let i = 0; i < len - 2; i++) {
      for (let j = i + 1; j < len - 1; j++) {
        for (let k = j + 1; k < len; k++) {
          if (isPrime(nums[i] + nums[j] + nums[k])) {
            answer++;
          }
        }
      }
    }
    //  num[0] + num[1] + num[2], num[0] + num[2] + num[3]
    //  num[1] + num[2] + num[3]
      
    return answer;
  }
  
  // N의 제곱근까지 나누어 떨어지는지 여부를 조사하면 더 빠르게 소수판별
  const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }