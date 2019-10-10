module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateComment {
  count: Int!
}

type AggregateMarker {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Comment {
  id: ID!
  text: String!
  post: Post!
  user: User!
  createdAt: DateTime!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  id: ID
  text: String!
  post: PostCreateOneWithoutCommentsInput!
  user: UserCreateOneWithoutCommentsInput!
}

input CommentCreateManyWithoutPostInput {
  create: [CommentCreateWithoutPostInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateManyWithoutUserInput {
  create: [CommentCreateWithoutUserInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutPostInput {
  id: ID
  text: String!
  user: UserCreateOneWithoutCommentsInput!
}

input CommentCreateWithoutUserInput {
  id: ID
  text: String!
  post: PostCreateOneWithoutCommentsInput!
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
}

type CommentPreviousValues {
  id: ID!
  text: String!
  createdAt: DateTime!
}

input CommentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateInput {
  text: String
  post: PostUpdateOneRequiredWithoutCommentsInput
  user: UserUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateManyDataInput {
  text: String
}

input CommentUpdateManyMutationInput {
  text: String
}

input CommentUpdateManyWithoutPostInput {
  create: [CommentCreateWithoutPostInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutPostInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithoutUserInput {
  create: [CommentCreateWithoutUserInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateWithoutPostDataInput {
  text: String
  user: UserUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateWithoutUserDataInput {
  text: String
  post: PostUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutPostDataInput!
}

input CommentUpdateWithWhereUniqueWithoutUserInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutUserDataInput!
}

input CommentUpsertWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutPostDataInput!
  create: CommentCreateWithoutPostInput!
}

input CommentUpsertWithWhereUniqueWithoutUserInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutUserDataInput!
  create: CommentCreateWithoutUserInput!
}

input CommentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  post: PostWhereInput
  user: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Marker {
  id: ID!
  createdAt: DateTime!
  description: String!
  imageUrl: String!
  longitude: Float!
  latitude: Float!
  height: Float!
  markerPostedBy: User!
}

type MarkerConnection {
  pageInfo: PageInfo!
  edges: [MarkerEdge]!
  aggregate: AggregateMarker!
}

input MarkerCreateInput {
  id: ID
  description: String!
  imageUrl: String!
  longitude: Float!
  latitude: Float!
  height: Float!
  markerPostedBy: UserCreateOneWithoutMarkersInput!
}

input MarkerCreateManyWithoutMarkerPostedByInput {
  create: [MarkerCreateWithoutMarkerPostedByInput!]
  connect: [MarkerWhereUniqueInput!]
}

input MarkerCreateOneInput {
  create: MarkerCreateInput
  connect: MarkerWhereUniqueInput
}

input MarkerCreateWithoutMarkerPostedByInput {
  id: ID
  description: String!
  imageUrl: String!
  longitude: Float!
  latitude: Float!
  height: Float!
}

type MarkerEdge {
  node: Marker!
  cursor: String!
}

enum MarkerOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  description_ASC
  description_DESC
  imageUrl_ASC
  imageUrl_DESC
  longitude_ASC
  longitude_DESC
  latitude_ASC
  latitude_DESC
  height_ASC
  height_DESC
}

type MarkerPreviousValues {
  id: ID!
  createdAt: DateTime!
  description: String!
  imageUrl: String!
  longitude: Float!
  latitude: Float!
  height: Float!
}

input MarkerScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  longitude: Float
  longitude_not: Float
  longitude_in: [Float!]
  longitude_not_in: [Float!]
  longitude_lt: Float
  longitude_lte: Float
  longitude_gt: Float
  longitude_gte: Float
  latitude: Float
  latitude_not: Float
  latitude_in: [Float!]
  latitude_not_in: [Float!]
  latitude_lt: Float
  latitude_lte: Float
  latitude_gt: Float
  latitude_gte: Float
  height: Float
  height_not: Float
  height_in: [Float!]
  height_not_in: [Float!]
  height_lt: Float
  height_lte: Float
  height_gt: Float
  height_gte: Float
  AND: [MarkerScalarWhereInput!]
  OR: [MarkerScalarWhereInput!]
  NOT: [MarkerScalarWhereInput!]
}

type MarkerSubscriptionPayload {
  mutation: MutationType!
  node: Marker
  updatedFields: [String!]
  previousValues: MarkerPreviousValues
}

input MarkerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MarkerWhereInput
  AND: [MarkerSubscriptionWhereInput!]
  OR: [MarkerSubscriptionWhereInput!]
  NOT: [MarkerSubscriptionWhereInput!]
}

input MarkerUpdateDataInput {
  description: String
  imageUrl: String
  longitude: Float
  latitude: Float
  height: Float
  markerPostedBy: UserUpdateOneRequiredWithoutMarkersInput
}

input MarkerUpdateInput {
  description: String
  imageUrl: String
  longitude: Float
  latitude: Float
  height: Float
  markerPostedBy: UserUpdateOneRequiredWithoutMarkersInput
}

input MarkerUpdateManyDataInput {
  description: String
  imageUrl: String
  longitude: Float
  latitude: Float
  height: Float
}

input MarkerUpdateManyMutationInput {
  description: String
  imageUrl: String
  longitude: Float
  latitude: Float
  height: Float
}

input MarkerUpdateManyWithoutMarkerPostedByInput {
  create: [MarkerCreateWithoutMarkerPostedByInput!]
  delete: [MarkerWhereUniqueInput!]
  connect: [MarkerWhereUniqueInput!]
  set: [MarkerWhereUniqueInput!]
  disconnect: [MarkerWhereUniqueInput!]
  update: [MarkerUpdateWithWhereUniqueWithoutMarkerPostedByInput!]
  upsert: [MarkerUpsertWithWhereUniqueWithoutMarkerPostedByInput!]
  deleteMany: [MarkerScalarWhereInput!]
  updateMany: [MarkerUpdateManyWithWhereNestedInput!]
}

input MarkerUpdateManyWithWhereNestedInput {
  where: MarkerScalarWhereInput!
  data: MarkerUpdateManyDataInput!
}

input MarkerUpdateOneRequiredInput {
  create: MarkerCreateInput
  update: MarkerUpdateDataInput
  upsert: MarkerUpsertNestedInput
  connect: MarkerWhereUniqueInput
}

input MarkerUpdateWithoutMarkerPostedByDataInput {
  description: String
  imageUrl: String
  longitude: Float
  latitude: Float
  height: Float
}

input MarkerUpdateWithWhereUniqueWithoutMarkerPostedByInput {
  where: MarkerWhereUniqueInput!
  data: MarkerUpdateWithoutMarkerPostedByDataInput!
}

input MarkerUpsertNestedInput {
  update: MarkerUpdateDataInput!
  create: MarkerCreateInput!
}

input MarkerUpsertWithWhereUniqueWithoutMarkerPostedByInput {
  where: MarkerWhereUniqueInput!
  update: MarkerUpdateWithoutMarkerPostedByDataInput!
  create: MarkerCreateWithoutMarkerPostedByInput!
}

input MarkerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  longitude: Float
  longitude_not: Float
  longitude_in: [Float!]
  longitude_not_in: [Float!]
  longitude_lt: Float
  longitude_lte: Float
  longitude_gt: Float
  longitude_gte: Float
  latitude: Float
  latitude_not: Float
  latitude_in: [Float!]
  latitude_not_in: [Float!]
  latitude_lt: Float
  latitude_lte: Float
  latitude_gt: Float
  latitude_gte: Float
  height: Float
  height_not: Float
  height_in: [Float!]
  height_not_in: [Float!]
  height_lt: Float
  height_lte: Float
  height_gt: Float
  height_gte: Float
  markerPostedBy: UserWhereInput
  AND: [MarkerWhereInput!]
  OR: [MarkerWhereInput!]
  NOT: [MarkerWhereInput!]
}

input MarkerWhereUniqueInput {
  id: ID
}

type Mutation {
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createMarker(data: MarkerCreateInput!): Marker!
  updateMarker(data: MarkerUpdateInput!, where: MarkerWhereUniqueInput!): Marker
  updateManyMarkers(data: MarkerUpdateManyMutationInput!, where: MarkerWhereInput): BatchPayload!
  upsertMarker(where: MarkerWhereUniqueInput!, create: MarkerCreateInput!, update: MarkerUpdateInput!): Marker!
  deleteMarker(where: MarkerWhereUniqueInput!): Marker
  deleteManyMarkers(where: MarkerWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  createdAt: DateTime!
  description: String!
  privacy: Boolean!
  xDistance: Float!
  yDistance: Float!
  zDistance: Float!
  postPostedBy: User!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  marker: Marker!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  id: ID
  description: String!
  privacy: Boolean!
  xDistance: Float!
  yDistance: Float!
  zDistance: Float!
  postPostedBy: UserCreateOneWithoutPostsInput!
  comments: CommentCreateManyWithoutPostInput
  marker: MarkerCreateOneInput!
}

input PostCreateManyWithoutPostPostedByInput {
  create: [PostCreateWithoutPostPostedByInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneWithoutCommentsInput {
  create: PostCreateWithoutCommentsInput
  connect: PostWhereUniqueInput
}

input PostCreateWithoutCommentsInput {
  id: ID
  description: String!
  privacy: Boolean!
  xDistance: Float!
  yDistance: Float!
  zDistance: Float!
  postPostedBy: UserCreateOneWithoutPostsInput!
  marker: MarkerCreateOneInput!
}

input PostCreateWithoutPostPostedByInput {
  id: ID
  description: String!
  privacy: Boolean!
  xDistance: Float!
  yDistance: Float!
  zDistance: Float!
  comments: CommentCreateManyWithoutPostInput
  marker: MarkerCreateOneInput!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  description_ASC
  description_DESC
  privacy_ASC
  privacy_DESC
  xDistance_ASC
  xDistance_DESC
  yDistance_ASC
  yDistance_DESC
  zDistance_ASC
  zDistance_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  description: String!
  privacy: Boolean!
  xDistance: Float!
  yDistance: Float!
  zDistance: Float!
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  privacy: Boolean
  privacy_not: Boolean
  xDistance: Float
  xDistance_not: Float
  xDistance_in: [Float!]
  xDistance_not_in: [Float!]
  xDistance_lt: Float
  xDistance_lte: Float
  xDistance_gt: Float
  xDistance_gte: Float
  yDistance: Float
  yDistance_not: Float
  yDistance_in: [Float!]
  yDistance_not_in: [Float!]
  yDistance_lt: Float
  yDistance_lte: Float
  yDistance_gt: Float
  yDistance_gte: Float
  zDistance: Float
  zDistance_not: Float
  zDistance_in: [Float!]
  zDistance_not_in: [Float!]
  zDistance_lt: Float
  zDistance_lte: Float
  zDistance_gt: Float
  zDistance_gte: Float
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  description: String
  privacy: Boolean
  xDistance: Float
  yDistance: Float
  zDistance: Float
  postPostedBy: UserUpdateOneRequiredWithoutPostsInput
  comments: CommentUpdateManyWithoutPostInput
  marker: MarkerUpdateOneRequiredInput
}

input PostUpdateManyDataInput {
  description: String
  privacy: Boolean
  xDistance: Float
  yDistance: Float
  zDistance: Float
}

input PostUpdateManyMutationInput {
  description: String
  privacy: Boolean
  xDistance: Float
  yDistance: Float
  zDistance: Float
}

input PostUpdateManyWithoutPostPostedByInput {
  create: [PostCreateWithoutPostPostedByInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutPostPostedByInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutPostPostedByInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateOneRequiredWithoutCommentsInput {
  create: PostCreateWithoutCommentsInput
  update: PostUpdateWithoutCommentsDataInput
  upsert: PostUpsertWithoutCommentsInput
  connect: PostWhereUniqueInput
}

input PostUpdateWithoutCommentsDataInput {
  description: String
  privacy: Boolean
  xDistance: Float
  yDistance: Float
  zDistance: Float
  postPostedBy: UserUpdateOneRequiredWithoutPostsInput
  marker: MarkerUpdateOneRequiredInput
}

input PostUpdateWithoutPostPostedByDataInput {
  description: String
  privacy: Boolean
  xDistance: Float
  yDistance: Float
  zDistance: Float
  comments: CommentUpdateManyWithoutPostInput
  marker: MarkerUpdateOneRequiredInput
}

input PostUpdateWithWhereUniqueWithoutPostPostedByInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutPostPostedByDataInput!
}

input PostUpsertWithoutCommentsInput {
  update: PostUpdateWithoutCommentsDataInput!
  create: PostCreateWithoutCommentsInput!
}

input PostUpsertWithWhereUniqueWithoutPostPostedByInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutPostPostedByDataInput!
  create: PostCreateWithoutPostPostedByInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  privacy: Boolean
  privacy_not: Boolean
  xDistance: Float
  xDistance_not: Float
  xDistance_in: [Float!]
  xDistance_not_in: [Float!]
  xDistance_lt: Float
  xDistance_lte: Float
  xDistance_gt: Float
  xDistance_gte: Float
  yDistance: Float
  yDistance_not: Float
  yDistance_in: [Float!]
  yDistance_not_in: [Float!]
  yDistance_lt: Float
  yDistance_lte: Float
  yDistance_gt: Float
  yDistance_gte: Float
  zDistance: Float
  zDistance_not: Float
  zDistance_in: [Float!]
  zDistance_not_in: [Float!]
  zDistance_lt: Float
  zDistance_lte: Float
  zDistance_gt: Float
  zDistance_gte: Float
  postPostedBy: UserWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  marker: MarkerWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  marker(where: MarkerWhereUniqueInput!): Marker
  markers(where: MarkerWhereInput, orderBy: MarkerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Marker]!
  markersConnection(where: MarkerWhereInput, orderBy: MarkerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MarkerConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  marker(where: MarkerSubscriptionWhereInput): MarkerSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  markers(where: MarkerWhereInput, orderBy: MarkerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Marker!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  posts: PostCreateManyWithoutPostPostedByInput
  comments: CommentCreateManyWithoutUserInput
  markers: MarkerCreateManyWithoutMarkerPostedByInput
}

input UserCreateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMarkersInput {
  create: UserCreateWithoutMarkersInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCommentsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  posts: PostCreateManyWithoutPostPostedByInput
  markers: MarkerCreateManyWithoutMarkerPostedByInput
}

input UserCreateWithoutMarkersInput {
  id: ID
  name: String!
  email: String!
  password: String!
  posts: PostCreateManyWithoutPostPostedByInput
  comments: CommentCreateManyWithoutUserInput
}

input UserCreateWithoutPostsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  comments: CommentCreateManyWithoutUserInput
  markers: MarkerCreateManyWithoutMarkerPostedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  posts: PostUpdateManyWithoutPostPostedByInput
  comments: CommentUpdateManyWithoutUserInput
  markers: MarkerUpdateManyWithoutMarkerPostedByInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  update: UserUpdateWithoutCommentsDataInput
  upsert: UserUpsertWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutMarkersInput {
  create: UserCreateWithoutMarkersInput
  update: UserUpdateWithoutMarkersDataInput
  upsert: UserUpsertWithoutMarkersInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCommentsDataInput {
  name: String
  email: String
  password: String
  posts: PostUpdateManyWithoutPostPostedByInput
  markers: MarkerUpdateManyWithoutMarkerPostedByInput
}

input UserUpdateWithoutMarkersDataInput {
  name: String
  email: String
  password: String
  posts: PostUpdateManyWithoutPostPostedByInput
  comments: CommentUpdateManyWithoutUserInput
}

input UserUpdateWithoutPostsDataInput {
  name: String
  email: String
  password: String
  comments: CommentUpdateManyWithoutUserInput
  markers: MarkerUpdateManyWithoutMarkerPostedByInput
}

input UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput!
  create: UserCreateWithoutCommentsInput!
}

input UserUpsertWithoutMarkersInput {
  update: UserUpdateWithoutMarkersDataInput!
  create: UserCreateWithoutMarkersInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  markers_every: MarkerWhereInput
  markers_some: MarkerWhereInput
  markers_none: MarkerWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    