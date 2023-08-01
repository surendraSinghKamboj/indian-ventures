import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CrossPlatformCreative1 from "../../../../assets/CrossPlatformCreative1.png";
import CrossPlatformCreative2 from "../../../../assets/CrossPlatformCreative2.png";

// import "./GallerySliderTwo.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1424 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1424, min: 1000 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1000, min: 740 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 740, min: 0 },
    items: 1,
  },
};
const CrossPlatformData = [
  {
    id: 1,
    creativeImg: CrossPlatformCreative1,
  },
  {
    id: 2,
    creativeImg: CrossPlatformCreative2,
  },
];
const CrossPlatformApp = () => {
  const ButtonClick = () => {};
  return (
    <div className=" mr-1 ml-1   ">
      <h1 className="text-center text-3xl md:text-5xl mt-5 mb-3 font-bold text-[#1E3A8A] hover:text-blue-500">
        Cross Platform App Development
      </h1>
      <div className=" ml-[20px] mr-[20px] md:ml-[50px] md:mr-[50px] lg:ml-[150px] lg:mr-[150px] mb-10 hover:text-blue-500 text-justify">
        <p className=" text-[10px] md:text-[15px] lg:text-[20px] text-gray-500 ">
        Build industry-grade mobile apps that work seamlessly with various mobile operating systems. Our expertise and technology provide a good balance between appealing, single code-based development efficiency and the performance and feel of a native application, ensuring faster time-to-market.{" "}
        </p>
      </div> 
      <div>
        <Carousel
          responsive={responsive}
          infinite={true}
          // removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {CrossPlatformData.map((data, i) => {
            return (
              <div key={data.id} className="mb-10">
                <div className=" flex flex-col justify-center items-center">
                  <div>
                    <img src={data.creativeImg} alt="Android img 1" className="rounded-[10px] md:rounded-[20px] h-[500px] w-[1100px] " />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default CrossPlatformApp;
