// Interaktivitas sederhana: tema, cetak, salin harga
(function(){
  const themeToggle = document.getElementById('themeToggle');
  const printBtn = document.getElementById('printBtn');
  const copyPrice = document.getElementById('copyPrice');
  const contactBtn = document.getElementById('contactBtn');
  const negotiateBtn = document.getElementById('negotiateBtn');
  const priceText = document.getElementById('bigPrice').innerText;

  // Inisialisasi tema berdasarkan preferensi sistem atau localStorage
  const stored = localStorage.getItem('cv_theme');
  if(stored === 'light') document.body.classList.add('light');
  else if(!stored){
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    if(prefersLight) document.body.classList.add('light');
  }

  themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('light');
    localStorage.setItem('cv_theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });

  printBtn.addEventListener('click', ()=>{
    // small delay for nicer print rendering
    window.print();
  });

  copyPrice.addEventListener('click', async ()=>{
    try{
      await navigator.clipboard.writeText(priceText);
      copyPrice.textContent = 'Tersalin ✓';
      setTimeout(()=> copyPrice.textContent = 'Salin Harga', 2000);
    }catch(err){
      copyPrice.textContent = 'Gagal Salin';
      setTimeout(()=> copyPrice.textContent = 'Salin Harga', 2000);
    }
  });

  contactBtn.addEventListener('click', ()=>{
    window.location.href = 'mailto:anda@example.com?subject=Tertarik%20dengan%20CV%20(1%20triliun)';
  });

  negotiateBtn.addEventListener('click', ()=>{
    alert('Terima kasih atas minat Anda. Silakan kirim email ke anda@example.com untuk pembicaraan lebih lanjut.');
  });
})();