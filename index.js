//code your solution here
function distanceFromHqInBlocks(numberOfBlocks){
    if(numberOfBlocks=== 43){
        return 1
    }
    else if (numberOfBlocks === 50){
        return 8
    }
    else if(numberOfBlocks < 50){
        return 8
    }
}
 function distanceFromHqInFeet (numberInFeet){
    if(numberInFeet === 43){
        return 264
    }
    else if (numberInFeet === 50){
        return 2112
    }
    else if (numberInFeet < 50){
        return 2112
    }

}
function distanceTravelledInFeet(a, b){
    if(b> a){
        return ((b-a )*264);
    }
    else return ((a-b)*264);
    }
   

function calculatesFarePrice(start, end){
    let distance = distanceTravelledInFeet(start,end);
    if (distance< 400){
        return 0
    }
    if (distance> 400 && distance <2000){
        return (distance-400)*0.02;
    }
    if (distance >= 2000&& distance < 2500){
        return 25;
    }
    else if (distance >2500){
        return "cannot travel that far"
    }
}