export default function recordPageVisit() {
  fetch('/api/record-page', {
    method: 'POST',
    body: JSON.stringify({
      url: window.location.href,
    }),
  }).then((res) => res.json())
}
