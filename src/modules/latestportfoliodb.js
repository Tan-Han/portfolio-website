import { ref } from 'vue'

const getPortfolio = () => {
  const state = ref([
    {
      id: "ux-bio-app",
      title: "UX for en biograf app",
      description: "Dette projekt er lavet på multimediedesign uddannelsen. Her har vi arbejdet med concept design, hvilket dette projekt omhandlede. Vi skulle komme udvikle et koncept og en prototype for en app. Her besluttede i vores gruppe for at vi ville gøre biograf-turen endnu letter, og det er det vores prototype afspejler. I app'en vil det være muligt at bestille billet, få leveret snacks og drinks til sidepladsen, at optjene rewards, og meget mere.",
      category: "UX",
      image: "../assets/img/biovers.png",
      large: "../assets/img/biovers-zoom.png",
      link: "https://erhvervsakademisydvest-my.sharepoint.com/:f:/g/personal/tanhan01_easv365_dk/EsV7p_P7V-dMrvPXRs58kH4BzgKamcfms5ptPX76VIIpjQ",
      tech: "Premiere Pro",
      date: "Under udvikling",
      completed: false,
      complete: "incomplete"
    },
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
      description: "Dette logo er lavet under et projekt på multimediedesign uddannelsen, og det er ikke det officielle logo for Bloddonorerne Danmark. Projektet omhandlede re-branding, og hver gruppe skulle vælge en NGO, som de synes kunne være interessant at re-brand. Vi valgte derfor Bloddonorne Danmark, og dette var mit bud på et re-branded logo.",
      category: "Grafisk design",
      image: "../assets/img/bddanmark.png",
      imagelink: "../assets/img/bddanmark.png",
      tech: "Adobe Illustrator",
      date: "03.03,2023",
      completed: false,
      complete: "incomplete"
    }
  ])

  return {
    state,
  }
}

export default getPortfolio