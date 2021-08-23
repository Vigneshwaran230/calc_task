// let msg=document.getElementById("message")
// msg.addEventListener('keydown', (event) => { console.log(`key=${event.key},code=${event.which}`);
// });


// let msg1=document.getElementById("message")
// msg1.addEventListener('keypress', send(i) => { return `code=${event.which}`);
// });

function send(i){
    x=document.getElementById("i1");
    switch(i)
    {
        case 0 : x.value+=0; break;
        case 1 : x.value+=1; break;
        case 2 : x.value+=2; break;
        case 3 : x.value+=3; break;
        case 4 : x.value+=4; break;
        case 5 : x.value+=5; break;
        case 6 : x.value+=6; break;
        case 7 : x.value+=7; break;
        case 8 : x.value+=8; break;
        case 9 : x.value+=9; break;
        case '+' : x.value+='+' ; break;
        case '-' : x.value+='-' ; break;
        case '*' : x.value+='*' ; break;
        case '/' : x.value+='/'; break;
        case '.' : x.value+='.'; break;
        case 'AC' : x.value=" "; break;
        // case '=' : x.value+='='; break;

        case 'log' :
            result=eval(Math.log10(x.value));
            x.value=result;
            break;
         case 'sqrt' :
            result=eval(Math.sqrt(x.value));
            x.value=result;
            break;    
         case '1/x' :
            result=eval(1/x.value);
            x.value=result;
            break;
         case '=' :
            result=eval(x.value);
            x.value=result;
            break;
    }
}
document.onkeyup =e =>{
    if (e.key=="0" || e.key=="Num0"){
    send(0);}
    else if (e.key=="1" || e.key=="Num1"){
        send(1);}
        else if (e.key=="2" || e.key=="Num2"){
            send(2);}
            else if (e.key=="3" || e.key=="Num3"){
                send(3);}
                else if (e.key=="4" || e.key=="Num4"){
                    send(4);}
                    else if (e.key=="5" || e.key=="Num5"){
                        send(5);}
                        else if (e.key=="6" || e.key=="Num6"){
                            send(6);}
                            else if (e.key=="7" || e.key=="Num7"){
                                send(7);}
                                else if (e.key=="8" || e.key=="Num8"){
                                    send(8);}
                                    else if (e.key=="9" || e.key=="Num9"){
                                        send(9);}
                                        else if (e.key=="+"){
                                            send('+');}
                                            else if (e.key=="-"){
                                                send('-');}
                                                else if (e.key=="*"){
                                                    send('*');}
                                                    else if (e.key=="/"){
                                                        send('*');}
                                                        else if (e.key=="="){
                                                            send('=');}
                                                            else if (e.key=="Delete"){
                                                                send('AC');}
                                                              else{
                                                                  window.alert("Not an number");
                                                              }
                                        
}