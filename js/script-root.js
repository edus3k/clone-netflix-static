
// Request API    
// Cnstante para ter acesso a API do themoviedb -> KEY - BASE_URL
const API_KEY = 'c59d667e3a69e38af09583c77140e92c';
const API_BASE_URL = 'https://api.themoviedb.org/3';

const baseRequest = async(endp) =>{
    const req = await fetch(`${API_BASE_URL}${endp}`);
    const reqJson = await req.json();
    return reqJson;
};

async function getNumberPage(req){
    let res_req = await req
    return res_req;
}

async function getList(){
    let num = await getNumberPage(baseRequest(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`));
    const numberPg = Math.floor(Math.random() * (num.total_pages* 0.05));
    
    return[
        {
            slug: 'trending',
            title: 'Recomendados pra Você',
            items: await baseRequest(`/trending/all/week?language=pt-BR&page=${numberPg}&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            items: await baseRequest(`/movie/top_rated?language=pt-BR&page=${numberPg}&api_key=${API_KEY}`)
        },
        {
            slug: 'originals',
            title: 'Original do Netflix',
            items: await baseRequest(`/discover/tv?with_network=213&language=pt-BR&page=${numberPg}&api_key=${API_KEY}`)
        },
    ];
}

async function getInfo(id, type){
    let info = [];
    if(id){
        switch(type){
            case 'move':
                info = await baseRequest(`/move/${id}?language=pt-BR&api_key=${API_KEY}`);
            break;
            case 'tv':
                info = await baseRequest(`/tv/${id}?language=pt-BR&api_key=${API_KEY}`);
            break;
        }
    }
    return info; 
}

// Gets res.request API
async function viewCarroseel(res){
    let its = '';
    let num = 0;
    await res.map((item, key)=>{
        its += `<div class="carroseel--title"><h1>${item.title}</h1></div>`
        its += `<div class="carroseel--move-left${num}"><img src="../icons/navigate-before.svg"/></div>`
        its += `<div class="carroseel--move-right${num}"><img src="../icons/navigate-next.svg"/></div>`
        its += `<div class="carroseel--list${num}">`;
        item.items.results.forEach(it => {
            its += `<div class="carroseel--item">`;
            its += `<img src="https://image.tmdb.org/t/p/original${it.poster_path || it.backdrop_path}" alt="${it.original_name}"/>`;
            its += `</div>`;
        });
        num = num + 1;
        its += `</div>`;
        document.querySelector('.carroseel--list-area').innerHTML = its;
    });
}


async function viewSpotlight(res){
    let originals = res.filter(i=>i.slug === 'originals');
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
    let chosen = originals[0].items.results[randomChosen];
    let req_infos = await getInfo(chosen.id, 'tv');
    
    let fristDate = new Date(req_infos.first_air_date);
    let genres = [];
    req_infos.genres.forEach(it => {
        genres.push(it.name);
    });
    let textOverview = req_infos.overview;
    if(textOverview.length === 0){
        textOverview = 'Sem descrição'
    }
    if(textOverview.length > 184){
        textOverview = textOverview.substring(0 , 184)+'...';
    }
    
    let name = `<h1>${req_infos.name}</h1>`;
    let points = `<h2>${req_infos.vote_average} Pontos</h2>`;
    let year = `<h2>${fristDate.getFullYear()}</h2>`;
    let seasons = `<h2>${req_infos.number_of_seasons} temporada${req_infos.number_of_seasons !== 1 ? 's' : ''}</h2>`;
    let overview = `<h2>${textOverview}</h2>`;
    //let overview = `<h2>${textOverview !== "" ? req_infos.overview : 'Sem descrição'}</h2>`;
    let text_genres = `<h3><strong>Gêneros: </strong>${genres.join(', ')}</h3>`;

    document.querySelector('.spotlight--name').innerHTML = name;
    document.querySelector('.spotlight--info-points').innerHTML = points;
    document.querySelector('.spotlight--info-year').innerHTML = year;
    document.querySelector('.spotlight--info-seasons').innerHTML = seasons;
    document.querySelector('.spotlight--overview').innerHTML = overview;
    document.querySelector('.spotlight--genres').innerHTML = text_genres;

    document.querySelector('.spotlight--area').style = `background-image: url(https://image.tmdb.org/t/p/original${chosen.backdrop_path})`
}


