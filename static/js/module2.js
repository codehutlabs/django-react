var _ = require('lodash');

var people = [{
  "id": 1,
  "first_name": "Burt",
  "last_name": "Cockill",
  "email": "bcockill0@lulu.com",
  "gender": "Male",
  "ip_address": "127.1.159.11"
}, {
  "id": 2,
  "first_name": "Skylar",
  "last_name": "Elcombe",
  "email": "selcombe1@1und1.de",
  "gender": "Male",
  "ip_address": "75.184.63.12"
}, {
  "id": 3,
  "first_name": "Onofredo",
  "last_name": "Stratten",
  "email": "ostratten2@pinterest.com",
  "gender": "Male",
  "ip_address": "205.53.21.201"
}, {
  "id": 4,
  "first_name": "Jerrie",
  "last_name": "Sinclar",
  "email": "jsinclar3@theatlantic.com",
  "gender": "Male",
  "ip_address": "206.11.18.233"
}, {
  "id": 5,
  "first_name": "Nadean",
  "last_name": "Hammerich",
  "email": "nhammerich4@yellowpages.com",
  "gender": "Female",
  "ip_address": "231.25.46.145"
}, {
  "id": 6,
  "first_name": "Lane",
  "last_name": "Hamby",
  "email": "lhamby5@acquirethisname.com",
  "gender": "Female",
  "ip_address": "231.192.43.183"
}, {
  "id": 7,
  "first_name": "Jyoti",
  "last_name": "Frangleton",
  "email": "jfrangleton6@1688.com",
  "gender": "Female",
  "ip_address": "133.66.231.205"
}, {
  "id": 8,
  "first_name": "Goran",
  "last_name": "Prester",
  "email": "gprester7@lycos.com",
  "gender": "Male",
  "ip_address": "229.106.213.162"
}, {
  "id": 9,
  "first_name": "Lurleen",
  "last_name": "Baffin",
  "email": "lbaffin8@example.com",
  "gender": "Female",
  "ip_address": "48.237.160.64"
}, {
  "id": 10,
  "first_name": "Ansley",
  "last_name": "Gammade",
  "email": "agammade9@ifeng.com",
  "gender": "Female",
  "ip_address": "141.13.112.157"
}, {
  "id": 11,
  "first_name": "Flora",
  "last_name": "Knatt",
  "email": "fknatta@tuttocitta.it",
  "gender": "Female",
  "ip_address": "33.164.13.25"
}, {
  "id": 12,
  "first_name": "Randal",
  "last_name": "McOrkill",
  "email": "rmcorkillb@hao123.com",
  "gender": "Male",
  "ip_address": "217.1.96.232"
}, {
  "id": 13,
  "first_name": "Graehme",
  "last_name": "Danett",
  "email": "gdanettc@senate.gov",
  "gender": "Male",
  "ip_address": "140.19.78.206"
}, {
  "id": 14,
  "first_name": "Torrin",
  "last_name": "Burniston",
  "email": "tburnistond@cafepress.com",
  "gender": "Male",
  "ip_address": "103.150.209.234"
}, {
  "id": 15,
  "first_name": "Julee",
  "last_name": "Toffts",
  "email": "jtofftse@flavors.me",
  "gender": "Female",
  "ip_address": "205.1.127.185"
}, {
  "id": 16,
  "first_name": "Farah",
  "last_name": "Regitz",
  "email": "fregitzf@edublogs.org",
  "gender": "Female",
  "ip_address": "209.169.160.124"
}, {
  "id": 17,
  "first_name": "Wye",
  "last_name": "Jeanneau",
  "email": "wjeanneaug@hexun.com",
  "gender": "Male",
  "ip_address": "65.65.138.239"
}, {
  "id": 18,
  "first_name": "Laura",
  "last_name": "Poundsford",
  "email": "lpoundsfordh@edublogs.org",
  "gender": "Female",
  "ip_address": "75.166.68.48"
}, {
  "id": 19,
  "first_name": "Carmencita",
  "last_name": "Mayhew",
  "email": "cmayhewi@list-manage.com",
  "gender": "Female",
  "ip_address": "70.80.16.160"
}, {
  "id": 20,
  "first_name": "Ailis",
  "last_name": "Chaddock",
  "email": "achaddockj@nasa.gov",
  "gender": "Female",
  "ip_address": "36.72.213.187"
}];

var femaleCount = _.filter(people, {gender: 'Female'}).length;

console.log('module2; female count: ' + femaleCount);

