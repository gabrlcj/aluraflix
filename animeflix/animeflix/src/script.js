var listaAnimes = ["https://img1.ak.crunchyroll.com/i/spire3/f1fe5c7a43cb2f38f4152a58f89479821554508873_full.jpg",
                   "https://img1.ak.crunchyroll.com/i/spire3/02c909684baa37d6ef70a9df742d58951610752067_full.jpg",
                   "https://img1.ak.crunchyroll.com/i/spire3/04b29833ccaaf2ee6bda1d08f2f02ecf1539039197_full.jpg",
                   "https://img1.ak.crunchyroll.com/i/spire4/8056a82e973dde98ebb82abd39dc69731564519729_full.jpg",
                  "https://img1.ak.crunchyroll.com/i/spire3/cbb55a6382682bf71e91f685c6473c5a1487736090_full.jpg"]

var linkAnimes = ["https://www.netflix.com/browse?jbv=81091393", "https://www.crunchyroll.com/pt-br/jujutsu-kaisen", "https://www.crunchyroll.com/pt-br/jojos-bizarre-adventure", "https://www.crunchyroll.com/pt-br/one-piece", "https://www.crunchyroll.com/pt-br/hunter-x-hunter"]

var nomeAnimes = ["Demon Slayer", "Jujutsu Kaisen", "Jojo's Bizarre Adventure", "One Piece", "Hunter x Hunter"]

let posterArray = "";
for (var i = 0; i < listaAnimes.length; i++){
  posterArray += '<div class="animeContent"><div class="imagem"><a class="anime" href=' + linkAnimes[i] + ' target="_blank"><img src=' + listaAnimes[i] + ' class="animeImage"></a></div> <h2>' + nomeAnimes[i] + '</h2></div>';
}
document.write(`<div class="posterBox">${posterArray}</div>`)
