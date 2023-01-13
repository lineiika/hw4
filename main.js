let userAge = Number(prompt('How old are you ?'));
let userCity = prompt('Where do you live ?');
let userSport = prompt('What are your favourite sport ?')


if (userCity==='') {
    userCity='It is a pity that you did not want to enter yours city'  
}else if(userCity===null){
    userCity='It is a pity that you did not want to enter yours city'
} else if(userCity==='Kiev'){
    userCity='You live in the capital of Ukraine'   
}else if(userCity==='London'){
    userCity='You live in the capital of England'   
}else if(userCity==='Washington'){
    userCity= 'You live in the capital of USA'   
}else {
    userCity='You live in the city ' + userCity   
}


if (userAge===0) {
    userAge= 'It is a pity that you did not want to enter yours age' 
} else {
    userAge= 'You are ' + userAge   
}


if (userSport===null) {
    userSport= 'It is a pity that you did not want to enter yours favourite sport' 
} else if(userSport===''){
    userSport= 'It is a pity that you did not want to enter yours favourite sport'
}else if(userSport==='tennis'){
    userSport= 'Great! Do you want be like Elina Svitolina or Carlos Alcaraz?'
}else if(userSport==='boxing'){
    userSport= 'Great! Do you want be like Olexander Usik?'
}else if(userSport==='football'){
    userSport= 'Great! Do you want be like Andrew Shevchenko?'
} else {
    userSport= 'You favourite sport is ' + userSport 
    
}

alert(`
${userAge}
${userCity}
${userSport} `)