const accordion = document.body.querySelector('.intentions__accordion')
const $URL = 'http://localhost:1337/api/intentions'



const getDay = (day) => {
  const intentionDay = new Date()
  intentionDay.setYear(2022)
  intentionDay.setUTCMonth(10)
  intentionDay.setDate(day)

  return intentionDay.toLocaleString('pl', {
    dateStyle: 'full',
    timeStyle: 'medium',
  }).slice(0, -9)

}


const intentionAccordion = () => {
  let accordionCounter = 0
  let accordionBodyCounter = 100
  let day = 28;
  fetch($URL)
    .then(res => res.json())
    .then(data => data.data.forEach(intention => {
      accordion.innerHTML += `<div class="accordion-item">
        <h2 class="accordion-header" id="heading${accordionCounter}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${accordionCounter}" aria-expanded="false" aria-controls="collapse${accordionCounter}">
            ${intention.attributes.intentionTydzien}
          </button>
        </h2>
        <div id="collapse${accordionCounter}" class="accordion-collapse collapse" aria-labelledby="heading${accordionCounter}" data-bs-parent="#accordion${accordionCounter}">
          <div class="accordion-body">

        <div class="accordion" id="accordion${accordionBodyCounter}">
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading${accordionBodyCounter}">
                <button class="accordion-button accordion-button--inside collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${accordionBodyCounter}" aria-expanded="false" aria-controls="collapse${accordionBodyCounter}">
                ${getDay(day++)}
                </button>
              </h2>
        <div id="collapse${accordionBodyCounter}" class="accordion-collapse collapse" aria-labelledby="heading${accordionBodyCounter}" data-bs-parent="#accordion${accordionBodyCounter++}">
        <div class="accordion-body accordion-button--inside__text">
          <p >${intention.attributes.intentionPoniedzialek}</p>
        </div>
        </div>
        </div>
        </div>

        <div class="accordion" id="accordion${accordionBodyCounter}">
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading${accordionBodyCounter}">
            <button class="accordion-button accordion-button--inside collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${accordionBodyCounter}" aria-expanded="false" aria-controls="collapse${accordionBodyCounter}">
            ${getDay(day++)}
            </button>
          </h2>
    <div id="collapse${accordionBodyCounter}" class="accordion-collapse collapse" aria-labelledby="heading${accordionBodyCounter}" data-bs-parent="#accordion${accordionBodyCounter++}">
    <div class="accordion-body">
      <p>${intention.attributes.intentionWtorek}</p>
    </div>
    </div>
    </div>
    </div>

    <div class="accordion" id="accordion${accordionBodyCounter}">
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading${accordionBodyCounter}">
        <button class="accordion-button accordion-button--inside collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${accordionBodyCounter}" aria-expanded="false" aria-controls="collapse${accordionBodyCounter}">
        ${getDay(day++)}
        </button>
      </h2>
<div id="collapse${accordionBodyCounter}" class="accordion-collapse collapse" aria-labelledby="heading${accordionBodyCounter}" data-bs-parent="#accordion${accordionBodyCounter++}">
<div class="accordion-body">
  <p>${intention.attributes.intentionSroda}</p>
</div>
</div>
</div>
</div>

<div class="accordion" id="accordion${accordionBodyCounter}">
<div class="accordion-item">
  <h2 class="accordion-header" id="heading${accordionBodyCounter}">
    <button class="accordion-button accordion-button--inside collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${accordionBodyCounter}" aria-expanded="false" aria-controls="collapse${accordionBodyCounter}">
    ${getDay(day++)}
    </button>
  </h2>
<div id="collapse${accordionBodyCounter}" class="accordion-collapse collapse" aria-labelledby="heading${accordionBodyCounter}" data-bs-parent="#accordion${accordionBodyCounter++}">
<div class="accordion-body">
<p>${intention.attributes.intentionCzwartek}</p>
</div>
</div>
</div>
</div>

<div class="accordion" id="accordion${accordionBodyCounter}">
<div class="accordion-item">
  <h2 class="accordion-header" id="heading${accordionBodyCounter}">
    <button class="accordion-button accordion-button--inside collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${accordionBodyCounter}" aria-expanded="false" aria-controls="collapse${accordionBodyCounter}">
    ${getDay(day++)}
    </button>
  </h2>
<div id="collapse${accordionBodyCounter}" class="accordion-collapse collapse" aria-labelledby="heading${accordionBodyCounter}" data-bs-parent="#accordion${accordionBodyCounter++}">
<div class="accordion-body">
<p>${intention.attributes.intentionPiatek}</p>
</div>
</div>
</div>
</div>

<div class="accordion" id="accordion${accordionBodyCounter}">
<div class="accordion-item">
  <h2 class="accordion-header" id="heading${accordionBodyCounter}">
    <button class="accordion-button accordion-button--inside collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${accordionBodyCounter}" aria-expanded="false" aria-controls="collapse${accordionBodyCounter}">
    ${getDay(day++)}
    </button>
  </h2>
<div id="collapse${accordionBodyCounter}" class="accordion-collapse collapse" aria-labelledby="heading${accordionBodyCounter}" data-bs-parent="#accordion${accordionBodyCounter++}">
<div class="accordion-body">
<p>${intention.attributes.intentionSobota}</p>
</div>
</div>
</div>
</div>

<div class="accordion" id="accordion${accordionBodyCounter}">
<div class="accordion-item">
  <h2 class="accordion-header" id="heading${accordionBodyCounter}">
    <button class="accordion-button accordion-button--inside collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${accordionBodyCounter}" aria-expanded="false" aria-controls="collapse${accordionBodyCounter}">
    ${getDay(day++)}
    </button>
  </h2>
<div id="collapse${accordionBodyCounter}" class="accordion-collapse collapse" aria-labelledby="heading${accordionBodyCounter}" data-bs-parent="#accordion${accordionBodyCounter++}">
<div class="accordion-body">
<p>${intention.attributes.intentionNiedziela}</p>
</div>
</div>
</div>
</div>
          </div>
        </div>
      </div>`
      accordionCounter++
    }))
}


const getIntentions = async () => {
  await intentionAccordion()
}

export default getIntentions