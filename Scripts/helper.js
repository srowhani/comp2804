
//Question 4
var f = function(k,n,i){
  if(i==0){console.log("{0} + {1}".format(k,n)); return k+n}
  if(n==0 && i==1) return 0;
  if(n==0 && i==2) return 1;
  if(n==0) return k;
  console.log("f({0}, f({0}, {1}, {2}), {3})".format(k, n-1, i, i-1))
  return f(k,f(k,n-1,i),i-1)}

String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };



/*

f(2,3,2)
VM309:7 f(2, f(2, 2, 2), 1)
VM309:7 f(2, f(2, 1, 2), 1)
VM309:7 f(2, f(2, 0, 2), 1)
VM309:7 f(2, f(2, 0, 1), 0)
VM309:3 2 + 0
VM309:7 f(2, f(2, 1, 1), 0)
VM309:7 f(2, f(2, 0, 1), 0)
VM309:3 2 + 0
VM309:3 2 + 2
VM309:7 f(2, f(2, 3, 1), 0)
VM309:7 f(2, f(2, 2, 1), 0)
VM309:7 f(2, f(2, 1, 1), 0)
VM309:7 f(2, f(2, 0, 1), 0)
VM309:3 2 + 0
VM309:3 2 + 2
VM309:3 2 + 4
VM309:3 2 + 6
8
*/


