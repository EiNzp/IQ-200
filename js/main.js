
// burger menu

const iconMenuButton = document.querySelector('.header__icon-button');
const menuBody = document.querySelector('.menu__body');

if (iconMenuButton && menuBody) {
  iconMenuButton.addEventListener('click', function (e) {
    document.body.classList.toggle('body_lock')
    iconMenuButton.classList.toggle('header__icon-button_active');
    menuBody.classList.toggle('menu__body_active');
  })
}

let menuItems = [...document.querySelectorAll('.menu__item')];
for (const i in menuItems) {
  let el = menuItems[i]
  el.addEventListener('click', function (e) {

    if (!el.querySelector('.menu__sub-list')) {

      if (document.querySelector('.menu__body.menu__body_active')) {
        document.body.classList.toggle('body_lock')
        iconMenuButton.classList.toggle('header__icon-button_active');
        menuBody.classList.toggle('menu__body_active');
      }

    }

  })
}

let menuSubItem = [...document.querySelectorAll('.menu__sub-item')];
for (const i in menuSubItem) {
  let el = menuSubItem[i]
  el.addEventListener('click', function (e) {



    if (document.querySelector('.menu__body.menu__body_active')) {
      document.body.classList.toggle('body_lock')
      iconMenuButton.classList.toggle('header__icon-button_active');
      menuBody.classList.toggle('menu__body_active');
    }



  })
}


// открытие подменю

let subLists = document.querySelectorAll('.menu__sub-list');
if (subLists.length > 0) {
  for (let i = 0; i < subLists.length; i++) {
    const subList = subLists[i];
    subList.parentElement.addEventListener('click', function (e) {

      // for (let y = 0; y < subLists.length; y++) {
      //   if (subLists[y].parentElement.classList.contains('menu__item_active')) {
      //     subLists[y].parentElement.classList.toggle('menu__item_active');
      //   }

      // }

      subList.parentElement.classList.toggle('menu__item_active');
    })
  }
}

// скрыть меню начало

// Получаем элементы, с которыми будем работать
const menu = document.querySelector('.header'); // Всё меню
const menuItem = document.querySelector('.info-body-header__info'); // Определённый элемент меню
// const block1 = document.querySelector('.main-block-main-page__title'); // Первый блок
// const block2 = document.querySelector('.educational-center__header-title'); // Второй блок

let block1
if (document.querySelector('.main-block-main-page__title')) {
  block1 = document.querySelector('.main-block-main-page__title');
} else if (document.querySelector('.main-block-math-classes__title')) {
  block1 = document.querySelector('.main-block-math-classes__title');
} else if (document.querySelector('.main-block-physics__title')) {
  block1 = document.querySelector('.main-block-physics__title');
} else if (document.querySelector('.main-block-ukrainian-language-and-literature__title')) {
  block1 = document.querySelector('.main-block-ukrainian-language-and-literature__title');
} else if (document.querySelector('.main-block-chemistry__title')) {
  block1 = document.querySelector('.main-block-chemistry__title');
} else if (document.querySelector('.main-block-biology__title')) {
  block1 = document.querySelector('.main-block-biology__title');
} else if (document.querySelector('.main-block-geography__title')) {
  block1 = document.querySelector('.main-block-geography__title');
} else if (document.querySelector('.main-block-story__title')) {
  block1 = document.querySelector('.main-block-story__title');
} else if (document.querySelector('.main-block-zno__title')) {
  block1 = document.querySelector('.main-block-zno__title');
} else if (document.querySelector('.main-block-english-for-children__title')) {
  block1 = document.querySelector('.main-block-english-for-children__title');
} else if (document.querySelector('.main-block-english-for-adults__title')) {
  block1 = document.querySelector('.main-block-english-for-adults__title');
} else if (document.querySelector('.main-block-hmt-in-english__title')) {
  block1 = document.querySelector('.main-block-hmt-in-english__title');
} else if (document.querySelector('.main-block-preparation-for-international-exams__title')) {
  block1 = document.querySelector('.main-block-preparation-for-international-exams__title');
} else if (document.querySelector('.main-block-business-english__title')) {
  block1 = document.querySelector('.main-block-business-english__title');
} else if (document.querySelector('.main-block-english-with-native-speaker__title')) {
  block1 = document.querySelector('.main-block-english-with-native-speaker__title');
} else if (document.querySelector('.main-block-financial-literacy__title')) {
  block1 = document.querySelector('.main-block-financial-literacy__title');
} else if (document.querySelector('.main-block-entrepreneurship__title')) {
  block1 = document.querySelector('.main-block-entrepreneurship__title');
} else if (document.querySelector('.main-block-promotions__header-title')) {
  block1 = document.querySelector('.main-block-promotions__header-title');
}

