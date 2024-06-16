import React from "react";
import DefaultLayoutHoc from "../Layouts/Default.layout";
import PlayFilters from "../Components/PlayFilters/PlayFilters.Component";
import Poster from "../Components/Poster/Poster.Component";

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <h2 className="text-2xl font-bold mb-4">Plays in New Delhi</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://indiancomedyclub.com.au/wp-content/uploads/2023/12/bassi-brisbane.jpg"
                title="Kisi Ko Batana Mat by Anubhav Singh Bassi"
                subtitle="Standup Comedy Show | UA | 1hr40m"
                className="w-full h-full rounded-md object-center"></Poster>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://indiancomedyclub.com.au/wp-content/uploads/2023/12/bassi-brisbane.jpg"
                title="Kisi Ko Batana Mat by Anubhav Singh Bassi"
                subtitle="Standup Comedy Show | UA | 1hr40m"></Poster>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://indiancomedyclub.com.au/wp-content/uploads/2023/12/bassi-brisbane.jpg"
                title="Kisi Ko Batana Mat by Anubhav Singh Bassi"
                subtitle="Standup Comedy Show | UA | 1hr40m"></Poster>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                //src="https://www.theo2.co.uk/assets/img/Bassi-LONDON-1920X1080-7813bb853e.jpg"
                src="https://indiancomedyclub.com.au/wp-content/uploads/2023/12/bassi-brisbane.jpg"
                title="Kisi Ko Batana Mat by Anubhav Singh Bassi"
                subtitle="Standup Comedy Show | UA | 1hr40m"></Poster>
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <PlayFilters
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>
          <div>
            <PlayFilters
              title="Languages"
              tags={["Hindi", "English", "Kannada"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
