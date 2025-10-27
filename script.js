// Countdown timer (24 hours)
const countdown = document.getElementById("countdown");
const offerTime = new Date().getTime() + 24*60*60*1000;
function updateCountdown(){
  const now = new Date().getTime();
  const distance = offerTime - now;
  if(distance<0){countdown.innerHTML="অফার শেষ!"; return;}
  const h=Math.floor((distance/(1000*60*60))%24);
  const m=Math.floor((distance/(1000*60))%60);
  const s=Math.floor((distance/1000)%60);
  countdown.innerHTML=`${h.toString().padStart(2,"0")} : ${m.toString().padStart(2,"0")} : ${s.toString().padStart(2,"0")}`;
}
setInterval(updateCountdown,1000);

// Formspree submission
const form=document.querySelector(".order-form");
if(form){
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    fetch(form.action,{method:"POST",body:new FormData(form),headers:{Accept:"application/json"}})
    .then(()=>{form.innerHTML=`<p class="thank-you">✅ আপনার অর্ডার সফলভাবে জমা হয়েছে!<br>আমরা শীঘ্রই যোগাযোগ করবো।</p>`})
    .catch(()=>{form.innerHTML=`<p class="thank-you">❌ কিছু ভুল হয়েছে, অনুগ্রহ করে পরে চেষ্টা করুন।</p>`});
  });
}
