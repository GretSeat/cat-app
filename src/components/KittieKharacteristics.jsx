export default function KittieKharacteristics() {
  return (
    <section>
      <p class="catBreedP card-title text-center fs-2 fw-bold">
        <span class="catBreedSpan">Kittie</span> Kharacteristics
      </p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" id="description">
          A description about this breed
        </li>
        <li class="list-group-item" id="likesKids">
          Does this cat like children?
        </li>
        <li class="list-group-item" id="likesDogs">
          How does this cat do with dogs?
        </li>
        <li class="list-group-item" id="likesStrangers">
          How will this cat feel about new people in your house?
        </li>
      </ul>
    </section>
  );
}
