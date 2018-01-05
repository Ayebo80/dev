function multiply(x: number, y: number) {
	return x * y;
}

//Benefits of TypeScript:
//1. make safety-checks, e.g. person: string, x: number
//2. is helpful when we use other libraries (shows numbers, types of parameters)
multiply(2, 3);

//define Type string
let person: string;
person = 'bob';