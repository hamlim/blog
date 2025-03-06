import { type AppBskyFeedDefs, AppBskyFeedPost } from '@atproto/api'

const MinLikeCountFilter = (
  min: number,
): ((comment: AppBskyFeedDefs.ThreadViewPost) => boolean) => {
  return (comment: AppBskyFeedDefs.ThreadViewPost) => {
    return (comment.post.likeCount ?? 0) < min
  }
}

const MinCharacterCountFilter = (
  min: number,
): ((comment: AppBskyFeedDefs.ThreadViewPost) => boolean) => {
  return (comment: AppBskyFeedDefs.ThreadViewPost) => {
    if (!AppBskyFeedPost.isRecord(comment.post.record)) {
      return false
    }
    return (comment.post.record.text as unknown as string).length < min
  }
}

const TextContainsFilter = (
  text: string,
): ((comment: AppBskyFeedDefs.ThreadViewPost) => boolean) => {
  return (comment: AppBskyFeedDefs.ThreadViewPost) => {
    if (!AppBskyFeedPost.isRecord(comment.post.record)) {
      return false
    }
    return (comment.post.record.text as unknown as string)
      .toLowerCase()
      .includes(text.toLowerCase())
  }
}

const ExactMatchFilter = (
  text: string,
): ((comment: AppBskyFeedDefs.ThreadViewPost) => boolean) => {
  return (comment: AppBskyFeedDefs.ThreadViewPost) => {
    if (!AppBskyFeedPost.isRecord(comment.post.record)) {
      return false
    }
    return (
      (comment.post.record.text as unknown as string).toLowerCase() ===
      text.toLowerCase()
    )
  }
}

export const Filters = {
  MinLikeCountFilter,
  MinCharacterCountFilter,
  TextContainsFilter,
  ExactMatchFilter,
  NoLikes: MinLikeCountFilter(0),
  NoPins: ExactMatchFilter('📌'),
}

export default Filters
