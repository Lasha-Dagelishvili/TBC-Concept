//ჩამოსაშლელი მენიუს ფუნქცია

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    const allDropdowns = document.querySelectorAll(".boxer");
  
    allDropdowns.forEach(function (dropdown) {
      if (dropdown.id !== id) {
        dropdown.style.visibility = "hidden";
      }
      if (dropdown.id === "offers-dropdown") {
      }
    });
    if (
      dropdown.style.visibility === "hidden" ||
      dropdown.style.visibility === ""
    ) {
      dropdown.style.visibility = "visible";
    } else {
      dropdown.style.visibility = "hidden";
    }
  }
  window.onclick = function (event) {
    if (!event.target.matches(".navigation a")) {
      const allDropdowns = document.querySelectorAll(".boxer");
      allDropdowns.forEach(function (dropdown) {
        dropdown.style.visibility = "hidden";
      });
    }
  };
  
  
  //პირველი სლაიდერის ღილაკების და სქროლის ფუნქცია
  
  document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".slider-container");
    const scrollContent = document.querySelector(".image-list1");
    const scrollbarTrack = document.querySelector(".scrollbar-track");
    const scrollbarThumb = document.querySelector(".scrollbar-thumb");
    const leftArrow = document.querySelector(".scroll-arrow.left");
    const rightArrow = document.querySelector(".scroll-arrow.right");
  
    function updateScrollThumb() {
      const contentWidth = scrollContent.scrollWidth;
      const containerWidth = scrollContainer.clientWidth;
      const scrollLeft = scrollContent.scrollLeft;
      const thumbWidth = (containerWidth / contentWidth) * 100;
      const thumbPosition = (scrollLeft / contentWidth) * 100;
      scrollbarThumb.style.width = `${thumbWidth}%`;
      scrollbarThumb.style.left = `${thumbPosition}%`;
    }
  
    scrollbarThumb.addEventListener("mousedown", function (event) {
      event.preventDefault();
      const startX = event.pageX;
      const scrollStart = scrollContent.scrollLeft;
  
      function onMouseMove(event) {
        const deltaX = event.pageX - startX;
        scrollContent.scrollLeft =
          scrollStart +
          (deltaX / scrollbarTrack.clientWidth) * scrollContent.scrollWidth;
      }
  
      function onMouseUp() {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      }
  
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
  
    leftArrow.addEventListener("click", function () {
      scrollContent.scrollLeft -= 200;
      updateScrollThumb();
    });
  
    rightArrow.addEventListener("click", function () {
      scrollContent.scrollLeft += 200;
      updateScrollThumb();
    });
  
    scrollContent.addEventListener("scroll", updateScrollThumb);
  
    updateScrollThumb();
  });
  
  ////// მეორე სლაიდერის ღილაკების და სქროლლბარის ფუნქცია
  
  document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(
      ".slider-container.second-slider"
    );
    const scrollContent = document.querySelector(".image-list2");
    const scrollbarTrack = document.querySelector(".track2");
    const scrollbarThumb = document.querySelector(".thumb2");
    const leftArrow = document.querySelector(".left1");
    const rightArrow = document.querySelector(".right1");
  
    function updateScrollThumb() {
      const contentWidth = scrollContent.scrollWidth;
      const containerWidth = scrollContainer.clientWidth;
      const scrollLeft = scrollContent.scrollLeft;
      const thumbWidth = (containerWidth / contentWidth) * 100;
      const thumbPosition = (scrollLeft / contentWidth) * 100;
      scrollbarThumb.style.width = `${thumbWidth}%`;
      scrollbarThumb.style.left = `${thumbPosition}%`;
    }
  
    scrollbarThumb.addEventListener("mousedown", function (event) {
      event.preventDefault();
      const startX = event.pageX;
      const scrollStart = scrollContent.scrollLeft;
  
      function onMouseMove(event) {
        const deltaX = event.pageX - startX;
        scrollContent.scrollLeft =
          scrollStart +
          (deltaX / scrollbarTrack.clientWidth) * scrollContent.scrollWidth;
      }
  
      function onMouseUp() {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      }
  
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
  
    leftArrow.addEventListener("click", function () {
      scrollContent.scrollLeft -= 200;
      updateScrollThumb();
    });
  
    rightArrow.addEventListener("click", function () {
      scrollContent.scrollLeft += 200;
      updateScrollThumb();
    });
  
    scrollContent.addEventListener("scroll", updateScrollThumb);
  
    updateScrollThumb();
  });
  //პირველი სლაიდერის drag ფუნქცია
  let isDown = false;
  let startX;
  let scrollLeft;
  const slider = document.querySelector(".image-list1");
  const secondSlider = document.querySelector(".image-list2");
  
  const end = () => {
    isDown = false;
    slider.classList.remove("active");
  };
  
  const start = (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };
  
  const move = (e) => {
    if (!isDown) return;
  
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = x - startX;
    slider.scrollLeft = scrollLeft - dist;
  };
  
  (() => {
    slider.addEventListener("mousedown", start);
    slider.addEventListener("touchstart", start);
  
    slider.addEventListener("mousemove", move);
    slider.addEventListener("touchmove", move);
  
    slider.addEventListener("mouseleave", end);
    slider.addEventListener("mouseup", end);
    slider.addEventListener("touchend", end);
  })();
  
  //მეორე სლაიდერის drag ფუნქცია
  
  const end1 = () => {
    isDown = false;
    secondSlider.classList.remove("active");
  };
  
  const start1 = (e) => {
    isDown = true;
    secondSlider.classList.add("active");
    startX = e.pageX || e.touches[0].pageX - secondSlider.offsetLeft;
    scrollLeft = secondSlider.scrollLeft;
  };
  
  const move1 = (e) => {
    if (!isDown) return;
  
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - secondSlider.offsetLeft;
    const dist = x - startX;
    secondSlider.scrollLeft = scrollLeft - dist;
  };
  
  (() => {
    secondSlider.addEventListener("mousedown", start1);
    secondSlider.addEventListener("touchstart", start1);
  
    secondSlider.addEventListener("mousemove", move1);
    secondSlider.addEventListener("touchmove", move1);
  
    secondSlider.addEventListener("mouseleave", end1);
    secondSlider.addEventListener("mouseup", end1);
    secondSlider.addEventListener("touchend", end1);
  })();
  
  ////ქვედა მარჯვენა ღილაკის ფუნქცია
  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuItems = document.querySelector(".menu-items");
  
    menuToggle.addEventListener("click", (e) => {
      e.preventDefault();
      if (menuItems.style.display === "none" || menuItems.style.display === "") {
        menuItems.style.display = "flex";
        menuToggle.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4141 12L17.7071 7.70701C18.0981 7.31601 18.0981 6.68401 17.7071 6.29301C17.3161 5.90201 16.6841 5.90201 16.2931 6.29301L12.0001 10.586L7.70713 6.29301C7.31613 5.90201 6.68413 5.90201 6.29313 6.29301C5.90213 6.68401 5.90213 7.31601 6.29313 7.70701L10.5861 12L6.29313 16.293C5.90213 16.684 5.90213 17.316 6.29313 17.707C6.48813 17.902 6.74413 18 7.00013 18C7.25613 18 7.51213 17.902 7.70713 17.707L12.0001 13.414L16.2931 17.707C16.4881 17.902 16.7441 18 17.0001 18C17.2561 18 17.5121 17.902 17.7071 17.707C18.0981 17.316 18.0981 16.684 17.7071 16.293L13.4141 12Z"></path>
            <mask id="mask0_907_111854" maskUnits="userSpaceOnUse" x="5" y="5" width="14" height="13" style="mask-type: luminance;">
              <path d="M13.4141 12L17.7071 7.70701C18.0981 7.31601 18.0981 6.68401 17.7071 6.29301C17.3161 5.90201 16.6841 5.90201 16.2931 6.29301L12.0001 10.586L7.70713 6.29301C7.31613 5.90201 6.68413 5.90201 6.29313 6.29301C5.90213 6.68401 5.90213 7.31601 6.29313 7.70701L10.5861 12L6.29313 16.293C5.90213 16.684 5.90213 17.316 6.29313 17.707C6.48813 17.902 6.74413 18 7.00013 18C7.25613 18 7.51213 17.902 7.70713 17.707L12.0001 13.414L16.2931 17.707C16.4881 17.902 16.7441 18 17.0001 18C17.2561 18 17.5121 17.902 17.7071 17.707C18.0981 17.316 18.0981 16.684 17.7071 16.293L13.4141 12Z"></path>
            </mask>
            <g mask="url(#mask0_907_111854)"></g>
          </svg>`;
      } else {
        menuItems.style.display = "none";
        menuToggle.textContent = "⋮";
      }
    });
  });
  
  //გვერდითა(head-menu)-ს ფუნქცია
  
  function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const burgerbar = document.querySelector(".head-menu");
    const close = document.querySelector(".close");
    sidebar.style.display = "flex";
    burgerbar.style.display = "none";
    close.style.display = "flex";
  }
  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const burgerbar = document.querySelector(".head-menu");
    const close = document.querySelector(".close");
    sidebar.style.display = "none";
    burgerbar.style.display = "flex";
    close.style.display = "none";
  }
  
  function checkScreenWidth() {
    const burgerMenu = document.querySelector(".head-menu");
    const sidebar = document.querySelector(".sidebar");
    const close = document.querySelector(".close");
  
    if (window.innerWidth > 800) {
      burgerMenu.style.display = "none";
      close.style.display = "none";
  
      if (sidebar.style.display === "flex") {
        sidebar.style.display = "none";
      }
    } else {
      burgerMenu.style.display = "block";
      close.style.display = "none"; // Ensure 'close' is hidden when screen width is <= 800
      sidebar.style.display = "none";
    }
  }
  
  // Call the function on window resize
  window.addEventListener("resize", checkScreenWidth);
  
  // Call the function on initial load
  checkScreenWidth();
  
  const faqs = document.querySelectorAll(".faq");
  
  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  });
  