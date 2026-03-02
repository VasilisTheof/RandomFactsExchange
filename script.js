fetch(`events.json?v=${new Date().getTime()}`)
  .then(res => res.json())
  .then(data => {

    const pastContainer = document.getElementById("past-events");

    // Past events (loaded from JSON)
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
