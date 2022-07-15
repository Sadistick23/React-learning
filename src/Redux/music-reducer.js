let initializationState = {
    MusicPlaylistData: [
        {
            id: 1,
            Author: 'MAYOT, SEEMEE',
            NameMusic: 'SCUM OFF THE POT 2',
            images: 'https://avatars.yandex.net/get-music-content/6201394/ffbd0be0.a.22810726-1/200x200'
        },
        {
            id: 2,
            Author: 'BUSHIDO ZHO',
            NameMusic: 'vodila',
            images: 'https://avatars.yandex.net/get-music-content/5966316/49a32305.a.22857468-1/200x200'
        },
        {
            id: 3,
            Author: 'INSTASAMKA',
            NameMusic: 'QUEEN OF RAP',
            images: 'https://avatars.yandex.net/get-music-content/6214856/f6aee222.a.22823205-1/200x200'
        },
        {
            id: 4,
            Author: 'Thomas Mraz, Joseph',
            NameMusic: 'Это тебе',
            images: 'https://avatars.yandex.net/get-music-content/5496390/127898d5.a.22814244-1/200x200'
        },
        {
            id: 5,
            Author: 'Пошлая Молли, Молодой Платон',
            NameMusic: 'ШКОЛЬНИК',
            images: 'https://avatars.yandex.net/get-music-content/6296749/858a940f.a.22823435-1/200x200'
        },
        {
            id: 6,
            Author: 'Dose, FEDUK',
            NameMusic: 'Ты',
            images: 'https://avatars.yandex.net/get-music-content/5966316/c1ffef7e.a.22867534-1/200x200'
        },
    ],
    MusicAuthorData: [
        {
            id: 1,
            Author: 'Валентин Стрыкало',
            NameMusic: 'Дешевые драмы',
            images: 'https://avatars.yandex.net/get-music-content/49707/83426a70.p.453589/200x200'
        },
        {
            id: 2,
            Author: 'Валентин Стрыкало',
            NameMusic: 'Наше лето',
            images: 'https://avatars.yandex.net/get-music-content/49707/83426a70.p.453589/200x200'
        },
        {
            id: 3,
            Author: 'Валентин Стрыкало',
            NameMusic: 'Кайен',
            images: 'https://avatars.yandex.net/get-music-content/49707/83426a70.p.453589/200x200'
        },
        {
            id: 4,
            Author: 'Валентин Стрыкало',
            NameMusic: 'Я бью женщин и детей',
            images: 'https://avatars.yandex.net/get-music-content/49707/83426a70.p.453589/200x200'
        },
        {
            id: 5,
            Author: 'Валентин Стрыкало',
            NameMusic: 'Дешёвые драмы',
            images: 'https://avatars.yandex.net/get-music-content/49707/83426a70.p.453589/200x200'
        },
    ],
}

const musicReducer = (state = initializationState, action) => {
    return state;
}

export default musicReducer;