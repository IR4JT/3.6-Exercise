// i got help from https://stackoverflow.com/questions/7350363/select-a-random-string-from-an-array

function namesimade() { var names= ["Iraj","Milena","Bob","Joe","Moh","Grace","September","August","Julia","Sam"];
    var randomname = Math.floor(Math.random()*names.length);
    return names[randomname]
}