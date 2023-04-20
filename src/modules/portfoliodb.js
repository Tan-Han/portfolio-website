import { ref } from 'vue'

const getPortfolio = () => {
  const state = ref([
    {
      id: "go-logo-img",
      title: "Green Office",
      description: "This is my portfolio 3",
      category: "Grafisk design",
      image: "../assets/img/GreenOffice.png",
      link: "../assets/img/GreenOffice.png",
      tech: "Adobe Illustrator",
      date: "2021-03-26",
      completed: false,
      complete: "incomplete"
    },
    {
      id: "bd-dk-logo-img",
      title: "Bloddonorerne DK",
      description: "This is my portfolio 3",
      category: "Grafisk design",
      image: "../assets/img/bddanmark.png",
      link: "../assets/img/bddanmark.png",
      tech: "Adobe Illustrator",
      date: "2021-03-03",
      completed: false,
      complete: "incomplete"
    },
    {
      id: "rings-img",
      title: "Rings",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "Fotografi",
      image: "../assets/img/The Rings - Tanya - DK.png",
      link: "../assets/img/The Rings - Tanya - DK.png",
      tech: "Photoshop",
      date: "2021-03-21",
      completed: false,
      complete: "incomplete"
    },
    {
      id: "chr-ix-img",
      title: "Chr. IX",
      description: "This is my portfolio 3",
      category: "Fotografi",
      image: "../assets/img/Christian IX statue -edited.png",
      large: "../assets/img/Chr-IX-full.png",
      link: "../assets/img/Chr-IX-full.png",
      tech: "Photoshop",
      date: "2022-11-03",
      completed: false,
      complete: "incomplete"
    },
    {
      id: "boren-promo",
      title: "Broen Promotion",
      description: "This is my portfolio 3",
      category: "Video",
      image: "../assets/img/Broen - skilt - redigeret.png",
      video: "https://www.youtube.com/embed/EWQYkcDnrSk",
      youtube: "https://youtu.be/EWQYkcDnrSk",
      tech: "Premiere Pro",
      date: "2022-11-04",
      completed: false,
      complete: "incomplete"
    },
    {
        id: "dm-bbq",
        title: "Longhorn BBQ website",
        description: "This is my portfolio 3",
        category: "Web",
        image: "../assets/img/dm-bbq.png",
        github: "https://github.com/Tan-Han/Tan-Han.github.io",
        tech: "Premiere Pro",
        date: "2022-11-04",
        completed: false,
        complete: "incomplete"
      }

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