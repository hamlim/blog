import HeadTags from '@ui/HeadTags'

export default function Head({ params }) {
  return (
    <>
      <title>{params.title || "Matt's Blog"}</title>
      <HeadTags />
    </>
  )
}
