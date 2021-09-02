function megaFriend (friends){
    if(Array.isArray(friends) == false){
        return 'please give a proper array';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.lenght > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends=  ["Ashraful", "Ishraful", "Ishtiak", "Kairul"]
const totalFriend = megaFriend(friends);
// console.log(totalFriend)

if(friends.indexOf('Ishtiak') != 1){
    // console.log('Ishtiak is here');
}

if (friends.includes('Ishtiak')){
   console.log('Ishtiak is here');
}

// concts
const first = [1,2,3,4];
const second  = [5,6,7,8];
const total = first.concat(second);
console.log(total);
