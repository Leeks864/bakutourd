// Tur verileri
const tours = [
  {
    id: "iceriseher",
    title: "Old City Tour",
    image: "assets/images/iceriseher/ics1.jpg",
    desc: "Icherisheher, also known as the Old City or Inner City, is the ancient, walled core of Baku, the capital of Azerbaijan. A UNESCO World Heritage Site since 2000, Icherisheher is a living testament to thousands of years of history, culture, and architectural evolution.",
    price: "20 AZN",
    url: "iceriseher.html"
  },
  {
    id: "absheron",
    title: "Absheron Tour",
    image: "assets/images/absheron/abs1.jpg",
    desc: "Absheron Peninsula is a unique region near Baku, known for its natural gas flames, mud volcanoes, and historic sites like the Ateshgah Fire Temple and Gobustan. It reflects Azerbaijan’s rich history and its nickname — the Land of Fire.",
    price: "35 AZN",
    url: "absheron.html"
  },
  {
    id: "quba-sahdag",
    title: "Guba & Shahdag Tour",
    image: "assets/images/quba-sahdag/qub1.jpg",
    desc: "Quba, in northern Azerbaijan, is famed for its apple orchards, mountain air, and rich culture. This tour takes you through charming villages to Shahdag Mountain Resort, one of the region’s top destinations for skiing and adventure. Whether in summer or winter, Quba and Shahdag promise breathtaking nature and authentic local experiences.",
    price: "40 AZN",
    url: "quba-sahdag.html"
  },
  {
    id: "samaxi-qabala",
    title: "Shamakha & Gabala Tour",
    image: "assets/images/samaxi-qabala/sam1.jpg",
    desc: "This tour combines two of Azerbaijan’s most iconic regions. Shamakhi, once a seat of ancient Shirvan, offers historical treasures like the Juma Mosque. Gabala enchants with its lush forests, waterfalls, and amusement park. From cultural landmarks to natural serenity, the Shamakhi-Gabala route is a perfect mix of history and scenic charm.",
    price: "45 AZN",
    url: "samaxi-qebele.html"
  },
  {
    id: "quba-xinaliq",
    title: "Guba & Khinalug & Candy Mountain Tour",
    image: "assets/images/quba-xinaliq/xin1.jpg",
    desc: "Explore the cultural depths of Azerbaijan on a journey from Quba to Khinaliq—one of the highest and oldest mountain villages in the Caucasus. This tour reveals stunning mountain landscapes, ancient traditions, and the unique lifestyle of Khinaliq’s people. It’s a timeless adventure into history, highland life, and untouched natural beauty.",
    price: "50 AZN",
    url: "quba-xinaliq.html"
  },
  {
    id: "fivefinger",
    title: "Five Finger Mountain & Pink Lake Tour",
    image: "assets/images/fivefinger/fiv1.jpg",
    desc: "The Five Finger Mountain and the surreal Pink Lake in Khizi are among Azerbaijan’s natural wonders. This tour offers a chance to witness the mineral-rich waters that shimmer in pink hues and explore dramatic landscapes shaped by wind and time. A favorite for nature lovers and photographers, it’s a journey into the unique beauty of Azerbaijan’s wild terrain.",
    price: "50 AZN",
    url: "fivefinger.html"
  },
  {
    id: "lenkeran",
    title: "Lankaran Tour",
    image: "assets/images/lenkeran/len1.jpg",
    desc: "Lankaran, nestled on the southern coast of Azerbaijan by the Caspian Sea, is known for its subtropical climate, citrus groves, and thermal springs. A blend of natural beauty and history, the city boasts ancient fortresses, lush forests, and the unique Talysh culture. This tour is perfect for those seeking relaxation, heritage, and scenic coastal landscapes.",
    price: "60 AZN",
    url: "lenkeran.html"
  }
];


function renderTours() {
  const container = document.getElementById("tours-container");
  if (!container) return;
  container.innerHTML = "";
  tours.forEach(tour => {
    container.innerHTML += `
      <div class="tour-card">
        <div class="tour-card-photo">
          <img src="${tour.image}" alt="${tour.title}">
          <span class="tour-card-price">${tour.price}</span>
        </div>
        <div class="tour-card-content">
          <div class="tour-card-title">${tour.title}</div>
          <div class="tour-card-desc">${tour.desc}</div>
          <a href="${tour.url}" class="tour-card-btn">See Details</a>
        </div>
      </div>
    `;
  });
}

// SPA menü geçişleri
document.querySelectorAll('nav a[data-section]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    this.classList.add('active');
    var section = this.getAttribute('data-section');
    document.querySelectorAll('main section').forEach(s => s.classList.remove('active'));
    var sec = document.getElementById(section);
    if(sec) sec.classList.add('active');
    if(section === "tours") renderTours();
  });
});

// Sayfa yüklenince Tours gridini hazırla
document.addEventListener("DOMContentLoaded", function() {
  if(document.getElementById("tours-container")) renderTours();
});
// Увеличение фото в галерее (модальное окно)
document.addEventListener("DOMContentLoaded", function() {
  // Находим все картинки галереи
  document.querySelectorAll('.about-gallery-grid img').forEach(function(img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
      var modal = document.getElementById("gallery-modal");
      var modalImg = document.getElementById("gallery-modal-img");
      var captionText = document.getElementById("gallery-modal-caption");
      modal.style.display = "flex";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt || '';
    });
  });

  // Закрытие модального окна
  document.querySelector('.gallery-modal-close').onclick = function() {
    document.getElementById("gallery-modal").style.display = "none";
  };

  // Клик вне картинки — тоже закрыть
  document.getElementById("gallery-modal").onclick = function(e) {
    if (e.target === this) {
      this.style.display = "none";
    }
  };
});
document.addEventListener("DOMContentLoaded", function() {
  // Собираем массив всех картинок галереи
  const galleryImages = Array.from(document.querySelectorAll('.about-gallery-grid img'));
  let currentIndex = 0;

  // Ссылки на модальное окно и элементы
  const modal = document.getElementById("gallery-modal");
  const modalImg = document.getElementById("gallery-modal-img");
  const captionText = document.getElementById("gallery-modal-caption");
  const closeBtn = document.querySelector('.gallery-modal-close');
  const arrowLeft = document.querySelector('.gallery-modal-arrow-left');
  const arrowRight = document.querySelector('.gallery-modal-arrow-right');

  // Открытие модального окна
  galleryImages.forEach(function(img, idx) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
      currentIndex = idx;
      showModalImage(currentIndex);
    });
  });

  function showModalImage(idx) {
    modal.style.display = "flex";
    modalImg.src = galleryImages[idx].src;
    captionText.innerHTML = galleryImages[idx].alt || '';
  }

  // Кнопка "влево"
  arrowLeft.onclick = function(e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showModalImage(currentIndex);
  };

  // Кнопка "вправо"
  arrowRight.onclick = function(e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showModalImage(currentIndex);
  };

  // Закрытие модального окна
  closeBtn.onclick = function() {
    modal.style.display = "none";
  };

  // Клик вне картинки — закрыть
  modal.onclick = function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

  // Дополнительно: стрелки на клавиатуре
  document.addEventListener('keydown', function(e) {
    if(modal.style.display === "flex") {
      if (e.key === 'ArrowLeft') arrowLeft.onclick(e);
      if (e.key === 'ArrowRight') arrowRight.onclick(e);
      if (e.key === 'Escape') closeBtn.onclick();
    }
  });
});