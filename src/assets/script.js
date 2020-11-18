const fs = require('fs')
const WaifuPics = require('waifu.pics')

let pics = [];
let picture;
let endpoints = [
  {'endpoint': 'neko', 'urls': []},
  {'endpoint': 'lewdneko', 'urls': []},
  {'endpoint': 'trap', 'urls': []},
  {'endpoint': 'bully', 'urls': []},
  {'endpoint': 'cry', 'urls': []},
  {'endpoint': 'hug', 'urls': []},
  {'endpoint': 'kiss', 'urls': []},
  {'endpoint': 'lick', 'urls': []},
  {'endpoint': 'pat', 'urls': []},
  {'endpoint': 'smug', 'urls': []},
  {'endpoint': 'highfive', 'urls': []},
  {'endpoint': 'nom', 'urls': []},
  {'endpoint': 'bite', 'urls': []},
  {'endpoint': 'slap', 'urls': []},
  {'endpoint': 'wink', 'urls': []},
  {'endpoint': 'poke', 'urls': []},
  {'endpoint': 'dance', 'urls': []},
  {'endpoint': 'cringe', 'urls': []},
  {'endpoint': 'blush', 'urls': []}
];
let endpointsSize = endpoints.length;
let endpoint = endpoints[0].endpoint;


for (let i = 0; i < endpointsSize; i++) {
  retrieveArrayOfImageUrls(i)
}
console.log('Wait 10 seconds.');
setTimeout(function () {
  updatePicturesDOTJson()
}, 10000)

function retrieveArrayOfImageUrls(endpointIndex) {
  for (let i = 0; i < 28; i++) {
    fetchUrlsFromApi(endpointIndex)
  }
}


function fetchUrlsFromApi(endpointIndex) {

  WaifuPics.fetch("sfw/" + endpoint)
    .then(response => {
      picture = response.url
      endpoints[endpointIndex].urls.push(picture)
      endpoint = endpoints[endpointIndex].endpoint
    })
    .catch(console.log)

}

function updatePicturesDOTJson() {
  fs.readFile('./pictures.json', 'utf-8', function (err, data) {
    if (err) throw err


    let arrayOfObjects = JSON.parse(data);

    arrayOfObjects.push({
      endpoints
    })

    console.log(arrayOfObjects)

    fs.writeFile('./pictures.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
      if (err) throw err
      console.log('Done!')
    })
  })
}
