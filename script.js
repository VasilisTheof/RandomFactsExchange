fetch(`events.json?v=${new Date().getTime()}`)
  .then(res => res.json())
  .then(data => {
    const futureContainer = document.getElementById("future-events");
    const pastContainer = document.getElementById("past-events");

    // Future events
    data.future.forEach(event => {
      const html = `
        <h3>${event.title}</h3>
        <p>
          ${event.date}${event.time ? ', ' + event.time : ''}<br>
          ${event.location ? event.location : ''}
        </p>
        ${event.link ? `<p><a href="${event.link}" target="_blank">${event.link}</a></p>` : ''}
      `;
      futureContainer.innerHTML += html;
    });

    // Past events
    data.past.forEach(event => {
      const html = `
        <h3>${event.title}</h3>
        <h4>${event.date}</h4>
        ${event.talks ? event.talks.map(t => `<p>${t}</p>`).join("") : ""}
      `;
      pastContainer.innerHTML += html;
    });
  })
  .catch(err => console.error("Error loading events.json:", err));
