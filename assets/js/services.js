var swiper = new Swiper(".adventure-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 52,
    coverflowEffect: {
      rotate: 0,
    },
  });

  function advenFunction() {
    var adven = document.getElementById("adventure")
    var diving = document.getElementById("dive")
    var eat = document.getElementById("foods")
    var muse = document.getElementById("museum")
    var fest = document.getElementById("festival")
    var sight = document.getElementById("sight")

    if (adven.style.display == "none") {
      adven.style.display = "block";
      diving.style.display = "none";
      eat.style.display = "none";
      muse.style.display = "none";
      fest.style.display = "none";
      sight.style.display = "none";

    } else {
      adven.style.display = "block";;
      diving.style.display = "none";
      eat.style.display = "none";
      muse.style.display = "none";
      fest.style.display = "none";
      sight.style.display = "none";

    }
  }

  function diveFunction() {
    var adven = document.getElementById("adventure")
    var diving = document.getElementById("dive")
    var eat = document.getElementById("foods")
    var muse = document.getElementById("museum")
    var fest = document.getElementById("festival")
    var sight = document.getElementById("sight")

    if (diving.style.display == "none") {
      adven.style.display = "none";
      diving.style.display = "block";
      eat.style.display = "none";
      muse.style.display = "none";
      fest.style.display = "none";
      sight.style.display = "none";

    } else {
      adven.style.display = "none";
      diving.style.display = "block";
      eat.style.display = "none";
      muse.style.display = "none";
      fest.style.display = "none";
      sight.style.display = "none";

    }
  }
  function foodsFunction() {
    var adven = document.getElementById("adventure")
    var diving = document.getElementById("dive")
    var eat = document.getElementById("foods")
    var muse = document.getElementById("museum")
    var fest = document.getElementById("festival")
    var sight = document.getElementById("sight")

    if (eat.style.display == "none") {
      adven.style.display = "none";
      diving.style.display = "none";
      eat.style.display = "block";
      muse.style.display = "none";
      fest.style.display = "none";
      sight.style.display = "none";

    } else {
      adven.style.display = "none";
      diving.style.display = "none";
      eat.style.display = "block";
      muse.style.display = "none";
      fest.style.display = "none";
      sight.style.display = "none";

    }
  }
  function museumFunction() {
    var adven = document.getElementById("adventure")
    var diving = document.getElementById("dive")
    var eat = document.getElementById("foods")
    var muse = document.getElementById("museum")
    var fest = document.getElementById("festival")
    var sight = document.getElementById("sight")

    if (muse.style.display == "none") {
      adven.style.display = "none";
      diving.style.display = "none";
      eat.style.display = "none";
      muse.style.display = "block";
      fest.style.display = "none";
      sight.style.display = "none";

    } else {
      adven.style.display = "none";
      diving.style.display = "none";
      eat.style.display = "none";
      muse.style.display = "block";
      fest.style.display = "none";
      sight.style.display = "none";

    }
  }
  function festivalFunction() {
    var adven = document.getElementById("adventure")
    var diving = document.getElementById("dive")
    var eat = document.getElementById("foods")
    var muse = document.getElementById("museum")
    var fest = document.getElementById("festival")
    var sight = document.getElementById("sight")

    if (fest.style.display == "none") {
      adven.style.display = "none";
      diving.style.display = "none";
      eat.style.display = "none";
      muse.style.display = "none";
      fest.style.display = "block";
      sight.style.display = "none";

    } else {
      adven.style.display = "none";
      diving.style.display = "none";
      eat.style.display = "none";
      muse.style.display = "none";
      fest.style.display = "block";
      sight.style.display = "none";

    }
  }
  function sightFunction() {
    var adven = document.getElementById("adventure")
    var diving = document.getElementById("dive")
    var eat = document.getElementById("foods")
    var muse = document.getElementById("museum")
    var fest = document.getElementById("festival")
    var sight = document.getElementById("sight")

    if (sight.style.display == "none") {
      adven.style.display = "none";
      diving.style.display = "none";
      eat.style.display = "none";
      muse.style.display = "none";
      fest.style.display = "none";
      sight.style.display = "block";

    } else {
      adven.style.display = "none";
      diving.style.display = "none";
      eat.style.display = "none";
      muse.style.display = "none";
      fest.style.display = "none";
      sight.style.display = "block";

    }
  }

