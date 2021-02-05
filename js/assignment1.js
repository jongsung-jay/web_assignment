function bmrMetric(){
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender");
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value; 
    let level1 = document.getElementById("level1");
    let level2 = document.getElementById("level2");
    let level3 = document.getElementById("level3");
    let level4 = document.getElementById("level4");
    let level5 = document.getElementById("level5");
    let bmr, result;
    let calories = 0;

    (level1.checked) ? (calories += 1.2) : (calories += 0);
    (level2.checked) ? (calories += 1.375) : (calories += 0);
    (level3.checked) ? (calories += 1.55) : (calories += 0);
    (level4.checked) ? (calories += 1.725) : (calories += 0);
    (level5.checked) ? (calories += 1.9) : (calories += 0);

    if(gender == 'male'){
        bmr = 66.5 + (13.75 * weight ) + (5.003 * height ) - (6.755 * age );
    }else{
        bmr = 655 + (9.563 * weight ) + (1.850 * height ) - (4.676 * age );
    }
    
    result = bmr + calories;
    //console.log('bmr: ' + bmr  + ' calories: ' + calories  + ' result: ' + result);
    bmrLabel.innerHTML = 'BMR: ' + bmr  +'&nbsp;&nbsp;Calories: ' + calories + ' <br/>Result: ' + result;
}
document.getElementById("submit").addEventListener("click",bmrMetric,false);

function bmrImperial(){
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender");
    let hFeet = document.getElementById("feet").value;
    let hinches = document.getElementById("inches").value;
    let wStones = document.getElementById("stones").value;
    let wPounds = document.getElementById("pounds").value; 
    let level1 = document.getElementById("level1");
    let level2 = document.getElementById("level2");
    let level3 = document.getElementById("level3");
    let level4 = document.getElementById("level4");
    let level5 = document.getElementById("level5");
    let bmr, result;
    let calories = 0;

    (level1.checked) ? (calories += 1.2) : (calories += 0);
    (level2.checked) ? (calories += 1.375) : (calories += 0);
    (level3.checked) ? (calories += 1.55) : (calories += 0);
    (level4.checked) ? (calories += 1.725) : (calories += 0);
    (level5.checked) ? (calories += 1.9) : (calories += 0);

    if(gender == 'male'){
        bmr = 66 + (6.2 * wPounds ) + (12.7 * hinches ) - (6.76 * age );
    }else{
        bmr = 655 + (4.35 * wPounds ) + (4.7 * hinches ) - (4.7 * age );
    }
    
    result = bmr + calories;
    //console.log('bmr: ' + bmr  + ' calories: ' + calories  + ' result: ' + result);
    bmrLabel.innerHTML = 'BMR: ' + bmr  +'&nbsp;&nbsp;Calories: ' + calories + ' <br/>Result: ' + result;
}
document.getElementById("submit").addEventListener("click",bmrImperial,false);