let block2
if (document.querySelector('.educational-center__header-title')) {
  block2 = document.querySelector('.educational-center__header-title');
} else if (document.querySelector('.advantages-financial-literacy__title')) {
  block2 = document.querySelector('.advantages-financial-literacy__title')
} else if (document.querySelector('.course-events-entrepreneurship__title')) {
  block2 = document.querySelector('.course-events-entrepreneurship__title')
} else if (document.querySelector('.price-cards__header-title')) {
  block2 = document.querySelector('.price-cards__header-title')
} else if (document.querySelector('.main-block-promotions__referral-info')) {
  block2 = document.querySelector('.main-block-promotions__referral-info')
}

let menuHidden = false; // Флаг, показывающий, что меню задвинуто
let menuItemHidden = false; // Флаг, показывающий, что элемент меню скрыт

let lastScrollTop = 0; // Переменная для отслеживания направления прокрутки

// Обработчик события прокрутки
window.addEventListener('scroll', function () {
  // Получаем текущую позицию прокрутки
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Получаем координаты блоков относительно окна  
  const block1Rect = block1.getBoundingClientRect();
  const block2Rect = block2.getBoundingClientRect();



  // Проверка для скрытия элемента меню при достижении блока 1
  if (block1Rect.top <= 0 && !menuItemHidden) {
    menuItem.classList.add('hidden');
    menuItemHidden = true; // Обновляем флаг
  } else if (block1Rect.top > 0 && menuItemHidden) {
    menuItem.classList.remove('hidden');
    menuItemHidden = false; // Возвращаем элемент
  }

  // Проверка для задвигания меню при достижении блока 2
  if (scrollTop > lastScrollTop && block2Rect.top < 0 && !menuHidden) {
    // Прокрутка вниз и верх экрана ниже верхней границы блока 2
    menu.classList.add('hidden');
    menuHidden = true; // Скрываем меню
  } else if (scrollTop < lastScrollTop && block2Rect.top < 0 && menuHidden) {
    // Прокрутка вверх и верх экрана ниже верхней границы блока 2
    menu.classList.remove('hidden');
    menuHidden = false; // Показываем меню
  }

  // Обновляем позицию прокрутки для определения направления
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// // Обработчик события прокрутки
// window.addEventListener('scroll', function () {
//   // Получаем координаты блоков относительно окна
//   const block1Rect = block1.getBoundingClientRect();
//   const block2Rect = block2.getBoundingClientRect();

//   // Проверка для скрытия элемента меню при достижении блока 1
//   if (block1Rect.top <= 0 && !menuItemHidden) {
//     menuItem.classList.add('hidden');
//     menuItemHidden = true; // Обновляем флаг
//   } else if (block1Rect.top > 0 && menuItemHidden) {
//     menuItem.classList.remove('hidden');
//     menuItemHidden = false; // Возвращаем элемент
//   }

//   // Проверка для задвигания меню при достижении блока 2
//   if (block2Rect.top <= 0 && !menuHidden) {
//     menu.classList.add('hidden');
//     menuHidden = true; // Обновляем флаг
//   } else if (block2Rect.top > 0 && menuHidden) {
//     menu.classList.remove('hidden');
//     menuHidden = false; // Возвращаем меню
//   }
// });

// скрыть меню конец

// открытие формы
// window.onload = function() {
const popupForm = document.querySelector('.popup-form');
const buttonsActivForm = [...document.querySelectorAll('[class*="button-form-activ"]')];
const popupThankyou = document.querySelector('.popup-thankyou');

for (const i in buttonsActivForm) {
  let el = buttonsActivForm[i];

  el.addEventListener('click', function (e) {
    e.preventDefault();
    popupForm.classList.remove("popup-form_disable");
    document.body.classList.add('body_lock');
  })
}

// закрытие формы

const closeButton = document.querySelector('.popup-form__close');
if (closeButton) {
  closeButton.addEventListener('click', function () {
    popupForm.classList.add("popup-form_disable");
    document.body.classList.remove('body_lock')
  });
}

popupForm.addEventListener('click', function (e) {
  if (!e.target.closest('.popup-form__content')) {
    popupForm.classList.add("popup-form_disable");
    document.body.classList.remove('body_lock');
  }
})

// провнрка на нажатие кнопки "Esc" у нее код 27
document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    popupForm.classList.add("popup-form_disable");
    document.body.classList.remove('body_lock');
  }
})