function eventNavigate0(){
    const btnLeft = document.querySelector('.carroseel--move-left0');
    const btnRight = document.querySelector('.carroseel--move-right0');

    let valueX = 0;
    
    const clickListenerR = ()=>{
        if(valueX  != -3250){
            valueX += -250;
            document.querySelector('.carroseel--list0').style = `margin-left: ${valueX}px`;
        }
    }

    const clickListenerL = ()=>{
        if(valueX  != 0){
            valueX += 250;
            document.querySelector('.carroseel--list0').style = `margin-left: ${valueX}px`;
        }
    }

    btnRight.addEventListener('click', clickListenerR);
    btnLeft.addEventListener('click', clickListenerL);
}

function eventNavigate1(){
    const btnLeft = document.querySelector('.carroseel--move-left1');
    const btnRight = document.querySelector('.carroseel--move-right1');

    let valueX = 0;
    
    const clickListenerR = ()=>{
        if(valueX  != -3250){
            valueX += -250;
            document.querySelector('.carroseel--list1').style = `margin-left: ${valueX}px`;
        }
    }

    const clickListenerL = ()=>{
        if(valueX  != 0){
            valueX += 250;
            document.querySelector('.carroseel--list1').style = `margin-left: ${valueX}px`;
        }
    }

    btnRight.addEventListener('click', clickListenerR);
    btnLeft.addEventListener('click', clickListenerL);
}

function eventNavigate2(){
    const btnLeft = document.querySelector('.carroseel--move-left2');
    const btnRight = document.querySelector('.carroseel--move-right2');

    let valueX = 0;
    
    const clickListenerR = ()=>{
        if(valueX  != -3250){
            valueX += -250;
            document.querySelector('.carroseel--list2').style = `margin-left: ${valueX}px`;
        }
    }

    const clickListenerL = ()=>{
        if(valueX  != 0){
            valueX += 250;
            document.querySelector('.carroseel--list2').style = `margin-left: ${valueX}px`;
        }
    }

    btnRight.addEventListener('click', clickListenerR);
    btnLeft.addEventListener('click', clickListenerL);
}

function eventNavigate(){
 
    let valueX = 0;
    
    if(valueX  != -3250){
        valueX += -250;
        document.querySelector('.carroseel--list').style = `margin-left: ${valueX}px`;
    }
    if(valueX  != 0){
        valueX += 250;
        document.querySelector('.carroseel--list').style = `margin-left: ${valueX}px`;
    }
    

}

function eventScroll(){
    const scrollListener = () =>{
        if(window.scrollY > 10){
            const setBgHeader = true;
            document.querySelector('header').className = `${setBgHeader?'header-black': ''}`;
        }
        else{
            const setBgHeader = false;
            document.querySelector('header').className = `${setBgHeader?'header-black': ''}`;
        }
    }

    window.addEventListener('scroll', scrollListener);
    return () =>{
        window.removeEventListener('scroll', scrollListener);
    }
}

function viewLood(){
    const load = `<img src="../icons/load.gif"/>`;
    const list = document.querySelector('.carroseel--list').length
    
    if(list.length <= 0){
        document.querySelector('.loading-page').innerHTML = load;
        console.log('loading ok');
    }
}

// Run App
async function run(){
    //viewLood();
    let res_api = await getList();
    viewCarroseel(res_api);
    viewSpotlight(res_api);
    eventScroll();
    eventNavigate0();
    eventNavigate1();
    eventNavigate2();
}

run();




