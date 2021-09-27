import React from "react";
import CardsHomepage from "./cardsHomepage";
import Carousel from "./common/carousel";
import Footer from "./common/footer";

class HomePage extends React.Component {
  state = {
    carouselImages: [
      {
        src: "images/slider/n-kamalov-WackSEiqyys-unsplash.jpg",
        alt: "Guitarist",
      },
      {
        src: "images/slider/mink-mingle-HRyjETL87Gg-unsplash.jpg",
        alt: "Disk",
      },
      {
        src: "images/slider/bogomil-mihaylov-ekHSHvgr27k-unsplash.jpg",
        alt: "Microphone",
      },
      {
        src: "images/slider/simon-weisser-phS37wg8cQg-unsplash.jpg",
        alt: "Concert",
      },
      {
        src: "images/slider/yannis-papanastasopoulos-yWF2LLan-_o-unsplash.jpg",
        alt: "Guitar",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Carousel images={this.state.carouselImages} />
        <CardsHomepage />
        <Footer
          title={"Our Goal"}
          paragraph1={
            "This platform is designed for rock music lovers and those who want to get acquainted with this music, to get to know their favorite artists better and to have easy access to their works."
          }
          paragraph2={
            "Here you can suggest your favorite artists to add and read other people's comments about their works as well as other bad artists' works."
          }
          footer={
            "The design and content of this website is inspired by the book Master of Rock Guitar by Peter Fisher"
          }
          link={
            "dlscrib.com-pdf-masters-of-rock-guitar-the-peter-fischer-volledig-dl_2baae4f2610699a6d021968ccd9ee907.pdf"
          }
        />
      </React.Fragment>
    );
  }
}

export default HomePage;
