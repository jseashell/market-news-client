import { MarketauxLatestNews } from 'src/app/market/marketaux.interface';

export const marketauxLatestNews: MarketauxLatestNews = {
  meta: {
    found: 3,
    limit: 3,
    page: 1,
    returned: 3,
  },
  data: [
    {
      uuid: '00000000001',
      title: 'Wu-Tang Sword',
      description: 'I be that insane one from the psycho ward.',
      keywords: 'Sword, Psycho',
      snippet:
        "I be that insane one from the psycho ward, I'm on the trigger, plus I got the Wu-Tang sword. The Wu is comin thru, the outcome is …",
      url: 'https://s-kngstn.github.io/wu-loremipsum/',
      image_url:
        'https://images.squarespace-cdn.com/content/v1/564a7651e4b03f66f2c1023b/1568732298347-S3N9912ENU6W7A5GBSMP/Wu-Tang_AAS_Press.jpg.1440x1000_q85_box-0%2C18%2C587%2C426_crop_detail.jpg?format=2500w',
      published_at: new Date(),
      source: 'politeasflannels.com',
    },
    {
      uuid: '00000000002',
      title: 'How Can Hip-Hop Be Dead',
      description: "Life as a shorty shouldn't be so rough. I leave the mic in body bags.",
      keywords: 'Body Bags, The Force, Shabazz, DJ',
      snippet:
        "Life as a shorty shouldn't be so rough. I leave the mic in body bags, my rap style has, the force to leave you lost, like the tribe of Shabazz. My DJ the catcher, he's my man, anyway he's the one who devised the plan …",
      url: 'https://s-kngstn.github.io/wu-loremipsum/',
      image_url: 'https://i.pinimg.com/474x/51/6e/29/516e293c011911f450b58d355693759f--random-tattoos-wutang.jpg',
      published_at: new Date(),
      source: 'pinterest.com',
    },
    {
      uuid: '00000000003',
      title: 'Tic Toc and Keep Ticking',
      description: "Tic toc and keep ticking, while I get you flipping off what I'm kicking.",
      keywords: 'Body Bags, The Force, Shabazz, DJ',
      snippet:
        "Tic toc and keep ticking, while I get you flipping off what I'm kicking. As the world turns I spread like …",
      url: 'https://s-kngstn.github.io/wu-loremipsum/',
      image_url: 'https://blog.logomyway.com/wp-content/uploads/2021/08/wu-tang-logo-2.jpg',
      published_at: new Date(),
      source: 'logomyway.com',
    },
  ],
};
