// Import Images
import athlete from './img/athlete-small.png';
import goodtimes from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';
import theracer2 from './img/the-racer2.jpg';

const AllJobs = () => [
  {
    id: 1,
    title: 'Boxeo',
    mainImg: athlete,
    secondaryImg: athlete2,
    route: 'boxeo',
    awards: [
      {
        id: 11,
        title: 'Aprendí a mostrar mi negocio',
        description:
          '“Trabajar con el equipo de Content, me enseñó a llegar al público.”',
      },
      {
        id: 12,
        title: 'Súper profesionales.',
        description:
          '“Lograron todo lo que queríamos para nuestro gimnasio y nos enseñaron mucho en el proceso.”',
      },
      {
        id: 13,
        title: 'Resultados.',
        description:
          '“Gracias al trabajo que hicimos con Content, nuestros clientes han aumentado.”',
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
        title: 'Para toda la vida',
        description:
          '“Confiamos en ellos un evento tan importante como nuestro matrimonio y su trabajo hizo que los recuerdos duren para toda la vida.”',
      },
      {
        id: 22,
        title: 'Un resultado hermoso.',
        description:
          '“Todo su trabajo fue de muy buena calidad y el equipo muy profesional.”',
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

export default AllJobs;
