const accordion = document.body.querySelector('.announce__accordion')
const $URL = 'https://backend-parafia.onrender.com/api/announces'

const anounceAccordion = () => {
  let accordionCounter = -1

  fetch($URL)
  .then(res => res.json())
  .then(data => data.data.forEach(announce => {
      accordion.innerHTML += `
      <div class="accordion-item">
      <h2 class="accordion-header" id="heading${accordionCounter}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${accordionCounter}" aria-expanded="false" aria-controls="collapse${accordionCounter}">
          ${announce.attributes.announceTytul}
        </button>
      </h2>
      <div id="collapse${accordionCounter}" class="accordion-collapse collapse" aria-labelledby="heading${accordionCounter--}" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p class="announce__title">${announce.attributes.announceTytul}
          <p class="announce__date">${announce.attributes.announceData}
          ${announce.attributes.announceTresc1 != null ? `<p class="announce__content"><span class="announce__number">1.</span> ${announce.attributes.announceTresc1}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc2 != null ? `<p class="announce__content"><span class="announce__number">2.</span> ${announce.attributes.announceTresc2}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc3 != null ? `<p class="announce__content"><span class="announce__number">3.</span> ${announce.attributes.announceTresc3}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc4 != null ? `<p class="announce__content"><span class="announce__number">4.</span> ${announce.attributes.announceTresc4}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc5 != null ? `<p class="announce__content"><span class="announce__number">5.</span> ${announce.attributes.announceTresc5}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc6 != null ? `<p class="announce__content"><span class="announce__number">6.</span> ${announce.attributes.announceTresc6}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc7 != null ? `<p class="announce__content"><span class="announce__number">7.</span> ${announce.attributes.announceTresc7}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc8 != null ? `<p class="announce__content"><span class="announce__number">8.</span> ${announce.attributes.announceTresc8}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc9 != null ? `<p class="announce__content"><span class="announce__number">9.</span> ${announce.attributes.announceTresc9}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc10 != null ? `<p class="announce__content"><span class="announce__number">10.</span> ${announce.attributes.announceTresc10}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc11 != null ? `<p class="announce__content"><span class="announce__number">11.</span> ${announce.attributes.announceTresc11}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc12 != null ? `<p class="announce__content"><span class="announce__number">12.</span> ${announce.attributes.announceTresc12}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc13 != null ? `<p class="announce__content"><span class="announce__number">13.</span> ${announce.attributes.announceTresc13}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc14 != null ? `<p class="announce__content"><span class="announce__number">14.</span> ${announce.attributes.announceTresc14}</p>` : '<span></span>'}
        </div>
      </div>
    </div>
      `
  }))
}

const getAnnounce = async () => {
  await anounceAccordion()
}

export default getAnnounce