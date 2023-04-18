import { ref } from 'vue'

const getPortfolio = () => {
  const state = ref([
    {
      id: "Logo",
      title: "Green Office",
      description: "This is my portfolio 3",
      category: "Illustrator",
      image: "../src/assets/img/GreenOffice.png",
      link: "../src/assets/img/GreenOffice.png",
      tech: "Adobe Illustrator",
      date: "2021-03-26",
      completed: false,
      complete: "incomplete"
    },
    {
      id: "Logo",
      title: "Bloddonorerne DK",
      description: "This is my portfolio 3",
      category: "Illustrator",
      image: "../src/assets/img/bddanmark.png",
      link: "../src/assets/img/bddanmark.png",
      tech: "Adobe Illustrator",
      date: "2021-03-03",
      completed: false,
      complete: "incomplete"
    },
    {
      id: "Billede",
      title: "Rings",
      description: "This is my portfolio 3",
      category: "Photoshop",
      image: "../src/assets/img/The Rings - Tanya - DK.png",
      link: "../src/assets/img/The Rings - Tanya - DK.png",
      tech: "Photoshop",
      date: "2021-03-21",
      completed: false,
      complete: "incomplete"
    },
    {
      id: "Billede",
      title: "Chr. IX",
      description: "This is my portfolio 3",
      category: "Photoshop",
      image: "../src/assets/img/Christian IX statue -edited.png",
      link: "../scr/assets/img/Christian IX statue - full.png",
      tech: "Photoshop",
      date: "2022-11-03",
      completed: false,
      complete: "incomplete"
    },
    {
      id: "Video",
      title: "Broen Promotion",
      description: "This is my portfolio 3",
      category: "Video",
      image: "../src/assets/img/Broen - skilt - redigeret.png",
      youtube: "https://youtu.be/EWQYkcDnrSk",
      tech: "Premiere Pro",
      date: "2022-11-04",
      completed: false,
      complete: "incomplete"
    },
    // {
    //   id: "Video",
    //   title: "Broen Promotion",
    //   description: "This is my portfolio 3",
    //   category: "Video",
    //   image: "../src/assets/img/Broen - skilt - redigeret.png",
    //   youtube: "https://youtu.be/EWQYkcDnrSk",
    //   github: "",
    //   link:"",
    //   tech: "Premiere Pro",
    //   date: "2022-11-04",
    //   completed: false,
    //   complete: "incomplete"
    // }
  ])

  return {
    state,
  }
}

export default getPortfolio