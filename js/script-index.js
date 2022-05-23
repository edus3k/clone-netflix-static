function eventMenuClick(){
    const btnWhat = document.querySelector('.menu--what');
    const btnMoney = document.querySelector('.menu--money');
    const btnWhere = document.querySelector('.menu--where');
    const btnHow = document.querySelector('.menu--how');
    const btnCan = document.querySelector('.menu--can');
    const btnKids = document.querySelector('.menu--kids');

    let numberClick = false;

    const clickListenerWhat = () =>{

        if(numberClick == false){
            document.querySelector('.help--what').style = 'display: grid';
            document.querySelector('.icon--what').src = './icons/close-fill.svg';
            numberClick = true;
        }else{
            document.querySelector('.help--what').style = 'display: nome'
            document.querySelector('.icon--what').src = './icons/add-fill.svg';
            numberClick = false;
        }
    }

    const clickListenerMoney = () =>{

        if(numberClick == false){
            document.querySelector('.help--money').style = 'display: grid';
            document.querySelector('.icon--money').src = './icons/close-fill.svg';
            numberClick = true;
        }else{
            document.querySelector('.help--money').style = 'display: nome';
            document.querySelector('.icon--money').src = './icons/add-fill.svg';
            numberClick = false;
        }
    }

    const clickListenerWhere = () =>{

        if(numberClick == false){
            document.querySelector('.help--where').style = 'display: grid';
            document.querySelector('.icon--where').src = './icons/close-fill.svg';
            numberClick = true;
        }else{
            document.querySelector('.help--where').style = 'display: nome';
            document.querySelector('.icon--where').src = './icons/add-fill.svg';
            numberClick = false;
        }
    }

    const clickListenerHow = () =>{

        if(numberClick == false){
            document.querySelector('.help--how').style = 'display: grid';
            document.querySelector('.icon--how').src = './icons/close-fill.svg';
            numberClick = true;
        }else{
            document.querySelector('.help--how').style = 'display: nome';
            document.querySelector('.icon--how').src = './icons/add-fill.svg';
            numberClick = false;
        }
    }

    const clickListenerCan = () =>{

        if(numberClick == false){
            document.querySelector('.help--can').style = 'display: grid';
            document.querySelector('.icon--can').src = './icons/close-fill.svg';
            numberClick = true;
        }else{
            document.querySelector('.help--can').style = 'display: nome';
            document.querySelector('.icon--can').src = './icons/add-fill.svg';
            numberClick = false;
        }
    }

    const clickListenerKids = () =>{

        if(numberClick == false){
            document.querySelector('.help--kids').style = 'display: grid';
            document.querySelector('.icon--kids').src = './icons/close-fill.svg';
            numberClick = true;
        }else{
            document.querySelector('.help--kids').style = 'display: nome';
            document.querySelector('.icon--kids').src = './icons/add-fill.svg';
            numberClick = false;
        }
    }
    
    btnWhat.addEventListener('click', clickListenerWhat);
    btnMoney.addEventListener('click', clickListenerMoney);
    btnWhere.addEventListener('click', clickListenerWhere);
    btnHow.addEventListener('click', clickListenerHow);
    btnCan.addEventListener('click', clickListenerCan);
    btnKids.addEventListener('click', clickListenerKids);
}


function run(){
    eventMenuClick();
}

run();