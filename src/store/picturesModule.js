import birthOfVenusMain from '@/assets/images/birth-of-venus/andro_Botticelli_-_La_nascita_di_Venere.jpg'
import birthOfVenus1 from '@/assets/images/birth-of-venus/The_Birth_of_Venus_detail.jpg'
import birthOfVenus2 from '@/assets/images/birth-of-venus/Birth_of_Venus_detail.jpg'
import birthOfVenus3 from '@/assets/images/birth-of-venus/Venus_botticelli_detail.jpg'
import lastSupperMain from '@/assets/images/last-supper/The_Last_Supper_-_Leonardo_Da_Vinci.jpg'
import lastSupper1 from '@/assets/images/last-supper/The_Last_Supper - detail1.jpg'
import lastSupper2 from '@/assets/images/last-supper/The_Last_Supper - detail2.jpg'
import lastSupper3 from '@/assets/images/last-supper/The_Last_Supper - detail3.jpg'
import handsOfGodMain from '@/assets/images/hands-of-god-and-adam/Hands_of_God_and_Adam.png'
import handsOfGod1 from '@/assets/images/hands-of-god-and-adam/Hands_of_God_and_Adam - detail1.jpg'
import handsOfGod3 from '@/assets/images/hands-of-god-and-adam/Hands_of_God_and_Adam - detail3.jpg'
import anatomyLessonMain from '@/assets/images/anatomy-lesson/Rembrandt_-_The_Anatomy_Lesson.jpg'
import anatomyLesson1 from '@/assets/images/anatomy-lesson/Rembrandt_-_The_Anatomy_Lesson - detail1.jpg'
import anatomyLesson2 from '@/assets/images/anatomy-lesson/Rembrandt_-_The_Anatomy_Lesson - detail2.jpg'
import anatomyLesson3 from '@/assets/images/anatomy-lesson/Rembrandt_-_The_Anatomy_Lesson - detail3.jpg'

export default {
  state: {
    search: '',
    goods: [{
      title: 'Рождение Венеры',
      author: 'Сандро Боттичелли',
      description: `«Рождение Венеры» (итал. Nascita di Venere) — картина итальянского художника тосканской школы Сандро Боттичелли.
                        Представляет собой живопись темперой на холсте размером 172,5 × 278,5 см. 
                        В настоящее время хранится в галерее Уффици, Флоренция.`,
      photos: [birthOfVenusMain, birthOfVenus1, birthOfVenus2, birthOfVenus3],
      price: '1 000 000 $',
      status: 'в продаже',
    },
      {
        title: 'Тайная вечеря',
        author: 'Леонардо да Винчи',
        description: `«Та́йная ве́черя» (итал. Il Cenacolo или L’Ultima Cena) — монументальная роспись работы Леонардо да Винчи,
                            изображающая сцену последней трапезы Христа со своими учениками. 
                            Создана в 1495—1498 годы в доминиканском монастыре Санта-Мария-делле-Грацие в Милане.`,
        photos: [lastSupperMain, lastSupper1, lastSupper2, lastSupper3],
        price: '3 000 000 $',
        status: 'в продаже',
      },
      {
        title: 'Сотворение Адама',
        author: 'Микеланджело',
        description: `«Сотворение Адама» (итал. La creazione di Adamo) — фреска Микеланджело, написанная около 1511 года.
                            Фреска является четвёртой из девяти центральных композиций потолка Сикстинской капеллы. 
                            Фреска иллюстрирует эпизод: "И сотворил Бог человека по образу Своему" — Быт. 1:27`,
        photos: [handsOfGodMain, handsOfGod1, handsOfGod3],
        price: '5 000 000 $',
        status: 'в корзине',
      },
      {
        title: 'Урок анатомии',
        author: 'Рембрандт',
        description: `«Урок анатомии доктора Тульпа» — картина Рембрандта, написанная в 1632 году.
                            Центральная фигура картины — доктор Николас Тульп, который показывает собравшимся устройство мускулатуры руки человека.
                            Труп — Адриаан Адриаанс по прозвищу Арис Киндт (Малыш).`,
        photos: [anatomyLessonMain, anatomyLesson1, anatomyLesson2, anatomyLesson3],
        price: '5 500 000 $',
        status: 'продана на аукционе',
      }]
  },
  mutations: {
    changeSearch(state, payload) {
      state.search = payload
    },
    changeStatus(state, payload) {
      state.goods = state.goods.map(el => el.title === payload.title ? {...el, status: payload.status} : el)
    }
  },
  getters: {
    getGoods(state) {
      return state.goods.filter(el => el.title.toLowerCase().startsWith(state.search.toLowerCase()))
    },
    getStatuses(state) {
      return state.goods.map(el => el.status)
    }
  },
  actions: {
    fetchGoods() {
      //вызвать экшн
    }
  },
}