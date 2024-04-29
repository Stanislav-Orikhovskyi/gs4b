<template>
  <v-app >
    <main class="container">

      <v-main>
        <section class="header-top">
          <SocialSection />

          <div class="header-side">
            <v-btn class="phone-btn" size="large" rounded="xl" :href="`tel:067-322-16-63`">
              <span class="phone-btn--icon">
                <v-img :width="24" :height="24" src="@/assets/images/icons/phone.svg"></v-img>
              </span>
              067-322-16-63
            </v-btn>
            <div class="lang">
              <v-btn min-width="24" flat class="lang-en">EN</v-btn>
              <div class="lang-divider"></div>
              <v-btn min-width="24" flat class="lang-ua">
                <v-img :width="24" :height="24"  src="@/assets/images/icons/flag-ua.svg"></v-img>UA
              </v-btn>
            </div>
            <v-btn class="bookmark-btn" height="40" min-width="40"  :elevation="0">
              <v-img :width="40" :height="40" src="@/assets/images/icons/icon-bookmark.svg"></v-img>
            </v-btn>
          </div>
        </section>

        <v-toolbar density="compact" class="header" >
          <LogoBlock />

          <v-toolbar-items class="nav" color="general">
            <v-list-item>
              <v-btn class="nav-link" href="#">Купить</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn class="nav-link" href="#">Услуги</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn class="nav-link" href="#">Блог</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn class="nav-link" href="#">Вакансии</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn class="nav-link" href="#">Контакты</v-btn>
            </v-list-item>
          </v-toolbar-items>

          <v-btn class="login ma-0" height="48">Войти</v-btn>
        </v-toolbar>

        <v-breadcrumbs class="breadcrumbs" :items="['Главная', 'Купить', 'Автомобили Ford', 'Ford Edge 2016 - Код товара: 40845']"></v-breadcrumbs>

        <menu class="menu">
          <v-toolbar-items class="menu-items">
            <v-btn href="#">Все про авто</v-btn>|
            <v-btn href="#">Характеристики</v-btn>|
            <v-btn href="#">Дополнительно</v-btn>|
            <v-btn href="#">Салон</v-btn>|
            <v-btn href="#">Оптика</v-btn>|
            <v-btn href="#">Кузов</v-btn>|
            <v-btn href="#">Система помощи при парковке</v-btn>|
            <v-btn href="#">Безопасность</v-btn>|
            <v-btn href="#">Мультимедиа</v-btn>|
            <v-btn href="#">Отзывы</v-btn>
          </v-toolbar-items>
        </menu>

        <section class="content">
          <v-row>
            <v-col class="content-slider" cols="12" md="8">
              <div class="car">
                <div class="car-info mr-2">Сегодня</div>
                <div class="car-date mr-3">14.12.2023</div>
                <div class="d-flex mr-2 car-views">
                  <v-img class="mr-1" :width="24" :height="24" src="@/assets/images/icons/icon-user.svg"></v-img>
                  <span>20</span>
                </div>
                <div class="d-flex mr-2 car-saves">
                  <v-img class="mr-1" :width="24" :height="24" src="@/assets/images/icons/icon-bookmark.svg"></v-img>
                  <span>50</span>
                </div>
                <div class="d-flex mr-2 car-calls">
                  <v-img class="mr-1" :width="24" :height="24" src="@/assets/images/icons/icon-dark-phone.svg"></v-img>
                  <span>17</span>
                </div>
                <div class="car-checks">
                  VIN-код:
                  <span>17</span>
                </div>
              </div>

              <!-- Slider-->
              <SliderBlock />
              <v-row>
                <v-col>
                  <div class="specs">
                    <div class="specs-cols specs-name">
                      <div class="specs-icon specs-icon--speed"></div>
                      Пробег
                    </div>
                    <div class="specs-cols specs-value">180 000 км</div>
                  </div>
                  <div class="specs">
                    <div class="specs-cols specs-name">
                      <div class="specs-icon specs-icon--fuel"></div>
                      Объем двигателя:
                    </div>
                    <div class="specs-cols specs-value">2,7 л</div>
                  </div>
                  <div class="specs">
                    <div class="specs-cols specs-name">
                      <div class="specs-icon specs-icon--drive"></div>
                      Привод:
                    </div>
                    <div class="specs-cols specs-value">Полный</div>
                  </div>
                  <div class="specs">
                    <div class="specs-cols specs-name">
                      <div class="specs-icon specs-icon--power"></div>
                      Лошадиные силы:
                    </div>
                    <div class="specs-cols specs-value">15</div>
                  </div>
                </v-col>
                <v-col>
                  <div class="specs">
                    <div class="specs-cols specs-name">
                      <div class="specs-icon specs-icon--fuel"></div>
                      Топливо:
                    </div>
                    <div class="specs-cols specs-value">Бензин</div>
                  </div>
                  <div class="specs">
                    <div class="specs-cols specs-name">
                      <div class="specs-icon specs-icon--gear"></div>
                      Трансмиссия:
                    </div>
                    <div class="specs-cols specs-value">Автомат</div>
                  </div>
                  <div class="specs">
                    <div class="specs-cols specs-name">
                      <div class="specs-icon specs-icon--minus"></div>
                      Расход:
                    </div>
                    <div class="specs-cols specs-value">15л/100км</div>
                  </div>
                  <div class="specs">
                    <div class="specs-cols specs-name">
                      <div class="specs-icon specs-icon--fix"></div>
                      ДТП:
                    </div>
                    <div class="specs-cols specs-value">Без ДТП, не бито, не крашено</div>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="content-side" cols="12" md="4">
              <div class="title d-flex justify-lg-space-between">Ford Edge 2016
                <div class="title-icons">
                  <v-btn href="#" max-width="25" min-width="20" height="25" flat>
                    <v-img :width="18" :height="18" src="@/assets/images/icons/icon-state.svg"></v-img>
                  </v-btn>
                  <v-btn href="#" max-width="25" min-width="20" height="25" flat>
                    <v-img :width="18" :height="18" src="@/assets/images/icons/icon-bookmark.svg"></v-img>
                  </v-btn>
                </div>
              </div>
              <div class="d-flex justify-lg-space-between product-code">
                <span>Код товара: 40845</span>
                <span class="product-code--city">Львов</span>
              </div>
              <div class="product-divider"></div>
              <div class="product">
                <div class="product-currency d-flex justify-lg-space-center">
                  <span class="product-currency--price">Цена</span>
                  <v-toolbar-items class="product-list d-flex justify-lg-space-center">
                    <v-btn class="product-link" min-width="30" flat href="#">ГРН</v-btn>
                    <v-btn class="product-link" min-width="30" flat href="#">USD</v-btn>
                    <v-btn class="product-link" min-width="30" flat href="#">EUR</v-btn>
                    <v-btn class="product-link" min-width="30" flat href="#">crypto</v-btn>
                  </v-toolbar-items>
                </div>
                <div class="product-price">62 490 USD</div>
                <div class="product-credit">от 511$/мес</div>
                <div class="product-addition">
                  *Ежемесячный платеж носит информационный характер и может меняться на момент получения детального расчета
                  *Возможна оплата криптовалютой
                </div>
                <div class="product-divider"></div>
                <div class="product-filters">
                  <v-btn flat min-width="60" class="product-filter">Все авто</v-btn>
                  <v-btn flat min-width="60" class="product-filter">Официальное авто</v-btn>
                  <v-btn flat min-width="60" class="product-filter">Авто с Европы</v-btn>
                </div>
                <div class="product-published">Опубликовано 14.12.2023</div>
                <div class="product-divider"></div>
                <v-btn flat class="contact-btn" height="40">
                  <v-img class="contact-btn--img" :width="18" :height="18" src="@/assets/images/icons/phone.svg"></v-img>
                  Показать телефон
                </v-btn>
                <div class="product-divider"></div>
                <div class="order">
                  <div class="order-title">Заказать услугу</div>
                  <div class="d-flex flex-wrap ga-3">
                    <div class="order-col">
                      <v-btn flat class="order-btn" height="40">
                        <v-img class="contact-btn--img" :width="24" :height="18" src="@/assets/images/icons/icon-car.svg"></v-img>
                        Тест драйв
                      </v-btn>
                    </div>
                    <div class="order-col">
                      <v-btn flat class="order-btn" height="40">
                        <v-img class="contact-btn--img" :width="24" :height="18" src="@/assets/images/icons/icon-exchange.svg"></v-img>
                        Trade in
                      </v-btn>
                    </div>
                    <div class="order-col">
                      <v-btn flat class="order-btn" height="40">Онлайн просмотр</v-btn>
                    </div>
                    <div class="order-col">
                      <v-btn flat class="order-btn" height="40">Доставка</v-btn>
                    </div>
                  </div>
                </div>
                <div class="product-divider"></div>
                <div class="order">
                  <div class="order-title">Заказать проверку</div>
                  <div class="d-flex flex-wrap ga-3">
                    <div class="order-col">
                      <v-btn flat class="order-btn" height="40">СarVertical</v-btn>
                    </div>
                    <div class="order-col">
                      <v-btn flat class="order-btn" height="40">Autopark.ua</v-btn>
                    </div>
                  </div>
                </div>
                <v-btn flat class="contact-btn ma-0" height="40">
                  Полная проверка авто
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </section>
      </v-main>

    </main>
  </v-app>
</template>

<script setup>
  import SocialSection from "@/components/SocialSection.vue";
  import LogoBlock from "@/components/LogoBlock.vue";
  import SliderBlock from "@/components/SliderBlock.vue";
</script>

<style>
</style>
