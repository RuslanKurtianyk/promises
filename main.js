$(document).ready(function(){
    functionOne().done(function(){
        console.log('First function is done!');
        functionTwo().done(function(){
            console.log('Second function is done!');
        });
    });
});

function functionOne(){
    var deferOne = $.Deferred();
    var deferTwo = $.Deferred();
    
    setTimeout(function(){
        console.log('First task in functionOne is done!');
        deferOne.resolve();
    }, 1000);
    
    setTimeout(function(){
        console.log('Second task in functionOne is done!');
        deferTwo.resolve();
    }, 750);
    
    return $.when(deferOne, deferTwo).done(function(){
        console.log('Both tasks in functionOne are done!');
    }).promise();
}

function functionTwo(){
    var deferOne = $.Deferred();
    setTimeout(function(){
        console.log('Unique task in functionTwo is done!');
        deferOne.resolve();
    }, 2000);
    return deferOne.promise();
}