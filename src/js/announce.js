const accordion = document.body.querySelector('.announce__accordion')
const $URL = 'http://localhost:1337/api/announces'



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
          <p>${announce.attributes.announceTytul}
          <p>${announce.attributes.announceData}
          ${announce.attributes.announceTresc1 != null ? `<p>1. ${announce.attributes.announceTresc1}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc2 != null ? `<p>2. ${announce.attributes.announceTresc2}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc3 != null ? `<p>3. ${announce.attributes.announceTresc3}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc4 != null ? `<p>4. ${announce.attributes.announceTresc4}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc5 != null ? `<p>5. ${announce.attributes.announceTresc5}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc6 != null ? `<p>6. ${announce.attributes.announceTresc6}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc7 != null ? `<p>7. ${announce.attributes.announceTresc7}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc8 != null ? `<p>8. ${announce.attributes.announceTresc8}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc9 != null ? `<p>9. ${announce.attributes.announceTresc9}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc10 != null ? `<p>10. ${announce.attributes.announceTresc10}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc11 != null ? `<p>11. ${announce.attributes.announceTresc11}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc12 != null ? `<p>12. ${announce.attributes.announceTresc12}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc13 != null ? `<p>13. ${announce.attributes.announceTresc13}</p>` : '<span></span>'}
          ${announce.attributes.announceTresc14 != null ? `<p>14. ${announce.attributes.announceTresc14}</p>` : '<span></span>'}
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