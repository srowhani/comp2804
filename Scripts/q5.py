import itertools
def count_var(n):
	a = [''.join(i) for i in itertools.product('01', repeat=n)]
  	b = [i.replace('1111', '****') for i in a]
  	c = [i for i in b if '*' in i]
	print c
  	return len(c)

def print_results(n):
	print "| i | f(i)"
	print "=========="
	for i in range(1,n+1):
		print "| " + str(i) + " | " + str(count_var(i))

"""
f(n) = f(n-1) + f(n-2) + 1
| i | f(i)
| 1 | 0
| 2 | 1
| 3 | 2
| 4 | 4
| 5 | 7
| 6 | 12
| 7 | 20
| 8 | 33
| 9 | 54
| 10 | 88
| 11 | 143
| 12 | 232
| 13 | 376
| 14 | 609
| 15 | 986
| 16 | 1596
| 17 | 2583
| 18 | 4180
| 19 | 6764
| 20 | 10945
| 21 | 17710
"""
