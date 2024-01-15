<script>
  // On peut utiliser la prop 'projets' dans le script
  export const projets = [
    {
      imgSrc: "/projects-img/groupomania.webp",
      altText: "groupomania",
      projectUrl: "https://groupo-frontend.vercel.app/",
      codeUrl: "https://github.com/dasyx/groupo_backend",
      technologies: ["VUE", "SASS", "BULMA", "NODE", "MYSQL"],
    },
    {
      imgSrc: "/projects-img/mlindustrie.webp",
      altText: "mlindustrie",
      projectUrl: "https://mlindustrie.fr",
      codeUrl: "https://github.com/dasyx/mlindustrie_local",
      technologies: ["VUE", "SASS", "NODE", "MONGODB"],
    },
    {
      imgSrc: "/projects-img/pasquier.webp",
      altText: "pasquier",
      projectUrl: "https://meublesgerardpasquier.fr/",
      codeUrl: "https://github.com/dasyx/meubles_gerard_pasquier",
      technologies: ["HTML", "CSS", "JS", "PARCEL"],
    },
    {
      imgSrc: "/projects-img/scribe.webp",
      altText: "scribe",
      projectUrl: "https://majestic-tarsier-2ac220.netlify.app",
      codeUrl: "https://github.com/dasyx/client_scribe",
      technologies: ["SVELTE", "TAILWIND", "SUPABASE"],
    },
  ];
</script>

<div
  class="portfolio-container grid grid-cols-4 md:grid-cols-6 sm:grid-cols-12"
>
  {#each projets as projet}
    <div
      class="col-span-4 sm:col-span-12 mb-36 mt-38 md:col-span-6 mb-42 lg:pl-6 mb-19 mt-39"
    >
      <div class="flex flex-col md:flex-row">
        <!-- Modifier ici la classe de hauteur ou ajouter un style personnalisé -->
        <figure
          class="group relative overflow-hidden blur-on-hover w-full md:w-3/4 h-64
          lg:w-1/3"
        >
          <!-- Exemple avec h-64 -->
          <img
            src={projet.imgSrc}
            alt={projet.altText}
            class="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col w-full h-full"
          >
            <div
              class="flex-1
bg-gray-800 bg-opacity-60 flex items-center justify-center"
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
        <div class="descriptif-projet mt-2 md:mt-0 md:ml-4 w-full md:w-1/2">
          {#each projet.technologies as tech}
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{tech}</span
            >
          {/each}
          <p>{projet.description}</p>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  figure {
    transition: all 0.5s ease;
    z-index: 10;
  }
  .blur-on-hover {
    transition: filter 0.5s ease;
  }
  .blur-on-hover:hover img {
    filter: blur(5px); /* Ajustez la valeur du flou selon vos préférences */
  }
  .portfolio-container {
    margin-top: 12rem;
  }
  .portfolio-container figure {
    margin-bottom: 1rem;
  }
</style>
