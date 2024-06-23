export const fetchEvents = async () => {
  const response = await fetch("https://u.pe/wp-json/wp/v2/pages/46355");
  const data = await response.json();

  const eventsHtml = data.content.rendered;
  const parser = new DOMParser();
  const doc = parser.parseFromString(eventsHtml, 'text/html');
  const eventElements = doc.querySelectorAll('.geodir-post');

  const events = Array.from(eventElements).map(eventEl => {
    const titleEl = eventEl.querySelector('.geodir-entry-title a');
    const dateEl = eventEl.querySelector('.geodir-schedule-row');
    const venueEl = eventEl.querySelector('.geodir-field-venue_name');
    const imgEl = eventEl.querySelector('img');

    return {
      id: eventEl.getAttribute('data-post-id'),
      title: titleEl ? titleEl.textContent : '',
      date: dateEl ? dateEl.textContent : '',
      venue: venueEl ? venueEl.textContent : '',
      image: imgEl ? imgEl.getAttribute('data-src') : '',
      link: titleEl ? titleEl.getAttribute('href') : '',
      category: eventEl.querySelector('.geodir-field-post_category a')?.textContent || ''
    };
  });

  return events;
};
