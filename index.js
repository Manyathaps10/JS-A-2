//Question 1
function findGrades(M){
    let grade;
    switch(true){
        case(M<=10):
           grade='E'
           break
        case(M<=20):
           grade='D'
           break
        case(M<=30):
           grade='C'
           break
        case(M<=40):
           grade='B'
           break
        case(M<=50):
           grade='A'
           break
        default:
            grade='Invalid'
    }
    return grade
}

console.log(findGrades(51));
console.log(findGrades(45));
console.log(findGrades(37));
console.log(findGrades(26));
console.log(findGrades(13));
console.log(findGrades(5));

//Question 2
function getValue(C){
    let value;
    switch(C.toLowerCase()){
        case 'p':
            value="PrepBytes"
            break
        case 'z':
            value="Zenith"
            break
        case 'e':
            value="Expert Coder"
            break
        case 'd':
            value="Data Structure"
            break
        default:
            value='Invalid'
    }
    return value
}

console.log(getValue("P"));
console.log(getValue("z"));
console.log(getValue("E"));
console.log(getValue("d"));
console.log(getValue("M"));

//Question 3
function Max_out_of_three(A,B,C){
    if(A==B && B==C){
        return -1
    } else{
        return Math.max(A,B,C)
    }
}

console.log(Max_out_of_three(10,20,30));
console.log(Max_out_of_three(30,30,30));
console.log(Max_out_of_three(67,25,30));

//Question 4
function findSndSmallest(X,Y,Z){
    let arr=[X,Y,Z]
    arr.sort((a,b)=>a-b)
    return arr[1]
}

console.log(findSndSmallest(10,5,20));
console.log(findSndSmallest(100,45,20));
console.log(findSndSmallest(78,3,76));

//Question 5
function Triangle_Check(A,B,C){
    if(A+B+C!==180||A<=0||B<=0||C<=0){
        return "Invalid Triangle"
    }
    if(A>90||B>90||C>90){
        return "Obtuse"
    }
    return "Acute"

}

console.log(Triangle_Check(60,60,60));
console.log(Triangle_Check(100,40,40));
console.log(Triangle_Check(90,45,45));
console.log(Triangle_Check(0,90,90));



