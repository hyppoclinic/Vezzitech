# Security Specification for Blog Applet

## 1. Data Invariants
- Posts must have a title, content, createdAt, and unique slug.
- CreatedAt must be server-side timestamp.
- Author must be the authenticated user who created the post.
- Only authenticated users can manage posts.

## 2. The "Dirty Dozen" Payloads
1.  { "title": "Post", "slug": "post" } (Missing fields: content, createdAt)
2.  { "title": "Post", "content": "Hello", "createdAt": "not-a-timestamp", "slug": "post" }
3.  { "title": "Post", "content": "Hello", "createdAt": "2026-06-19T00:00:00Z", "slug": "post", "extra": "poison" } (Extra field)
4.  { "title": "", "content": "Hello", "createdAt": "2026-06-19T00:00:00Z", "slug": "post" } (Empty title)
5.  { "title": "A".repeat(1001), "content": "...", "createdAt": "...", "slug": "..." } (Length violation)
6.  { "title": "Title", "content": "...", "createdAt": "...", "slug": "...", "author": "other-user" } (Identity spoofing)
7.  Attempt update createdAt field.
8.  Post with slug containing illegal characters.
9.  Attempt access to a post as non-authenticated user.
10. Attempt to write to posts subcollection without authentication.
11. Attempt to update post content while status is "published" (terminal).
12. Attempt to create post with non-verified email.

## 3. The Test Runner
[firestore.rules.test.ts would be generated here]
