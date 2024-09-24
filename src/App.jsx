import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EventCard from "./components/EventCard";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="background">
      <div className="App">
        <h1>Welcome to Thes Tech Events Hub! </h1>
        <div className="card-container">
          <EventCard
            name={"USA Festival of Education"}
            description={
              "The Festival of Education, a renowned event created by Wellington College in the UK, is set to take place for a second time in the USA in 2024. Aimed at educators, this Festival provides an unparalleled platform for teachers to learn, grow and connect with other like-minded individuals in the field of education."
            }
            location={`When: 28 September 2024\nWhere: St. Andrew's Episcopal School`}
            eventImage={
              "https://pbs.twimg.com/profile_banners/1642900956491685889/1711436443/1500x500" // Direct link to image
            }
            source={`https://educationfestusa.com/`}
          />
          <EventCard
            name={"Teaching American and Digital Revolutions: Day One"}
            description={
              "Welcome to the first day of our exciting conference at Iona University! Our sixth biannual conference considers how digital methods and practices can help us to teach the complexities of revolution more effectively. Similarly, as higher education and pedagogy shifts in the face of emerging, complex technologies from AI to virtual reality, “Teaching American and Digital Revolutions” will address how teaching revolutionary movements can help students, scholars, and educators alike to apply the relevance of past histories to our contemporary digital moment."
            }
            location={`Iona University\n
715 North Avenue New Rochelle, NY 10804\nFriday, September 27 · 9am - 8pm EDT`}
            eventImage={
              "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F825414339%2F462351049630%2F1%2Foriginal.20240812-175846?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C563%2C682%2C341&s=87e408d337c679bcd4043fcb2078d3c3" // Direct link to image
            }
            source={`https://www.eventbrite.com/e/teaching-american-and-digital-revolutions-day-one-tickets-989133343457`}
          />
          <EventCard
            name={"UAH Week 2024: Teacher Appreciation at Reach & Teach"}
            description={
              "The Reach And Teach bookshop team invites local teachers to join them in the United Against Hate - Inclusion program with a visit to their shop where they will have complimentary food and beverages, displays of books and other resources on inclusion and anti-bullying, cooperative games you can try, including the Goodbye Bully Machine game, and some fun giveaways. "
            }
            location={`1179 San Carlos AvenueSan Carlos, CA, 94070\nMonday, September 23, 2024\n\n3:00 PM  6:00 PM`}
            eventImage={
              "https://images.squarespace-cdn.com/content/v1/5d5ccebfc16a590001b1ac6f/1724018976997-N962XFTI9H6Z823HFOEX/reachteach-sancarlos-outside800x600.png?format=1500w" // Direct link to image
            }
            source={`https://cfsancarlos.org/events/cfsc-uah2024-teacher-appreciation`}
          />
          <EventCard
            name={"2024 Indigenous Peoples' Day Curriculum Teach-In"}
            description={
              "he 8th annual Indigenous Peoples’ Day Curriculum Teach-In, hosted by the Smithsonian’s National Museum of the American Indian in collaboration with Teaching for Change, is an opportunity for educators to convene in person and strategize on uplifting Native voices directly into the classroom. Recommended for grades K–12."
            }
            location={`Saturday, September 28, 2024 9:30 AM  2:00 PM\n National Museum of the American Indian`}
            eventImage={
              "https://www.teachingforchange.org/wp-content/uploads/2024/02/NMAI-and-TFC-Teach-in-2024-Opt-1-2-768x402.png" // Direct link to image
            }
            source={`https://www.teachingforchange.org/2024-indigenous-peoples-day-curriculum-teach-in`}
          />
          <EventCard
            name={"2024 Special Education Conference"}
            description={
              "The CTA Special Education Conference features sessions full of strategies, tips and proven research to help you support your exceptional students."
            }
            location={`Hyatt Regency OC
              September 27 - September 29`}
            eventImage={
              "https://www.cta.org/wp-content/uploads/2024/06/SpEd-24-Cover-Artwork-580x500.png" // Direct link to image
            }
            source={`https://www.cta.org/events/2024-09-29?tribe__ecp_custom_5%5B0%5D=Teaching%20and%20Learning`}
          />
          <EventCard
            name={"Teaching Asian America in Milwaukee Classrooms"}
            description={
              "This event will be a conversation with the authors of the new Teaching Asian America in Elementary Classrooms, Noreen Naseem Rodríguez (Michigan State University) and Sohyun An (Kennesaw State University). The evening will include a presentation by the authors on their work followed time for the attendees to work alongside the authors, the MKE Roots team, and Marquette Education faculty on how to bring this content into Milwaukee classrooms."
            }
            location={`Sensenbrenner Hall 304
1103 W. Wisconsin Ave.
Milwaukee, WI 53233\n
Sept. 25th, 2024
4:30-6:00pm`}
            eventImage={
              "https://mkeroots.raynordslab.org/wp-content/uploads/2024/09/Using-MKE-Roots-in-your-classroom-3-e1725897859143.png" // Direct link to image
            }
            source={`https://mkeroots.raynordslab.org/index.php/event/teaching-asian-america-in-milwaukee-classrooms/`}
          />
          <EventCard
            name={"Black Hat Fall Online Trainings"}
            description={
              "Join us for Black Hat Fall Trainings, a live and interactive online experience in the Eastern Time Zone from November 18 to 21. Develop in-demand cybersecurity skills in technical Trainings taught by expert instructors from around the world. From infrastructure hacking to incident response, there's a course for individuals of all experience levels. Expand your security talent in just 4 days."
            }
            location={`November 18 - 21, 2024\n
Interactive Online Courses`}
            eventImage={
              "https://www.blackhat.com/images/logo.png" // Direct link to image
            }
            source={`https://www.blackhat.com/tr-24v/`}
          />
          <EventCard
            name={"Aws Re:invent"}
            description={
              "From breakout and builders’ sessions to chalk talks and workshops, re:Invent offers a variety of learning formats and levels so that you can expand your knowledge at your own pace."
            }
            location={`DECEMBER 2 – 6, 2024\n LAS VEGAS, NV`}
            eventImage={
              "https://reinvent.awsevents.com/content/dam/reinvent/2024/media/cards/expo-village-alt.jpg" // Direct link to image
            }
            source={`https://reinvent.awsevents.com/`}
          />
          <EventCard
            name={"Step Into the Future with SXSW"}
            description={
              "We look forward to seeing you again!Get ready to embark on another exhilarating SXSW season, as we unveil the initial lineup of featured speakers for the 39th edition of the conference. From debunking AI myths to exploring groundbreaking advancements in gaming, science, and beyond, hear from trailblazers whose insights will inspire and empower you this March."
            }
            location={`March 7–15 \n Austin, TX `}
            eventImage={
              "https://www.sxsw.com/wp-content/uploads/2024/06/03-08_Sing-Sing_Alejandra-Sol-Casas_22-1.jpg" // Direct link to image
            }
            source={`https://www.sxsw.com/`}
          />
          <EventCard
            name={"Catch up on Google I/O"}
            description={
              "Check out the highlights and anything you might have missed."
            }
            location={`https://www.youtube.com/playlist?list=PL590L5WQmH8doPo8OufXavO2Qu4ysZjyl`}
            eventImage={
              "https://io.google/2024/app/images/io24-home-hero-phase4-2-dark.svg" // Direct link to image
            }
            source={`https://io.google/2024/`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
