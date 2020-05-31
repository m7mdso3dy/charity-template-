// JavaScript Document
const lftbtn = document.querySelector('.left');
const rhtbtn = document.querySelector('.right');
const home = document.getElementById('home');
const homeBtns = document.querySelectorAll('body>.btn');
const imgs = document.querySelectorAll('#home>div>img');
const tglbtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');
/*toggle nav bar*/
function navToogle (){
	nav.classList.toggle('active');
}
tglbtn.addEventListener('click',navToogle,false);



/*rhtbtn.addEventListener('click',function(e){
	//console.log(e);
	console.log(rhtbtn.scrollLeft);
	home.scrollLeft+=(home.scrollWidth / 3);
	//console.dir(home.scrollWidth);
	//home.scrollLeft='1500px';
	//home.style.transform = `translateX(-${home.scrollWidth / 3}px)`;
},false);
lftbtn.addEventListener('click',function(e){
	//console.log(e);
	//console.log(lftbtn.scrollLeft);
	home.scrollLeft-=(home.scrollWidth / 3);
	//console.dir(home.scrollWidth);
	//home.scrollLeft='1500px';
	//home.style.transform = `translateX(${home.scrollWidth / 3}px)`;

},false);*/
//home slider function
let i = 1;
if(i == 1){
		lftbtn.disabled = true;
	}
let ri = 1;
let li = 1;
homeBtns.forEach((btn) => btn.addEventListener('click',e => {
	if(e.target.classList.contains('right')){
		if(lftbtn.disabled){
			ri=1;
			console.log(ri);
		}else{
		ri++;
			console.log(ri);
			
			}
		home.scrollTo({
			  left: (home.scrollWidth / 3)*ri,
			  behavior: 'smooth'
			});
		++i;
		
	}
	else{
		if(rhtbtn.disabled){
			li=1;
			console.log(li);
		}else{
		li--;
			console.log(li);
			}
		home.scrollTo({
			  left: (home.scrollWidth / 3)*li,
			  behavior: 'smooth'
			});
		i--;
	}
	if(i == 1){
		lftbtn.disabled = true;
	}
	if (i == imgs.length){
	rhtbtn.disabled = true;
}
	if(i>1&&i<imgs.length){
	lftbtn.disabled = false;
	rhtbtn.disabled = false;}
},false));


//what people say slider function
const people = document.querySelector(".people");
const slider = document.querySelector(".slider");
const peopleBtns = document.querySelectorAll('.round-btn');


var active = 1;
peopleBtns.forEach((btn,i) => btn.addEventListener('click',e =>{
	if(window.innerWidth>990){
		if(i == 0){
			slider.scrollTo({
			  left: -1140,
			  behavior: 'smooth'
			});
		}
		if(i == 1){
			slider.scrollTo({
			  left: 1140,
			  behavior: 'smooth'
			});
		}
		}
	else{
		const scrolllLeft = (i/peopleBtns.length)*people.offsetWidth;
		slider.scrollTo({
			left:scrolllLeft,
			behavior:'smooth'
		});
		/*if((i+1) == active){
			console.log('امسك نفسك يا حمار') ;
			return;
		}else{
		const scrolllLeft1 = +(i+1) - active;
		console.log(scrolllLeft1);
		active = +(i+1);
		console.log(active);
		const scrolllLeft2 = (scrolllLeft1/peopleBtns.length)*people.offsetWidth;
		console.log(scrolllLeft2);
		slider.scrollTo({
			left: scrolllLeft2,
			behavior:'smooth'
		});
			}*/
	
		}
	},false))

//counter function
const counters = document.querySelectorAll('.Ncounter');
const speed = 500;
const counterCon = document.querySelector('#counter');

function counterOnScroll(){
	//console.log(window.scrollY - counterCon.offsetTop);
	if((window.scrollY - counterCon.offsetTop) > -400){
		console.log('true');
		counters.forEach(function(counter) {
			const updatecount = () =>{
				const target11 = +counter.getAttribute('data-target');
				const count = +counter.innerText;
				const inc = target11 / speed;
				if(count < target11){
					counter.innerText = count + inc;
					setTimeout(updatecount,2);
				}
				else{
					count.innerText = target11;
				}
			};
			updatecount();
			 });
		
		
	}else{
		counters.forEach(function(counter) {
			counter.innerText = 0;
		} );
	}
	
}
document.addEventListener('scroll',counterOnScroll,false);




