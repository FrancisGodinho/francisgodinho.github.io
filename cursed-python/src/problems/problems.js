export default [
    {
        id: "1", 
        title: "Funky Functions",
        difficulty: "hard",
        code: `
        funcs = [lambda x: i * x for i in range(4)]
        for f in funcs:
	        print(f(2)) 
        `
    },
    {
        id: "2", 
        title: "Classy Conundrum",
        difficulty: "medium",
        code: `
        class A:
	        def __init__(self):
	        	self.__count = 0
	
	        def get_count(self):
	        	return self.__count
	
	        def set_count(self, val):
	        	self.__count = val

        a = A()

        a.set_count(1)
        print(a.get_count())

        a.__count = 2
        print(a.get_count())
        `
    },
    {
        id: "3", 
        title: "Rounding Roulette",
        difficulty: "easy",
        code: `
        a = round(1.5)
        b = round(2.5)
        print(a - b)
        `
    },
    {
        id: "4", 
        title: "Argument Antics",
        difficulty: "medium",
        code: `
        def func(arg=[]):
            arg.append(1)
        	print(arg)

        func()
        func([1])
        func()
        `
    },
    {
        id: "5", 
        title: "Chained Chaos",
        difficulty: "hard",
        code: `
        print(2 < 6 > 4 == 6 - 2 > 3)
        `
    },
    {
        id: "6", 
        title: "Matrix Mayhem",
        difficulty: "easy",
        code: `
        v = [[0] * 3] * 3

        v[0][0] = 1
        v[1][1] = 1
        v[2][2] = 1

        print(v)
        `
    },
    {
        id: "7", 
        title: "Scope Scramble",
        difficulty: "medium",
        code: `
        x = 1
        def f():
        	x = 2
        	def g():
        		x = 3
        		print(x)
        		x += 1
        		x = 0
        	x += 1
        	g()
        	print(x)

        f()
        `
    },
    {
        id: "8", 
        title: "Assignment Apocalypse",
        difficulty: "hard",
        code: `
        a, b = a[:] = [[0]], []
        print(a[0])
        print(a[0][0])
        print(a[0][0][0])

        c, d = c[d] = c = [1, 2, 3], 2
        print(c) 
        `
    },
    {
        id: "9", 
        title: "Comma Craze",
        difficulty: "easy",
        code: `
        x = [2]
        y ,= x
        print(y)
        `
    },
    {
        id: "10", 
        title: "Array Abyss",
        difficulty: "medium",
        code: `
        items = [1, 2, 3, 4, 5]
        for item in items:
            items.remove(item)

        print(items)
        `
    },
]