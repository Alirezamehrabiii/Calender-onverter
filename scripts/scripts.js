const input = document.querySelector('input');
const p = document.querySelector('p');
const btn = document.querySelector('button');
const p2 = document.querySelector('.p2');


btn.addEventListener('click' , ()=>{
    if(input.value == ''){
        alert('تاریخ را وارد کنید');
        
    }else{
        let invalue = input.value;
        let pdate = new persianDate(new Date(invalue));
        p.innerHTML = pdate.format('YYYY/MM/DD');
        p2.innerHTML = pdate.format('dddd');

    }
})