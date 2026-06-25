const btnIndoor = document.getElementById('btnIndoor');
  const btnOutdoor = document.getElementById('btnOutdoor');
  const indoorScene = document.getElementById('indoorScene');
  const outdoorScene = document.getElementById('outdoorScene');
  const heroHeading = document.getElementById('heroHeading');
  const heroLede = document.getElementById('heroLede');
  const floatLabel = document.getElementById('floatLabel');

  function showIndoor(){
    btnIndoor.classList.add('active');
    btnOutdoor.classList.remove('active','outdoor-active');
    indoorScene.classList.add('active');
    outdoorScene.classList.remove('active');
    heroHeading.innerHTML = 'Professional cleaning <span class="accent">you can trust</span> — and grounds that match it.';
    heroLede.textContent = 'Reliable, thorough, cost-effective cleaning for offices and institutions in Nairobi — backed by landscaping and plant care for the grounds around them.';
    floatLabel.innerHTML = 'Last visit: today, 7:40am<small id="floatSub">Office deep clean · 3-person crew</small>';
  }
  function showOutdoor(){
    btnOutdoor.classList.add('active','outdoor-active');
    btnIndoor.classList.remove('active');
    outdoorScene.classList.add('active');
    indoorScene.classList.remove('active');
    heroHeading.innerHTML = 'Grounds that stay sharp <span class="accent" style="color:#2FA84F;">all year</span> — cleaning included.';
    heroLede.textContent = 'Landscaping, gardening and plant styling for properties that want their grounds to look intentional every season — paired with the indoor team when you need it.';
    floatLabel.innerHTML = 'Last visit: yesterday, 4:10pm<small id="floatSub">Grounds maintenance · 2-person crew</small>';
  }
  btnIndoor.addEventListener('click', showIndoor);
  btnOutdoor.addEventListener('click', showOutdoor);

  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} });
  }, {threshold:.15});
  revealEls.forEach(el=> io.observe(el));