// отправка формы

$('.form-popup').on('submit', function (event) {

  event.stopPropagation();
  event.preventDefault();

  let form = this,
    submit = $('.submit', form),
    data = new FormData(),
    files = $('input[type=file]')


  $('.submit', form).val('Отправка...');
  $('input, textarea', form).attr('disabled', '');

  data.append('Имя', $('[name="name"]', form).val());
  data.append('Телефон', $('[name="phone"]', form).val());
  data.append('Описание', $('[name="opisanie"]', form).val());


  files.each(function (key, file) {
    let cont = file.files;
    if (cont) {
      $.each(cont, function (key, value) {
        data.append(key, value);
      });
    }
  });

  $.ajax({
    url: 'ajax.php',
    type: 'POST',
    data: data,
    cache: false,
    dataType: 'json',
    processData: false,
    contentType: false,
    xhr: function () {
      let myXhr = $.ajaxSettings.xhr();

      if (myXhr.upload) {
        myXhr.upload.addEventListener('progress', function (e) {
          if (e.lengthComputable) {
            let percentage = (e.loaded / e.total) * 100;
            percentage = percentage.toFixed(0);
            $('.submit', form)
              .html(percentage + '%');
          }
        }, false);
      }

      return myXhr;
    },
    error: function (jqXHR, textStatus) {
      // Тут выводим ошибку
    },
    complete: function () {
      // Тут можем что-то делать ПОСЛЕ успешной отправки формы
      form.reset()
      $('#name').removeAttr('disabled');
      $('#Phone').removeAttr('disabled');
      $('#Opisanie').removeAttr('disabled');
      $('#formPopupSubmit').removeAttr('disabled');
      popupForm.classList.add("popup-form_disable");
      popupThankyou.classList.remove("popup-thankyou_disable");
    }
  });

  return false;
});

// закрытие popup-thankyou

const closeButtonThankyou = document.querySelector('.popup-thankyou__close');
if (closeButton) {
  closeButtonThankyou.addEventListener('click', function () {
    popupThankyou.classList.add("popup-thankyou_disable");
    document.body.classList.remove('body_lock')
  });
}

popupThankyou.addEventListener('click', function (e) {
  if (!e.target.closest('.popup-thankyou__content')) {
    popupThankyou.classList.add("popup-thankyou_disable");
    document.body.classList.remove('body_lock');
  }
})

// провнрка на нажатие кнопки "Esc" у нее код 27
document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    popupThankyou.classList.add("popup-thankyou_disable");
    document.body.classList.remove('body_lock');
  }
})


// конец скрипта отправки формы

// }


// slider Swiper



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,
  slidesPerView: 2,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1.15,
      spaceBetween: 30
    },
    900: {
      slidesPerView: 2.15,
      spaceBetween: 30
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',

    clickable: true,

    dynamicBullets: true,
  },

  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});