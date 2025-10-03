fetch('events.json')
  .then(res => res.json())
  .then(data => {
    const futureContainer = document.getElementById("future-events");
    const pastContainer = document.getElementById("past-events");

    // Future events
    data.future.forEach(event => {
      const html = `
        <h3>${event.title}</h3>
        <h4>${event.date}, ${event.time}, ${event.location}</h4>
        <a href="${event.link}" target="_blank">${event.link}</a>
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
