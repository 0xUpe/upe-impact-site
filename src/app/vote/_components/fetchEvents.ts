export const fetchEvents = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    throw new Error("API URL is not defined in environment variables.");
  }
  const response = await fetch(`${apiUrl}`);
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