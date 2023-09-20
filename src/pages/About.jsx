import Header from "../components/Header";
import { Link } from 'react-router-dom'
import styles from './movie.module.css'

const About = () => {
  return (
    <div className="mt-10">
      <Header />
      <div className={`hero ${styles.movie}`}>
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://m.media-amazon.com/images/I/91jrKX9xjQL.jpg"
            className="max-w-sm rounded-lg shadow-2xl opacity-60 "
          />
          <div>
            <h1 className="text-8xl font-bold" style={{ color: "#e0d2fe " }}>
              Where Vintage Meets Visionary
            </h1>
            <p className="py-6 text-left text-gray-300 w-3/4 ml-32">
              Welcome to Cinerama, where the art of cinema is reimagined as a
              timeless experience. Nestled at the heart of our city, Cinerama is
              more than just a movie theater; it&apos;s a destination that
              bridges the elegance of a bygone era with the innovation of modern
              cinema.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-transparent mt-32">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-8xl font-bold" style={{ color: "#e0d2fe " }}>
              Elegance in Every Detail
            </h1>
            <p className="py-6 text-left text-gray-300 w-3/4 ml-32">
              Step through our doors, and you&apos;ll find yourself immersed in
              a world of vintage elegance. Our theater is a tribute to the
              golden age of cinema, where every detail has been meticulously
              crafted to transport you to a time when going to the movies was a
              grand affair. From plush, comfortable seating to classic movie
              posters adorning the walls, every element exudes the charm of
              yesteryears.
            </p>
          </div>
          <img
            // src="https://filmartgallery.com/cdn/shop/products/The-Big-Blue-Le-Grand-Bleu-Vintage-Movie-Poster-Original-French-Mini-16x23.jpg?v=1666922460"
            src="https://do84cgvgcm805.cloudfront.net/article/671/1200/b8672b2ef8f86f75e291f935240bb4ca16cf72c1ade3ce755bb71c19c1889b58.jpg"
            className="max-w-lg rounded-lg shadow-2xl opacity-60 "
          />
        </div>
      </div>
      <div className="relative w-full flex gap-4 py-6   opacity-60 mt-20 -ml-4">
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://archello.s3.eu-central-1.amazonaws.com/images/2020/10/21/metaphor-interior-architecture-cin--polis--modern-sophisticated-movie-theater-cinemas-archello.1603261330.2612.jpg"
          alt="Image 1"
        />
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://hips.hearstapps.com/hmg-prod/images/movie-theater-beds-cinema-pathe-switzerland-1570037452.jpg"
          alt="Image 2"
        />
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://ewscripps.brightspotcdn.com/dims4/default/edf6f27/2147483647/strip/true/crop/5100x2874+0+0/resize/1280x721!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Fd1%2F8b%2F59242797470b8936978e77787fe3%2Fevo-interior-theater-view.jpg"
          alt="Image 3"
        />
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://media.istockphoto.com/id/1326470264/photo/cinema-movie-theater-ticketing-counter.jpg?s=612x612&w=0&k=20&c=sFZoMBjMoDCxH_R4rjY6lAgCL1VpzOELA4jpjeq8FJM="
          alt="Image 4"
        />
      </div>
      <section className=" dark:text-gray-100 bg-transparent">
        <div className=" flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-3/4 xl:h-112 2xl:h-128  opacity-60 ml-20">
            <img
              src="https://35mm.es/wp-content/uploads/2021/06/peliculas-de-romance.jpg.webp"
              alt=""
              className="object-contain w-full bg-transparent border-none h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 card"
            />
          </div>
          <div className="flex flex-col justify-center mr-72 p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            {/* <h1 className=" font-bold sm:text-7xl dark:text-gray-800">
              Creating
              <span className="text-white">unforgettable</span>
              <br />
              <span>moments</span>
            </h1> */}
            <h1 className="text-7xl font-bold" style={{ color: "#e0d2fe " }}>
              Creating Unforgettable Moments
            </h1>
            <p className=" py-6 text-gray-300 mt-6 mb-8 text-lg sm:mb-12">
              Cinerama is more than just a theater; it&apos;s a place where
              memories are made. Share laughter, tears, and thrills with loved
              ones in an ambiance designed to enhance the magic of every story.
              Our lounge offers gourmet snacks and a warm atmosphere for
              pre-show gatherings, ensuring that your visit is an experience
              you&apos;ll cherish.
            </p>
          </div>
        </div>
      </section>
      <div className="hero bg-transparent -mt-24">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <div className="flex">
              <span className="text-5xl font-bold sm:text-6xl ml-40">The</span>

              <div className=" flex flex-col">
                <span
                  className=" text-8xl -mt-8 mr-10"
                  style={{ color: "#e0d2fe " }}
                >
                  cinerama
                </span>
                <span className="text-8xl -mt-4">experience</span>
              </div>
            </div>

            <p className="py-6 text-left text-gray-300 w-3/4 ml-32">
              We invite you to rediscover the joy of going to the movies at
              Cinerama. Immerse yourself in an era of vintage flair and
              visionary technology, where cinema is an art form, and every
              screening is an event. Book your tickets now and become part of
              the magic at Cinerama, where vintage meets visionary.
            </p>
          </div>
          <img
            src="https://i.pinimg.com/736x/19/40/96/194096bd7bea117b51ad7fb0c907e553.jpg"
            className="max-w-sm rounded-lg shadow-2xl opacity-60 card"
          />
        </div>
      </div>
      <Link to="/pag">
              <button
                className="bg-secondary w-40 h-8 btn-xs text-xs text-white ml-12"
                style={{ boxShadow: "1px 1px 1px black" }}
              >
                NOW SHOWING!!
              </button>
            </Link>
    </div>
  );
};

export default About;
