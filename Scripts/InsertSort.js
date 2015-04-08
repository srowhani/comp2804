var insertSort = function(arr){
	for( var i = 2, j=0 ; i < arr.length ; i++, j=i )
		while(j > 1 && arr[j] < arr[j-1]){
			var t = arr[j];
			arr[j] = arr[j-1];
			arr[j-1] = t;
			j--;
		}
}
