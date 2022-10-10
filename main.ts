function filter <K> (callback:Function, arr:K[]): K[] {
          let array:any =[];
          for (let i=0; i<arr.length; i++) {
                    if (callback(this[i], i, this)) {
                   array.push(this[i])
                    }
          }
          return array
          
};
Array.prototype.myfilter = filter;
