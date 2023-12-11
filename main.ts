
function twoSum(nums: number[], target: number): number[] {
          let map:any=new Map<number,number>();
          debugger
          for (let i=0; i<nums.length; i++) {
            if(map.has(target-nums[i])) {
              console.log(map.get(target-nums[i]));
              return [map.get(target-nums[i]), i]
            } else {
            map.set(target-nums[i],i);
            }
          }
          console.log(map)
          return []
      };
      console.log(twoSum([2,7,11,15], 9))