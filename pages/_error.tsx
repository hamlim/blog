export default function Error() {
  return <pre>Failed to render the site! This is bad!</pre>
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
