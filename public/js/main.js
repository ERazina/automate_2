'use strict';

axios.get('https://randomuser.me/api/?results=20').then(function (response) {
  var data = response.data.results;
  appendData(data);
}, function (error) {
  console.error(error);
});

function appendData(data) {
  var elem = document.querySelector('.counsil');

  data.forEach(function (i) {
    var card = document.createElement('div');
    card.className = 'counsil-card';
    var avatar = document.createElement('div');
    avatar.className = 'counsil-avatar';
    var img = document.createElement('img');
    img.setAttribute('src', i.picture.large);
    img.setAttribute('alt', '');

    avatar.appendChild(img);

    var name = document.createElement('div');
    name.className = 'counsil-name';
    name.innerText = i.name.first + ' ' + i.name.last;
    var position = document.createElement('div');
    position.className = 'counsil-position';
    position.innerText = i.location.city;

    card.appendChild(avatar);
    card.appendChild(name);
    card.appendChild(position);

    elem.appendChild(card);
  });
}