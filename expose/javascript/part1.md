1. values added:  20

2. final result:  20

3. values added:  20

4. Error: Reference Error, result is not defined. This error happens as we declared "result" as a let variable,
	giving it a local scope. Hence when we go out of the {} where it was defined, we get an error. Hence in this case, the console 
	log statement at line 13 causes the error. 

5. Error: Assignment to constant variable. We have declared "result" as a constant variable
	and we have assigned the value of 10 to it during its declaration. As we are trying to change "result"'s value, which is not
	possible for consts, we are getting the error. The error us caused by line 7 and anything after that is not being executed.

6. Error: Assignment to constant variable. Same reason as above (question 5).


