import { ref } from "vue";
import { defineStore } from "pinia";

function createPortfolioItem(portfolioObject) {
  return { ...portfolioObject };
}

export const usePortfolioStore = defineStore("portfolio", () => {
  const portfolioItems = ref([
    createPortfolioItem({
      id: 1,
      imageUrls: [
        "https://i.imgur.com/U3OgFnt.png",
        "https://i.imgur.com/0x9A6n0.png",
        "https://i.imgur.com/Ka2plSH.png",
        "https://i.imgur.com/0x9A6n0.png",
      ],
      coverImage: "https://i.imgur.com/U3OgFnt.png",
      title: "Vanstreek groente en fruit",
      shortDesc:
        "This is a system that brings local suppliers together with customers",
      desc:
        "This was a school project with the client Vanstreek, <br> " +
        "We needed to create a web application that offers local fruit and vegetable producers the opportunity to promote and sell their products. <br><br>" +
        "The Technologies used are listed on the right, but we used mostly Angular with Typescript for the frontend application and Spring Boot for the backend.",
      client: "Vanstreek",
      started: "15/09/2020",
      ended: "19/01/2021",
      status: "Done",
      github: "https://gitlab.fdmci.hva.nl/se-ewa-2020-2021/vanstreek-2",
      technologies: [
        "HTML",
        "TYPESCRIPT",
        "ANGULAR",
        "REST",
        "SPRING",
        "MYSQL",
        "JPA",
      ],
      demo: "https://vanstreek2-fe-app-staging.herokuapp.com/",
      category: [1, 2, 5],
      tags: [],
    }),
    createPortfolioItem({
      id: 2,
      imageUrls: [
        "https://i.imgur.com/GWkIR6X.png",
        "https://i.imgur.com/LNjB4r4.png",
        "https://i.imgur.com/GWkIR6X.png",
        "https://i.imgur.com/LNjB4r4.png",
      ],
      coverImage: "https://i.imgur.com/GWkIR6X.png",
      title: "Corendon Project Fasten Your Seatbelt",
      shortDesc: "System built to find and match travel partners",
      desc:
        "Project Fasten Your Seatbelt was a project created by Corendon, and we as students had to realize the project, <br> " +
        "Basically Corendon noticed many lonely travelers and wanted to have a platform where travelers could leave their interest " +
        "and find a match with another traveler and if desired travel together <br><br>" +
        "We used technologies like HTML, CSS, and Javascript with the help of an API provided by the University",
      client: "Corendon",
      started: "07/09/2019",
      ended: "16/01/2020",
      status: "Done",
      github: "https://gitlab.fdmci.hva.nl/FYS/1920/is107/team-1",
      technologies: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "BOOTSTRAP",
        "FYSCLOUD-API",
        "MYSQL",
        "SQL",
      ],
      demo: null,
      category: [1, 2, 5],
      tags: [],
    }),
    createPortfolioItem({
      id: 3,
      imageUrls: [
        "https://i.imgur.com/EfIRPKo.png",
        "https://i.imgur.com/V0ze987.png",
        "https://i.imgur.com/NnAlx2i.png",
        "https://i.imgur.com/V0ze987.png",
      ],
      coverImage: "https://i.imgur.com/EfIRPKo.png",
      title: "Ben Sajet Project Agile Development",
      shortDesc: "System built to find and match travel partners",
      desc:
        "A system where the young and old community can organize activities together. " +
        "The focus of Project Agile Development was on learning us to lead a project in an Agile method SCRUM. <br><br> " +
        "We received different lessons about the project development method SCRUM and learned a lot about it in this project. " +
        "This project was started on order of Ben Sajet. That is a company that cares for elder people. <br>" +
        "The point was to create a system what elder people could use to be in contact with the new generation and hold events together <br>" +
        "As said the focus was on Agile:SCRUM, other technologies were Javascript, SQL, MySQL",
      client: "Ben Sajet",
      started: "04/02/2020",
      ended: "16/07/2020",
      status: "Done",
      github: "https://gitlab.fdmci.hva.nl/pad/19-20/bsc/team-12",
      technologies: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "BOOTSTRAP",
        "SCRUM",
        "MYSQL",
        "SQL",
      ],
      demo: null,
      category: [1, 2, 5],
      tags: [],
    }),
    createPortfolioItem({
      id: 4,
      imageUrls: [
        "https://i.imgur.com/bLLUfB9.png",
        "https://i.imgur.com/bHNKB17.png",
        "https://i.imgur.com/BoPmdXZ.png",
        "https://i.imgur.com/R6NuhRI.png",
      ],
      coverImage: "https://i.imgur.com/bLLUfB9.png",
      title: "Flask Atom Forum",
      shortDesc:
        "Side project where futures off Python with Flask Framework is tested with creating a Forum app",
      desc:
        "In my new semester I dived deeper into development with Python. <br><br> " +
        "For example, I started learning machine learning models with python and sklearn but I also learned to work with the Flask framework and Python " +
        "To test my knowledge and to train my skills I created a Forum app with functionalities like: <br>" +
        "Creating account, login, CRUD operation for creating Posts, Password forgot function, adding comments to posts, etc.",
      client: "Personal",
      started: "10/04/2021",
      ended: "18/04/2021",
      status: "Done",
      github: "https://github.com/Faronoz/FlaskAppBase-Forum",
      technologies: [
        "PYTHON",
        "FLASK",
        "HTML/CSS",
        "BOOTSTRAP",
        "SCRUM",
        "MYSQL",
        "SQL",
      ],
      demo: null,
      category: [1, 2],
      tags: [],
    }),
  ]);

  const portfolioCategories = ref([
    { id: 1, name: "All Items" },
    { id: 2, name: "Web Development" },
    { id: 3, name: "Game Development" },
    { id: 4, name: "Vue.JS" },
    { id: 5, name: "Backend Development" },
    // School: 'School Projects',
    // Other: 'Other',
  ]);

  const getAllPortfolioItems = () => {
    // Simulate an API call, replace with your actual logic
    return portfolioItems.value;
  };

  function getPortfolioItemById(portfolioId) {
    const filtered = portfolioItems.value.filter((item) => {
      return item.id.toString() === portfolioId;
    });
    console.log(filtered[0])
    console.log(portfolioItems.value[0])

    return filtered[0];
  }


  const getPortfolioItemsByCategory = (categoryId) => {
    console.log(categoryId);
    console.log("FILTER");
    // Filter portfolio items by category
    return portfolioItems.value.filter((item) =>
      item.category.some((categor) => categor === categoryId)
    );
  };

  return {
    portfolioItems,
    portfolioCategories,
    getAllPortfolioItems,
    getPortfolioItemsByCategory,
    getPortfolioItemById,
  };
});
