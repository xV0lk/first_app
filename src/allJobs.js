//Import Images
import athlete from './img/athlete-small.png';
import goodtimes from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';
import theracer2 from './img/the-racer2.jpg';

export const AllJobs = () => {
  return [
    {
      id: 1,
      title: 'Atleta',
      mainImg: athlete,
      secondaryImg: athlete2,
      route: 'atleta',
      awards: [
        {
          id: 11,
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          id: 12,
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          id: 13,
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      id: 2,
      title: 'Momentos',
      mainImg: goodtimes,
      route: 'momentos',
      secondaryImg: goodtimes2,
      awards: [
        {
          id: 21,
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          id: 22,
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          id: 23,
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      id: 3,
      title: 'Modelo',
      mainImg: theracer,
      route: 'modelo',
      secondaryImg: theracer2,
      awards: [
        {
          id: 31,
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          id: 32,
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          id: 33,
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
  ];
};
