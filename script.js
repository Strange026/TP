const button2 = document.getElementById('btn2');
let left = 40;
button2.addEventListener('mouseover', function () 
{
    if (left == 40)
    {
        left = 80;
    } else if(left==80)
    {
        left = 90;
    }
    else
    {
        left=40;
    }
    this.style.left = left + '%';
});

document.getElementById('btn1').addEventListener('click', function () 
{
    alert('Yayyy lets watch in party ');
});