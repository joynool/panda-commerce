// number: 2
const tagH2 = document.getElementsByTagName('h2');
for (const tag of tagH2) {
    tag.style.color = 'lightblue';
};
// number: 3
const backpack = document.getElementById('back');
backpack.style.backgroundColor = 'tomato';
// number: 4
const cardItems = document.getElementsByClassName('card');
for (const cardItem of cardItems) {
    cardItem.style.borderRadius = '30px';
};
// number: 5
document.getElementById('slide-btn').addEventListener('click', function ()
{
    console.log(alert('Mithoon Ahmed'));
});
// number: 6
const buyNow = document.getElementsByClassName('buy-now');
for (const buyNowItem of buyNow) {
    buyNowItem.addEventListener('click', function ()
    {
        buyNowItem.style.display = 'none';
    });
};
// number: 7
document.getElementById('input-field').addEventListener('keyup', function (event)
{
    const submitBtn = document.getElementById('submit-btn');
    if (event.target.value == 'email') {
        submitBtn.removeAttribute('disabled');
    }
    else {
        submitBtn.setAttribute('disabled', true);
    }
});
// number: 8
const imageChange = document.getElementById('mouse-enter-change');
imageChange.addEventListener('mouseenter', function ()
{
    imageChange.src = 'images/shoes/shoe-3.png';
});
// number: 9
function doubleClick ()
{
    document.getElementById('sub').style.backgroundColor = 'pink';
};
