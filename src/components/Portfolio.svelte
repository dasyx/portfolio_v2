<script>
  // On peut utiliser la prop 'projets' dans le script
  export const projets = [
    {
      imgSrc: "https://picsum.photos/200/300",
      altText: "Image 1",
      projectUrl: "https://google.com",
      codeUrl: "https://github.com",
      technologies: ["HTML", "CSS", "JS"],
    },
    {
      imgSrc: "https://picsum.photos/200/300",
      altText: "Image 2",
      projectUrl: "https://google.com",
      codeUrl: "https://github.com",
      technologies: ["HTML", "CSS", "JS"],
    },
    {
      imgSrc: "https://picsum.photos/200/300",
      altText: "Image 3",
      projectUrl: "https://google.com",
      codeUrl: "https://github.com",
      technologies: ["HTML", "CSS", "JS"],
    },
    {
      imgSrc: "https://picsum.photos/200/300",
      altText: "Image 4",
      projectUrl: "https://google.com",
      codeUrl: "https://github.com",
      technologies: ["HTML", "CSS", "JS"],
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
    margin-top: 10rem;
  }
  .portfolio-container figure {
    margin-bottom: 1rem;
  }
</style>
