import { ref } from 'vue'

const getPortfolio = () => {
  const state = ref([
    {
      id: "go-logo-img",
      title: "Green Office",
      description: "Dette logo er til for Green Office efter de lagde et opslag op på DesignCrowd.com. Green Office er et hotel, der giver folk muligheden for at arbejde digitalt fra hotellet. Klienten ønskede at logoet skulle være navnet, men at det skulle have muligheden for at tage G og O ud og danne ordet GO. De ønskede også at logoet skulle indholde noget tropisk natur, f.eks. et palmetræ, samt noget der symboliseret digitalt arbejde. Dette var mit bud på et logo til Green Office.",
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
      date: "03.03,2023",
      completed: false,
      complete: "incomplete"
    },
    {
      id: "rings-img",
      title: "Rings",
      description: "This is my portfolio 3",
      category: "Fotografi",
      image: "../assets/img/The Rings - Tanya - DK.png",
      imagelink: "../assets/img/The Rings - Tanya - DK.png",
      tech: "Photoshop",
      date: "07.11.2022",
      completed: false,
      complete: "incomplete"
    },
  ])

  return {
    state,
  }
}

export default getPortfolio