1. Line 12 prints 3. This is because we declared "i" to be a var type data that exists outside of local scope. Hence, "i" changes
	with the loop till it becomes 3 and then line 12 simply prints it. 

2. Line 13 prints 450. This is because "discountedPrice" was declared as a var type data that exists outside of local scope. Hence
	as we apply the formula on line 7, it gets redeclared and holds the value 50, then 100, then 450. As the last value was 450,
	line 13 prints 450. Lastly, unlike let, var allows redeclarations hence line 7 does not give any errors. 

3. Line 14 prints 450. This is because "finalPrice" was declared as a var type data that exists outside of local scope. Hence
	as we apply the formula on line 8, it gets holds different values for each iteration of the loop. As the last value was 450,
	line 14 prints 450. Lastly, as this variable was only declared once on line 4 , so we do not need to worry about redeclaration.

4. This function returns an array that holds the finalPrice from each iteration of the loop(it holds the price after they have 
	been discounted). Since discounted was a var array delcared inside the function, it exists inside the function, it gets 
	changed in the loop, and gets returned as the function ends without any errors.

5. Running the code now causes a reference error. This is because "i" was declared as a let variable. Since let variables respect
	local scope, it does not exist outside of the for loop it was declared in. 

6. Similar to the last question, running the code again causes a reference error. This is because "discountedPrice" is being
	declared inside the for loop and agian only has local scope. Since we are printing it outside the for loop, it gives a 
	not defined reference error. 

7. Line 14 prints the value 450 as intended. This is because we have declared finalPrice as a let variable at the start of the
	function. The loop only changes its value from 0 to 50, then 100, then 450. Hence, as the last value is 450, like 14 simply
	prints it without any error. 

8. This function returns an array that holds the finalPrice from each iteration of the loop(it holds the price after they have 
	been discounted). Since discounted was a let array delcared inside the function, it exists inside the function, it gets 
	changed in the loop, and gets returned as the function ends without any errors. Since we are not printing any let variables 
	outside of their scopes, no errors are caused. 

9. Running the code now causes a reference error. This is because "i" was declared as a let variable. Since let variables respect
	local scope, it does not exist outside of the for loop it was declared in.

10. Line 12 print the value 3 as that is what the variable "length" holds. Length is a const variable but as we do not attempt to
	change it after its declaration, we do not see any errors. 



11.This function returns an array that holds the discountedPrice from each iteration of the loop(it holds the price after they 
	have been discounted). Even though discount was a const array, we do are not reassigning the variable, but only modifying its
	values. Hence, we get an array returned without any errors.

12. (a) student.name
	(b) student['Grad Year']
	(c) student.greeting()
	(d) student['Favorite Teacher'].name
	(e) student.courseLoad[0]

13. (a) 32 : int maps to its string representation, hence it concatonates 3 with 2.
	(b) 1: since - is not for concatonation, string 3 maps to int 3 and hence 3-2 = 1
	(c) 3: 3 is int and 3 + nothing is 3 so it returns 3.
	(d) 3null: null is treated as a string and null is concatonated with 3 so we get 3null.
	(e) 4: true bool maps to 1 int and 3+1 = 4 
	(f) 0: false bool maps to 0 int, and null is 0 hence 0+0 = 0;
	(g) 3undefined: undefined is treated as a string and is conctonated with string 3. 
	(h) NaN: 3 is mapped to int 3 and 3 - undefined = undefined hence we get NaN.

14. (a) true: string 3 maps to int 3
	(b) false: string 2 < string 1 as we are looking at lexicographical order
	(c)	true: string 2 maps to int 2
	(d)	false: === checks without type conversion and we are comparing string 2 to int 2
	(e) false: as after type conversion true is mapped to int 1
	(f) true: as boolean(2) returns true

15. == checks if the left side is equal to right side with type conversion disabled. === checks left to right with type 
	conversion disabled.

17. This function returns [2,4,6]. Explaination: we take in [1,2,3] and the return from doSomething as input to modifyArray.
	Inside modifyArray, we call doSomething for each element of the input array, call doSomething on it and push the return from
	doSomething to the return array. Hence for each iteration of the loop, each element of the input array is doubled as 
	doSomething doubles its input and returns it. Hence, we get from [1,2,3] to [2,4,6] and the loop runs 3 times with 3 
	fucntion calls to doSomething.

19. 1 4 3 2: prints 1, then tries to print 2 but that is delayed by 1000ms so tries to print 3 as that is delayed by 0ms, but
	but since 4 is not delyed and we dont call any function, it prints 4 after 1. Then prints 3 with 0 ms delay, then prints 2
	as the 1000 sec delays is up by now.
