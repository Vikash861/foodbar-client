import Navbar from "../components/Navbar"

export const About = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-8">
        <div>
          <p className="flex flex-col gap-2 text-gray-700 ">
            Welcome to my website!
            <br />
            <br />
            Hello, I'm Vikash, a passionate professional with a background in computer science. I hold a BCA degree and specialize in MERN Stack development. Over the years, I have gained hands-on experience working with a wide range of technologies and tools such as Docker, Kubernetes, Linux, AWS, Angular, Java FullStack development, Tailwind, Chakra UI, and many more.
            <br />
            <br />
            My expertise extends beyond programming languages and frameworks. I have a strong foundation in computer fundamentals, including data structures and algorithms, networking, DBMS, and operating systems. Understanding these core concepts enables me to approach complex problems with clarity and efficiency.
            <br />
            <br />
            One of my notable achievements is a personal project I developed utilizing the power of the MERN Stack and the sleek design provided by Tailwind CSS. Inspired by the Figma community, I created a project that showcases my creativity and technical skills.
            <br />
            <br />
            I am continuously learning and adapting to stay up-to-date with the latest advancements in the field. My goal is to deliver high-quality solutions that not only meet the requirements but also exceed expectations. I am always excited to take on new challenges and collaborate with like-minded individuals and teams.
            <br />
            <br />
            Thank you for visiting my website. Feel free to explore more about my work, skills, and projects. If you have any inquiries or opportunities, Please contact from contact page.</p>
        </div>
        {/* <img src='' alt='' /> */}
        <h2 className="mt-8 mb-2 text-xl bold">How to Try Project?</h2>
        <p className="mb-2">These steps will tell you how to try this project</p>
        <ol className="flex flex-col gap-1">
          <li>Step1: Sign IN</li>
          <li>Step2: Add products to cart</li>
          <li>Step3: Go to cart fill up the details</li>
          <li>Step4: Click on place order</li>
          <li>Step5: Choose payment options</li>
        </ol>

        <h2 className="mt-8 mb-2 text-xl bold">Card Details</h2>
        <ul className="flex flex-col gap-1">
          <li>Card Number : 4242 4242 4242 4242</li>
          <li>Card expirty : 11/25</li>
          <li>Card cvv : 001</li>
        </ul>

      </div>
    </>
  )
}
