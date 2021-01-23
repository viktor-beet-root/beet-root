(function () {
    // Создать страницу, которая выводит нумерованный список песен:

    const playList = [
        {
            author: "LED ZEPPELIN",
            song: "STAIRWAY TO HEAVEN"
        },
        {
            author: "QUEEN",
            song: "BOHEMIAN RHAPSODY"
        },
        {
            author: "LYNYRD SKYNYRD",
            song: "FREE BIRD"
        },
        {
            author: "DEEP PURPLE",
            song: "SMOKE ON THE WATER"
        },
        {
            author: "JIMI HENDRIX",
            song: "ALL ALONG THE WATCHTOWER"
        },
        {
            author: "AC/DC",
            song: "BACK IN BLACK"
        },
        {
            author: "QUEEN",
            song: "WE WILL ROCK YOU"
        },
        {
            author: "METALLICA",
            song: "ENTER SANDMAN"
        }
    ];

    const songList = document.querySelector('.song-list')

    function renderSongList(){
        songList.innerHTML = '';

        playList.forEach(function(item){
            console.log(item)
            songList.insertAdjacentHTML('beforeend', `
                <li class = "song-list__item">${item.author} - ${item.song} </li>
            `)
        })
        console.log(playList);
    }

    renderSongList();

})()
