import { ref } from 'vue'

const getPortfolio = () => {
  const state = ref([
    {
      id: "go-logo-img",
      title: "Green Office",
      description: "This is my portfolio 3",
      category: "Grafisk design",
      image: "../assets/img/GreenOffice.png",
      imagelink: "../assets/img/GreenOffice.png",
      tech: "Adobe Illustrator",
      date: "26.03.2023",
      completed: false,
      complete: "incomplete"
    },
    {
      id: "bd-dk-logo-img",
      title: "Bloddonorerne DK",
      description: "This is my portfolio 3",
      category: "Grafisk design",
      image: "../assets/img/bddanmark.png",
      imagelink: "../assets/img/bddanmark.png",
      tech: "Adobe Illustrator",
      date: "03.03.2023",
      completed: false,
      complete: "incomplete"
    },
    {
      id: "rings-img",
      title: "Rings",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "Fotografi",
      image: "../assets/img/The Rings - Tanya - DK.png",
      imagelink: "../assets/img/The Rings - Tanya - DK.png",
      tech: "Photoshop",
      date: "07.11.2022",
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
      imagelink: "../assets/img/Chr-IX-full.png",
      tech: "Photoshop",
      date: "03.11.2022",
      completed: false,
      complete: "incomplete"
    },
    {
      id: "broen-promo",
      title: "Broen Promotion",
      description: "This is my portfolio 3",
      category: "Video",
      image: "../assets/img/Broen - skilt - redigeret.png",
      video: "https://www.youtube.com/embed/EWQYkcDnrSk",
      youtube: "https://youtu.be/EWQYkcDnrSk",
      tech: "Premiere Pro",
      date: "04.11.2022",
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
        date: "04.11.2022",
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