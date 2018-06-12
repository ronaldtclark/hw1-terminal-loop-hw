// 1) Concatenation allows us to stick tweo or more strings together into one string using + as an operator. With interpolation, the elements being srtuck together do not all have to be strings. They can be numbers, booleans, etc.
// 2) DRY stands for Don't Repeat Yourself. The intent is to write concise code by creating a loop or function to handle any process that would require the same code repeated multiple times for different variables. 

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log (a < b);
console.log (c > d);
console.log ('Name' === 'Name');
console.log (a < b < c);
console.log (a <= a <= d);
console.log (e === 'Kevin');
console.log (48 !== '48');

// A non-empty string is considered truthy so it would return 'true'. Without any other conditions, it will remain true, and the console will keep printing 'Do not run this loop' infinitely.
// I think adding 'runProgram = false' would cause the console to print 'Do not run this loop' only once. Changing the condition of the "while loop" to false should stop the loop.

//My expected output would be: "AAAAAAAAAAAAAAAAAAAA"

let letters = "A"
let i = 0

while (i<20) {
	letters += "A";
	i++;
}

console.log (letters);

//Happily got the expected result. I figured as long as i was less than 20, it would add another A onto 'letters' and store the result as the new value of 'letters' then stop after it did this 20 times.

for (i=0; i<1000; i++) {
	console.log(i);
}

//The first part of the control statement (i=0) is the starting value of i
//The second part of the control statement (i<100) is the conditions under which the code within {} should be run. Once this is false, the loop should stop.
//The third part of the control statement (i++) is what should happen to i after each iteration.

for (i=1; i<=10; i++) {
	console.log("The value of i is: " + i + " of 10");
}

// All commands below were executed from inside the parent directory of the directory or file to be moved, copied, removed, etc. 

// Set the Scene
// 1. Done
// 2. mkdir homework_part_2
// 3. mkdir death_star
//    touch darth_vader.txt princess_leia.txt storm_trooper.txt
// 4. mkdir galaxy_far_far_away
//    mkdir tatooine
//    touch luke.txt ben_kenobi.txt
// 5  mkdir millenium_falcon
//	  touch han_solo.txt chewbacca.txt  

// Part II - Part VI
// 1. mv ben_kenobi.txt obi_wan.txt
// 2. cp storm_trooper.txt ../galaxy_far_far_away/tatooine/
// 3. mv luke.txt obi_wan.txt millenium_falcon/
// 4. mv millenium_falcon ..
// 5. mv millenium_falcon ../death_star/
// 6. mv princess_leia.txt ../millenium_falcon/
// 7. rm obi_wan.txt
// 8. mkdir yavin_4
// 9. mv millenium_falcon ../galaxy_far_far_away/yavin_4/
// 10. mkdir x_wing
// 11. mv princess_leia.txt .. 
//     mv luke.txt ../x_wing
// 12. mv millenium_falcon ..
//     mv x_wing ..
// 13. mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3
// 14. mv darth_vader ../tie_fighter_1/
// 15. cp storm_trooper.txt ../tie_fighter_2 
//     cp storm_trooper.txt ../tie_fighter_3
// 16. mv tie_fighter_1 ../galaxy_far_far_away/
//     mv tie_fighter_2 ../galaxy_far_far_away/
//     mv tie_fighter_3 ../galaxy_far_far_away/

// Part VII - Part VIII
// 6. rm -r tie_fighter_2 tie_fighter_3
// 7. touch x_wing/the_force.txt
// 8. rm -rf death_star
// 9. mv x_wing yavin_4 
//    mv millenium_falcon yavin_4
// 10. Okay

