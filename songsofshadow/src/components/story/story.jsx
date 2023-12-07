import React from "react";
import oldCreationImage from "./imgs/oldCreation.png";
import exaltTypes from "./imgs/allexalted.png";

const Story = () => {
  return (
    <div className="w-full">
      {/* Central Card */}
      <div className="p-8 rounded-lg shadow-md">
        {/* Section 1 */}
        <section className="mb-6 grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <img
              src={oldCreationImage}
              alt="the picture of the old world"
              className="w-full h-full object-cover border border-black"
            />
          </div>
          <div className="col-span-1 flex flex-col">
            <section className="text-lg flex flec-col r font-semibold">
              {" "}
              Pre-amble
            </section>
            <p className="mb-0">
              "This is a map of the ancient lands. To the North, to the South,
              East and west. I KNOW that we have lost people. Civilizations to
              the encroaching terrors. how can I tell you this with such
              confidence? We are traders. We know when a source has dried up.
              When no profit is to be gained by a venture. You can see in our
              books that we traded with people on far. The Jade Empire, a small
              but industrious independent group of dragon-bloods. To the North,
              even the Bull did not stop the loss by the Faerie. To the East we
              lose ground to those clad in silver. Now, Even in our heartland we
              have invasion. The Shadow spreads and the dead have come back to
              the Earth. In a force we should be wary of. The Scarlet Empire
              cannot reach us...who fights back for us... " -- Jaquer the Jade
              Merchant
            </p>
            <section>
              ______________________________________________________________________________
            </section>
            <p className="mb-0">
              "... you have put everyone you know in danger. Your family, this
              town, and, of course, you. How do you square the deaths of those
              who don't know. When the Hunt comes." - Norwell, bard of the 3rd
              college
            </p>

            <section>
              ______________________________________________________________________________
            </section>
            <p>
              You have lived in the threshold. The Empire means little to you.
              regional players across the world have no meaning save one. The
              city of Thorns has become a dark place. The dead wander the street
              and venture afar in small roving bands.
            </p>
            <section>
              ______________________________________________________________________________
            </section>
            <p>
              Besieged by beasts and anathema on the east and the Legion of
              Lookshy to the south; the people of the threshold paid their taxes
              and tried to leave well enough alone. The rise of the dead have
              changed that. The armies of the realm, that you pay taxes to, is
              nowhere to be found.
            </p>
          </div>
        </section>

        <section className="mb-6 flex h16 flex-col">
          <img
            src={exaltTypes}
            alt="pic of the different exalts"
            className="h-72 text-center object-cover mb-4 border border-black"
          />
          <div className="text-lg font-semibold ">About Exalts</div>
          <p className="">
            Some exalted you may have met. Whether from dreams or from
            experience you remember. The shapeshifters of Luna, the Fateweavers
            of the Maidens, and of course the Dragon-Blooded. More than that you
            have heard whispers of DeathKnights who wander the land. Powerful
            beings who can lay waste to armies.
          </p>
        </section>
        <section>
          <p>
            Yet you were not always one of these beings. Once you knew only a
            mort al life. Will you remember what it was to be mortal?
          </p>
          <section>
            ____________________________________________________________________________________________________________________________________________
          </section>
          <section>
            <img
              className="w-full border border-black"
              src="https://www.thefandomentals.com/wp-content/uploads/2018/05/Exalted_Splash.jpg
"
              alt=""
            />
          </section>
          <p className="mb-1.5">
            Exalted is a game of super powers. you are beyond level 20. You have
            been chosen because there are two things that mark you:
            <ol>
              You are good at something beyond most people in the country, if
              not in the world
            </ol>
            <ol>
              You have a personal belief that is in line with lifting humanity
              and a vision to do it.
            </ol>
            <ol>
              You may have a connection to the Unconquered Sun himself - for
              Zenith caste
            </ol>
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-6"></section>

        {/* Date */}
        <div className="text-gray-500 text-sm">
          Published on: December 5, 2023
        </div>
      </div>
    </div>
  );
};

export default Story;

<div className=""></div>;
//address reference
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0RIm1l-_UeQaeaos7cqMMaqKsJbSwY-zzQ&usqp=CAU
//creation: https://hd42.de/images/exalted/Creation_Map_v7.1b.jpg
// first age: https://static.wikia.nocookie.net/whitewolf/images/d/de/Lunars_Map.png/revision/latest?cb=20210131221743
// fall of the Solar: https://www.thefandomentals.com/wp-content/uploads/2018/05/Exalted_Splash.jpg
// who are the exaled: https://blizzardwatch.com/wp-content/uploads/2021/06/Exalted01.png
// unbelievable action: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mZCsYvrK1myCeJDo0YGPnY5LE3NlRUMexvIkQolhoOy10S--uivX6s3sXP_4XV5Xei0&usqp=CAU
