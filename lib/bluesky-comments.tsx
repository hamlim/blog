'use client'

import '@/vndr/bluesky-comments/CommentSection.css'
import { BlueskyComments as BlueskyCommentsComponent } from '@/vndr/bluesky-comments/main'

export function BlueskyComments() {
  return <BlueskyCommentsComponent author="matthamlin.me" />
}
