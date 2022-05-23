// React Create
const create = React.createElement;

// CONTAINER FULL
// Component div Container
class Container extends React.Component {
    render() {
        return create(
            'div',
            {className: 'container'},
            create(Header),
            create(Spotlight),
            create(Carroseel),
            create(Footer),
            create(Loading)
        );
    }
}


// HEADER TOP
// Component header
class Header extends React.Component{
    render(){
        return create(
            'header',
            null,
            headerLeft(),
            headerRight()
        );
    }
}
// Component div header -> header--left
function headerLeft(){
    return create(
        'div',
        {className: 'header--left'},
        logoHeader(),
        leftMenu()
    );
}


// LOGO LEFT
// Component div header -> header--left -> logo
function logoHeader(){
    return create(
        'div',
        {className: 'header--logo'},
        iconlogo()
    );
}
// Component div header -> header--left -> logo -> img
function iconlogo(){
    return create(
        'img',
        {src: './icons/netflix.svg'},
        null
    );
}


// MENU LEFT
// Component div header -> header--left -> menu
function leftMenu(){
    return create(
        'ul',
        {className: 'header--left-menu'},
        inicio(),
        series(),
        filmes(),
        bombando(),
        minhaLista()
    );
}
// Início
// Component div header -> header--left -> menu -> inicio
function inicio(){
    return create(
        'li',
        {className: 'menu--inicio'},
        inicioRef(),
    );
}
// Component div header -> header--left -> menu -> inicio -> link
function  inicioRef(){
    return create(
        'a',
        {className: 'menu--inicio-link'},
        'Início'
    );
}
// Séries
// Component div header -> header--left -> menu -> series
function series(){
    return create(
        'li',
        {className: 'menu--series'},
        seriesRef(),
    );
}
// Component div header -> header--left -> menu -> series -> link
function  seriesRef(){
    return create(
        'a',
        {className: 'menu--series-link'},
        'Séries'
    );
}
// Filmes
// Component div header -> header--left -> menu -> filmes
function filmes(){
    return create(
        'li',
        {className: 'menu--filmes'},
        filmesRef(),
    );
}
// Component div header -> header--left -> menu -> filmes -> link
function  filmesRef(){
    return create(
        'a',
        {className: 'menu--filmes-link'},
        'Filmes'
    );
}
// Bombando
// Component div header -> header--left -> menu -> bombando
function bombando(){
    return create(
        'li',
        {className: 'menu--bombando'},
        bombandoRef(),
    );
}
// Component div header -> header--left -> menu -> bombando -> link
function  bombandoRef(){
    return create(
        'a',
        {className: 'menu--bombando-link'},
        'Bombando'
    );
}
// Minha lista
// Component div header -> header--left -> menu -> minha-lista
function minhaLista(){
    return create(
        'li',
        {className: 'menu--minha-lista'},
        minhaListaRef(),
    );
}
// Component div header -> header--left -> menu -> minha-lista -> link
function  minhaListaRef(){
    return create(
        'a',
        {className: 'menu--minha-lista-link'},
        'Minha lista'
    );
}


// HEADER RIGHT
// Component div header -> header--right
function headerRight(){
    return create(
        'div',
        {className: 'header--right'},
        search(),
        infantil(),
        bell(),
        profile()
    );
}
// SEARCH
// Component div header -> header--right -> search
function search(){
    return create(
        'div',
        {className: 'header--search'},
        iconSearch()
    );
}
// Component div header -> header--right -> search
function iconSearch(){
    return create(
        'img',
        {src: './icons/search.svg'},
       null
    );
}
// PROF: INFANTIL
// Component div header -> header--right -> infantil
function infantil(){
    return create(
        'div',
        {className: 'header--infantil'},
        infantilH3()
    );
}
// Component div header -> header--right -> infantil -> a
function infantilH3(){
    return create(
        'a',
        null,
        'Infantil'
    );
}
// NOTIFICAÇÃO
// Component div header -> header--right -> bell
function bell(){
    return create(
        'div',
        {className: 'header--bell'},
        iconbell()
    );
}
// Component div header -> header--right -> bell -> iconbell
function iconbell(){
    return create(
        'img',
        {src: './icons/bell.svg'},
        null
    );
}
// PROFILE
// Component div header -> header--right -> profile
function profile(){
    return create(
        'div',
        {className: 'header--profile'},
        iconprofile()
    );
}
// Component div header -> header--right -> profile -> img
function iconprofile(){
    return create(
        'img',
        {src: './icons/profile.svg'},
        null
    );
}


