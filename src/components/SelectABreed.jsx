export default function SelectABreed() {
  return (
    <div>
      <div class="py-2">
        <span>
          Select a breed below, and find out if it's right for your home!
        </span>
      </div>

      <section class="pb-2">
        <select class="breeds-drop-down form-select text-center fs-5">
          <option value="starter" selected>
            Select a Breed
          </option>
        </select>
      </section>
    </div>
  );
}
