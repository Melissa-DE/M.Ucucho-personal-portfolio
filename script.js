// Toggle the visibility of a dropdown menu
const toggleDropdown = (dropdown, menu, isOpen) => {
    dropdown.classList.toggle("open", isOpen);
    menu.style.height = isOpen ? `${menu.scrollHeight}px` : 0;
  };
  // Close all open dropdowns
  const closeAllDropdowns = () => {
    document.querySelectorAll(".dropdown-container.open").forEach((openDropdown) => {
      toggleDropdown(openDropdown, openDropdown.querySelector(".dropdown-menu"), false);
    });
  };
  // Attach click event to all dropdown toggles
  document.querySelectorAll(".dropdown-toggle").forEach((dropdownToggle) => {
    dropdownToggle.addEventListener("click", (e) => {
      e.preventDefault();
      const dropdown = dropdownToggle.closest(".dropdown-container");
      const menu = dropdown.querySelector(".dropdown-menu");
      const isOpen = dropdown.classList.contains("open");
      closeAllDropdowns(); // Close all open dropdowns
      toggleDropdown(dropdown, menu, !isOpen); // Toggle current dropdown visibility
    });
  });
  // Attach click event to sidebar toggle buttons
  document.querySelectorAll(".sidebar-toggler, .sidebar-menu-button").forEach((button) => {
    button.addEventListener("click", () => {
      closeAllDropdowns(); // Close all open dropdowns
      document.querySelector(".sidebar").classList.toggle("collapsed"); // Toggle collapsed class on sidebar
    });
  });
  // Collapse sidebar by default
document.querySelector(".sidebar").classList.add("collapsed");
  // Optional JS to flip on button click
  const buttons = document.querySelectorAll('.flip-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.flip-card-inner').classList.toggle('flipped');
    });
  });

  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('dots');

  function showSlide(index) {
    const slider = document.getElementById('slider');
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
  }

  function moveSlide(direction) {
    showSlide(currentSlide + direction);
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('button');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }

  function createDots() {
    slides.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.onclick = () => showSlide(i);
      if (i === 0) btn.classList.add('active');
      dotsContainer.appendChild(btn);
    });
  }

  function autoSlide() {
    moveSlide(1);
  }

  createDots();
  let slideInterval = setInterval(autoSlide, 4000);

  document.querySelector('.slider-wrapper').addEventListener('mouseover', () => clearInterval(slideInterval));
  document.querySelector('.slider-wrapper').addEventListener('mouseout', () => slideInterval = setInterval(autoSlide, 4000));

  document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
      button.classList.add('active');
      document.getElementById(button.getAttribute('data-tab')).classList.add('active');
    });
  });
  
