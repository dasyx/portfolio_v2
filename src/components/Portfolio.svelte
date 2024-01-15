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

<div class="grid grid-cols-4 md:grid-cols-6 sm:grid-cols-12">
  {#each projets as projet}
    <div class="col-span-4 md:col-span-6 sm:col-span-12">
      <figure class="group relative overflow-hidden">
        <img
          src={projet.imgSrc}
          alt={projet.altText}
          class="transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <div
          class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col"
        >
          <div class="flex-1 bg-blue-500 flex items-center justify-center">
            <a
              href={projet.projectUrl}
              target="_blank"
              rel="noopener"
              class="text-white">Voir le site</a
            >
          </div>
          <div class="flex-1 bg-green-500 flex items-center justify-center">
            <a
              href={projet.codeUrl}
              target="_blank"
              rel="noopener"
              class="text-white">Voir le code</a
            >
          </div>
        </div>
      </figure>
    </div>
  {/each}
</div>
