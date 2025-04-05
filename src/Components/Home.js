import React, { useState, useEffect } from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import MultiCarousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";


function Home() {
  const [events, setEvents] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // axios.get("/events")
    // .then((response) => {
    //   console.log("Events API Response:", response.data);
    //   if (Array.isArray(response.data)) {
    //     setEvents(response.data);
    //   } else {
    //     setEvents([]); // Prevent `.map()` error
    //   }
    // })
    //   .catch(() => {
    //     setEvents([
    //       {
    //         title: "Tech Fest 2025",
    //         imageurl: `${process.env.PUBLIC_URL}/techfest.png`,
    //         desc: "Join the biggest tech fest of the year with amazing speakers and coding contests.",
    //         url: "/events/tech-fest-2025",
    //       },
    //       {
    //         title: "Startup Expo",
    //         imageurl: `${process.env.PUBLIC_URL}/startunexpo.png`,
    //         desc: "Discover and connect with innovative student startups.",
    //         url: "/events/startup-expo",
    //       },
    //       {
    //         title: "Cultural Night",
    //         imageurl: `${process.env.PUBLIC_URL}/culturalnight.png`,
    //         desc: "A night of dance, drama, and delightful performances.",
    //         url: "/events/cultural-night",
    //       },
    //     ]);
    //   });

    setEvents([
      {
        title: "Tech Fest 2025",
        imageurl: `${process.env.PUBLIC_URL}/techfest.png`,
        desc: "Join the biggest tech fest of the year with amazing speakers and coding contests.",
        url: "/events/tech-fest-2025",
      },
      {
        title: "Startup Expo",
        imageurl: `${process.env.PUBLIC_URL}/startunexpo.png`,
        desc: "Discover and connect with innovative student startups.",
        url: "/events/startup-expo",
      },
      {
        title: "Cultural Night",
        imageurl: `${process.env.PUBLIC_URL}/culturalnight.png`,
        desc: "A night of dance, drama, and delightful performances.",
        url: "/events/cultural-night",
      },
    ]);

    // axios.get("https://test-omega-three-15.vercel.app/api/images")
    //   .then((response) => setImages(response.data.data))
    //   .catch((error) => console.error("Error fetching images:", error));
    setImages([
      {
       imageurl: `https://theunitedindian.com/images/NGO-25-04-24-E-blog3.webp`,
      },
      {
        imageurl: `${process.env.PUBLIC_URL}/DSC_8199.JPG`,
        },
    ])
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container text-center">
      <h1>Welcome to Studentopedia</h1>

      <BootstrapCarousel className="my-4">
        {images.map((image, index) => (
          <BootstrapCarousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.imageurl}
              alt={`Slide ${index + 1}`}
              style={{ height: "750px", objectFit: "cover" }}
            />
          </BootstrapCarousel.Item>
        ))}
      </BootstrapCarousel>

      <MultiCarousel
        responsive={responsive}
        className="mt-5"
        infinite
        autoPlay
        autoPlaySpeed={3000}
        containerClass="carousel-container"
      >
        {events.map((event, index) => (
          <div key={index} style={{ padding: "0 15px" }}>
            <div
              className="shadow-sm"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "white",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                minHeight: "100%",
              }}
            >
              <div style={{ backgroundColor: "#f8f9fa", padding: "15px" }}>
                <h5 style={{ margin: 0 }}>{event.title}</h5>
              </div>

              <img
                src={event.imageurl}
                alt={event.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: "20px",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p style={{ flexGrow: 1, maxHeight: "72px", overflow: "hidden" }}>
                  {event.desc}
                </p>
                <Link to={event.url} style={{ marginTop: "auto" }}>
                  <button className="btn btn-primary">Know More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </MultiCarousel>
    </div>
  );
}

export default Home;
