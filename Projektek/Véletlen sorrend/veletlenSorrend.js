function getRandomOrder(inputArray) {
    const newArray = inputArray.slice();
    const resultArray = [];
  
    while (newArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * newArray.length);
      resultArray.push(newArray[randomIndex]);
      newArray.splice(randomIndex, 1);
    }
  
    return resultArray;
}
  
const daysOfWeek = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];
  
console.log("Eredeti tömb: " + JSON.stringify(daysOfWeek));
  
const step2 = 2;
const newDaysOfWeekStep2 = [daysOfWeek[step2]];
daysOfWeek.splice(step2, 1);
console.log("2. lépés: " + JSON.stringify(newDaysOfWeekStep2));
  
const step4 = 5;
const newDaysOfWeekStep4 = [newDaysOfWeekStep2[0], daysOfWeek[step4]];
daysOfWeek.splice(step4, 1);
console.log("4. lépés: " + JSON.stringify(newDaysOfWeekStep4));
  
const step6 = 1;
const newDaysOfWeekStep6 = [newDaysOfWeekStep4[0], newDaysOfWeekStep4[1], daysOfWeek[step6]];
daysOfWeek.splice(step6, 1);
console.log("6. lépés: " + JSON.stringify(newDaysOfWeekStep6));
  
const step8 = 0;
const newDaysOfWeekStep8 = [newDaysOfWeekStep6[0], newDaysOfWeekStep6[1], newDaysOfWeekStep6[2], daysOfWeek[step8]];
daysOfWeek.splice(step8, 1);
console.log("8. lépés: " + JSON.stringify(newDaysOfWeekStep8));
  
const step10 = 2;
const newDaysOfWeekStep10 = [newDaysOfWeekStep8[0], newDaysOfWeekStep8[1], newDaysOfWeekStep8[2], newDaysOfWeekStep8[3], daysOfWeek[step10]];
daysOfWeek.splice(step10, 1);
console.log("10. lépés: " + JSON.stringify(newDaysOfWeekStep10));
  
const step12 = 0;
const newDaysOfWeekStep12 = [newDaysOfWeekStep10[0], newDaysOfWeekStep10[1], newDaysOfWeekStep10[2], newDaysOfWeekStep10[3], newDaysOfWeekStep10[4], daysOfWeek[step12]];
daysOfWeek.splice(step12, 1);
console.log("12. lépés: " + JSON.stringify(newDaysOfWeekStep12));
  
const finalResult = newDaysOfWeekStep12.concat(daysOfWeek);
console.log("Eredmény: " + JSON.stringify(finalResult));

console.log(getRandomOrder(["h", "k", "sze", "cs", "p", "szo", "v"]));
console.log(getRandomOrder([1, 2, 3, 4, 5, 6, 7, 8, 9]));