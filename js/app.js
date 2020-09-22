//
const personData=[
     {
          name:"Tanya Sinclair",
          job:"UX Engineer",
          biography:" I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ",
          photo:"./images/image-tanya.jpg"
        },
     {
         name:"John Tarkpor",
         job:"Junior Front-end Developer",
         biography:"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ",
         photo:"./images/image-john.jpg"
        }
]

//constans
 const biography = document.querySelector('#texto')
 const name = document.querySelector('#name')
 const job = document.getElementById('jobs')
 const photo = document.querySelector('#photo_avatar')
 //buttons
 const nextBTN = document.querySelector('#button-next')
 const prevBTN = document.querySelector('#button-prev')

 //start item
 let itemPerson =0;

 //onload
 window.addEventListener('DOMContentLoaded',function(){
    PersonShow(itemPerson)
 })

 function PersonShow(Person){
   const item = personData[Person]

   //data
   photo.src = item.photo;
   biography.textContent=item.biography;
   job.textContent = item.job;
   name.textContent = item.name;


 }
//next
nextBTN.addEventListener('click', function(){
    itemPerson++;
    if(itemPerson > personData.length - 1){
        itemPerson=0
    }
    PersonShow(itemPerson)
})
//prev
prevBTN.addEventListener('click', function(){
    itemPerson--;
    PersonShow(itemPerson)
})