// SPORLIGHT
// Component div Spotlight
class Spotlight extends React.Component{
    render(){
        return create(
            'div',
            {className: 'spotlight'},
            spotlightArea()
        );
    }
}
// Component div Spotlight -> area
function spotlightArea(){
    return create(
        'div',
        {className: 'spotlight--area'},
        spotlightBgVertical()
    );
}
// Component div spotlight -> area -> bg-vertical
function spotlightBgVertical(){
    return create(
        'div',
        {className: 'spotlight--bg-vertical'},
        spotlightBgHorizontal()
    );
}
// Component div spotlight -> area -> bg-vertical -> bg-horizontal
function spotlightBgHorizontal(){
    return create(
        'div',
        {className: 'spotlight--bg-horizontal'},
        spotlightName(),
        spotlightInfo(),
        spotlightOverview(),
        spotlightButtons(),
        spotlightGenres()
    );
}
// Component div spotlight -> area -> bg-vertical -> bg-horizontal -> spotlight--name
function spotlightName(){
    return create(
        'div',
        {className: 'spotlight--name'},
        null
    );
}
// Component div spotlight -> area -> bg-vertical -> bg-horizontal -> spotlight--info
function spotlightInfo(){
    return create(
        'div',
        {className: 'spotlight--info'},
        spotlightInfoPoints(),
        spotlightInfoYear(),
        spotlightInfoSeasons(),
    );
}
// Component div spotlight -> area -> bg-vertical -> bg-horizontal -> spotlight--info -> points
function spotlightInfoPoints(){
    return create(
        'div',
        {className: 'spotlight--info-points'},
        null
    );
}
// Component div spotlight -> area -> bg-vertical -> bg-horizontal -> spotlight--info -> year
function spotlightInfoYear(){
    return create(
        'div',
        {className: 'spotlight--info-year'},
        null
    );
}
// Component div spotlight -> area -> bg-vertical -> bg-horizontal -> spotlight--info -> seasons
function spotlightInfoSeasons(){
    return create(
        'div',
        {className: 'spotlight--info-seasons'},
        null
    );
}
// Component div spotlight -> area -> bg-vertical -> bg-horizontal -> spotlight--info -> overview
function spotlightOverview(){
    return create(
        'div',
        {className: 'spotlight--overview'},
        null
    );
}
// Component div spotlight -> area -> bg-vertical -> bg-horizontal -> buttons
function spotlightButtons(){
    return create(
        'div',
        {className: 'spotlight--buttons'},
        spotlightButtonAssistir(),
        spotlightButtonMinhaLista()
    );
}
// Component div spotlight -> area -> bg-vertical -> bg-horizontal -> buttons -> assistir
function spotlightButtonAssistir(){
    return create(
        'a',
        {className: 'buttons--assistir'},
        '► Assistir'
    );
}
// Component div spotlight -> area -> bg-vertical -> bg-horizontal -> buttons -> minha-lista
function spotlightButtonMinhaLista(){
    return create(
        'a',
        {className: 'buttons--minha-lista'},
        '+ Minha Lista'
    );
}
// Component div spotlight -> area -> bg-vertical -> bg-horizontal -> genres
function spotlightGenres(){
    return create(
        'div',
        {className: 'spotlight--genres'},
        null
    );
}


// CARROSEEL
// Component div Carroseel
class Carroseel extends React.Component{
    render(){
        return create(
            'div',
            {className: 'carroseel'},
            carroseelArea()
        );
    }
}
// LIST
// Component div Carroseel-> list -> area
function carroseelArea(){
    return create(
        'div',
        {className: 'carroseel--list-area'},
        list()
    );
}
// Component div Carroseel -> list
function list(){
    return create(
        'div',
        {className: 'carroseel--list'},
        null
    );
}


//FOOTER
// Component Footer
class Footer extends React.Component{
    render(){
        return create(
            'footer',
            null,
            infoDev(),
            contactDev()
        );
    }
}
// Component Footer -> infoDev
function infoDev(){
    return create(
        'p',
        {className: 'footer--info-dev'},
        `Desenvolvido por © Eduardo Santos`
    );
}
// Component Footer -> contactDev
function contactDev(){
    return create(
        'div',
        {className: 'footer--contact-dev'},
        github(),
        '|',
        linkedin()
    );
}
// Component Footer -> contactDev -> github
function github(){
    return create(
        'a',
        {className: 'footer--contact-github'},
        'Github'
    );
}
// Component Footer -> contactDev -> linkedin
function linkedin(){
    return create(
        'a',
        {className: 'footer--contact-linkedin'},
        'Linkedin'
    );
}


//Loading
// Component Loading
class Loading extends React.Component{
    render(){
        return create(
            'div',
            null,
            null
        );
    }
}


ReactDOM.render(
    create(Container),
    document.querySelector('body')
)