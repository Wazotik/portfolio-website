
const productExceptSelf = nums => {
	const answer = []
	let product
	for (let i = 0; i < nums.length; i++) {
		product = 1
		for (let j = i + 1; j < nums.length; j++) {
		product = product * nums[j]
		}
		answer.push(product)
	}
	return answer;
}

console.log(productExceptSelf([1,2,1,0]))

const findMin = nums => {
  if (nums.length === 0) return -1
  if (nums.length === 1) return nums[0]

  let left = 0
  let right = nums.length - 1
  let mid = Math.floor((left + right) / 2)

  while (left < right) {
    if (nums[mid] < nums[mid - 1] && mid > 0) {
      return nums[mid]
    } else if (nums[mid] > nums[left]) {
      right = mid
    } else {
      left = mid
    }

    mid = Math.floor((left + right) / 2)
  }

  return nums[left]
}
console.log(findMin([3,4,5,1,2]));
