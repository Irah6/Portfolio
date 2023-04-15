const hide= document.querySelectorAll('.col-lg-4');
const observer = new IntersectionObserver(entries => {
     entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('active')
        }
        
     })
  
     
  },{
    threshold:0,
  });
  hide.forEach(el=>{
    observer.observe(el)
  })
