import React from "react";

const services = [
  {
    id: "01",
    title: "Website Designing",
    className: "design",
    description: `Every successful business starts with a great website and we deliver you the same. Webclick® Digital Pvt. Ltd. is the top web development and Website Designing Company In Delhi, have hired the best team to create freshly brewed designs to give an extra edge to your business that opens up the opportunities for you. Designing a great website requires skills and creative insights and we have both that turns your visual image into virtual reality.`,
    link: "https://www.webclickindia.com",
    linkText: "web development and Website Designing Company In Delhi",
  },
  {
    id: "02",
    title: "Website Development",
    className: "dev1",
    description: `Fluency in web development is a must to flaunt your website in style, as it takes care of all its functions and helps it work like a charm. Webclick® Digital Pvt. Ltd., as best Website Development Company In India, is passionate about architecting the best digital solutions to meet your diverse needs. We have unique tools and creative minds to attain maximum client satisfaction.`,
    link: "https://www.webclickindia.com/website-development.html",
    linkText: "Website Development Company In India",
  },
  {
    id: "03",
    title: "SEO",
    className: "seo",
    description: `Designing an impressive website is one thing and generating leads through it is another. Contact us for our affordable SEO Service In Delhi. Webclick® Digital Pvt. Ltd. are capable of improving the ranking and visibility of your website. We use well-planned approach so that your website top the searches with the desired keywords.`,
    link: "https://www.webclickindia.com/digital-marketing.html",
    linkText: "SEO Service In Delhi",
  },
  {
    id: "04",
    title: "Digital Marketing",
    className: "marketing",
    description: `Webclick® Digital Pvt. Ltd., being the best SEO Company, we offer Best Digital Marketing Services In India that covers all the aspects and helps you get the ball in your court. SEO is to attract customers to your website and SMO is to keep them connected with your brand for a longer period. The trend of online business seems to be headed further in shaping the perfect future and therefore having your presence over Google is important and we will help you attain the same.`,
    link: "https://www.webclickindia.com/seo-services.html",
    linkText: "SEO Company",
  },
];

const ServicesSection = () => {
  return (
    <div className="py-20 bg-white text-center">
      <div className="container mx-auto flex flex-wrap justify-center gap-8">
        {services.map(({ id, title, className, description, link, linkText }) => (
          <div
            key={id}
            className="w-full md:w-[22%] sm:w-[45%] bg-gray-50 p-6 rounded-lg shadow-md designing-div"
          >
            <div className="f1_container">
              <div className="f1_cardx">
                <div className={`front face wow ${className}`}>
                  <div className="number text-2xl font-bold text-orange-500 mb-2">{id}</div>
                  <div className="heading text-xl font-semibold mb-1">{title}</div>
                  <div className="heading-border w-12 h-1 bg-orange-500 mx-auto mb-3"></div>
                  <p className="text-sm text-gray-700">
                    {description.split(linkText)[0]}
                    <a href={link} className="text-blue-600 underline" target="_blank" rel="noreferrer">
                      {linkText}
                    </a>
                    {description.split(linkText)[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
