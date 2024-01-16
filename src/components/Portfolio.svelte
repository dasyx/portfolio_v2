<script>
  // On peut utiliser la prop 'projets' dans le script
  export const projets = [
    {
      imgSrc: "/projects-img/groupomania.webp",
      altText: "groupomania",
      projectUrl: "https://groupo-frontend.vercel.app/",
      codeUrl: "https://github.com/dasyx/groupo_backend",
      technologies: ["VUE", "SASS", "BULMA", "NODE", "MYSQL"],
      mustsees: [
        "Création d'un réseau social d'entreprise",
        "Serveur Node.js + express + JWT & Bcrypt",
        "API RESTful",
        "Base de données MySQL",
      ],
    },
    {
      imgSrc: "/projects-img/mlindustrie.webp",
      altText: "mlindustrie",
      projectUrl: "https://mlindustrie.fr",
      codeUrl: "https://github.com/dasyx/mlindustrie_local",
      technologies: ["VUE", "SASS", "NODE", "MONGODB"],
      mustsees: [
        "Site web sécurisé (OWASP friendly)",
        "Espace utilisateur (RGPD friendly) full access",
        "Base de données MongoDB",
        "Backend sur Heroku + Frontend sur Netlify",
      ],
    },
    {
      imgSrc: "/projects-img/pasquier.webp",
      altText: "pasquier",
      projectUrl: "https://meublesgerardpasquier.fr/",
      codeUrl: "https://github.com/dasyx/meubles_gerard_pasquier",
      technologies: ["HTML", "CSS", "JS", "PARCEL"],
      mustsees: [
        "Site web commercial multi-pages design",
        "Utilisation de Parcel pour le bundling",
        "Responsive design",
      ],
    },
    {
      imgSrc: "/projects-img/scribe.webp",
      altText: "scribe",
      projectUrl: "https://majestic-tarsier-2ac220.netlify.app",
      codeUrl: "https://github.com/dasyx/client_scribe",
      technologies: ["SVELTE", "TAILWIND", "SUPABASE"],
      mustsees: [
        "Application web de gestion devis/factures",
        "Intégration du CRUD de Supabase",
        "Utilisation de Vite pour le bundling",
      ],
    },
    /* {
      imgSrc: "/projects-img/vocationa.webp",
      altText: "vocationa",
      projectUrl: "https://main--stellar-salamander-c473dd.netlify.app/",
      codeUrl: "https://github.com/dasyx/vocationa",
      technologies: ["SVELTE", "TAILWIND", "FAUNABD", "CLERK"],
      mustsees: [
        "Application web d'immersion professionnelle",
        "Intégration du CRUD de FaunaDB",
        "Utilisation de Clerk pour l'authentification",
      ],
    }, */
  ];
</script>

<div
  class="portfolio-container grid grid-cols-4 md:grid-cols-6 sm:grid-cols-12"
>
  <h3 class="absolute top-16 left-12">PORTFOLIO</h3>
  {#each projets as projet, index}
    <div
      class="col-span-4 sm:col-span-12 md:col-span-6 lg:pl-6 project-item project-{index}"
    >
      <div class="flex flex-col xl:flex-row">
        <figure
          class="group relative overflow-hidden blur-on-hover w-full h-64 lg:w-1/2"
        >
          <img
            src={projet.imgSrc}
            alt={projet.altText}
            class="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col w-full h-full"
          >
            <div
              class="flex-1 bg-gray-800 bg-opacity-60 flex items-center justify-center"
            >
              <a
                href={projet.projectUrl}
                target="_blank"
                rel="noopener"
                class="text-white">Voir le site</a
              >
            </div>
            <div
              class="flex-1 bg-gray-500 bg-opacity-60 flex items-center justify-center"
            >
              <a
                href={projet.codeUrl}
                target="_blank"
                rel="noopener"
                class="text-white">Voir le code</a
              >
            </div>
          </div>
        </figure>
        <div class="descriptif-projet mt-2 md:mt-0 md:ml-4 w-full">
          {#each projet.technologies as tech}
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{tech}</span
            >
          {/each}
          <div class="label-et-listes">
            <ul class="listes-a-puces">
              {#each projet.mustsees as mustsee}
                <li>{mustsee}</li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  figure {
    transition: all 0.5s ease;
    z-index: 10;
    -webkit-box-shadow: 0px 0px 55px 23px rgba(46, 116, 255, 0.9);
    -moz-box-shadow: 0px 0px 55px 23px rgba(46, 116, 255, 0.9);
    box-shadow: 0px 0px 55px 23px rgba(46, 116, 255, 0.9);
    margin-right: 30px;
  }
  figure img {
    border: blanchedalmond 1px solid;
    border-radius: 5px;
  }
  .blur-on-hover {
    transition: filter 0.5s ease;
  }
  .blur-on-hover:hover img {
    filter: blur(5px); /* Ajustez la valeur du flou selon vos préférences */
  }
  .portfolio-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .portfolio-container figure {
    margin-bottom: 1rem;
  }
  .project-0 {
    margin-top: 14rem;
  }
  .project-1,
  .project-2,
  .project-3 {
    margin-top: 3rem;
  }
  .project-item:last-child {
    margin-bottom: 0;
  }
  .label-et-listes {
    border-top: 1px solid #ccc;
    padding-top: 10px;
  }

  .label-et-listes .label {
    display: block;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .label-et-listes .listes-a-puces {
    list-style-type: disc;
    padding-left: 20px;
  }
</style>
