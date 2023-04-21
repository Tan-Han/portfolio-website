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
      description: "Dette logo er lavet under et projekt på multimediedesign uddannelsen, og det er ikke det officielle logo for Bloddonorerne Danmark. Projektet omhandlede re-branding, og hver gruppe skulle vælge en NGO, som de synes kunne være interessant at re-brand. Vi valgte derfor Bloddonorne Danmark, og dette var mit bud på et re-branded logo.",
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
      description: "Dette billede er taget i forbindelse med et projekt på multimediedesign uddannelsen, hvor vi fik til opgave hver især at tage et billede og redigere uden brug af filter og kun ved at redigere hele billedet på en gang, f.eks. ingen sletning af fejl på billedet. Dette billede er af min forlovelses- og vielsesring.",
      category: "Fotografi",
      image: "../assets/img/Rings-small.jpg",
      imagelink: "../assets/img/Rings-full.png",
      tech: "Photoshop",
      date: "07.11.2022",
      completed: false,
      complete: "incomplete"
    },
    {
      id: "chr-ix-img",
      title: "Chr. IX",
      description: "Dette billede er taget i forbindelse med et projekt på multimediedesign uddannelsen, hvor opgaven var at promovere et udvalgt område af Esbjerg. Her havde min gruppe valgt Esbjerg midtby. Statuen af Christian IX er et af de mange symboler, som har stor betydning i Esbjerg midtby, og er derfor et af varetegnene for midtbyen.",
      category: "Fotografi",
      image: "../assets/img/Chr-IX-small.jpg",
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
      description: "Denne video er lavet i forbindelse med et projekt på multimediedesign uddannelsen, hvor opgaven var at promovere et udvalgt område af Esbjerg. Her havde min gruppe valgt Esbjerg midtby. Broen Shopping er et nyere shoppingcenter, og det er derfor ikke alle, som kender til det, derfor er det vigtigt at få promoveret centeret. Derfor valgte vi at inkludere den i projektet.",
      category: "Video",
      image: "../assets/img/BroenSkilt.jpg",
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
      description: "Dette projekt var mit eksamensprojekt på første semester. Her havde jeg mulighed for, sammen med min gruppe, at arbejde sammen med Longhorn BBQ Competion. Her designede, og udviklede, vi en hjemmeside til Longhorn ud fra deres behov og ønsker. Et af deres ønsker var at have fokus på deres nye koncept Kids Que. Dette var vores bud på en hjemmeside for Longhorn BBQ.",
      category: "Web",
      image: "../assets/img/dm-bbq.jpg",
      github: "https://github.com/Tan-Han/Tan-Han.github.io",
      tech: "Premiere Pro",
      date: "16.12.2022",
      completed: false,
      complete: "incomplete"
    },
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