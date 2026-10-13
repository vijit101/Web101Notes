let students = [
  { name: "Rahul",  marks: 85 },
  { name: "Aman",   marks: 70 },
  { name: "Priya",  marks: 95 }
];

let max = students[0].marks;
let trackIndex =0;
for (let i = 1; i<students.length; i++) {
    if (max<students[i].marks ) {
        max = students[i].marks;
        trackIndex=i;
    }
}
console.log("name is"+students[trackIndex].name+" got marks"+max);